import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { getAllCities, getLatAndLon, getWeather } from "../../services/service";
import styles from "./home.module.css";
import Search from './../search/search'
import Weather from "../weather/weather";

export default function Home() {

    const [cities, SetCities] = useState([])
    const [currentCity, SetCurrentCity] = useState("Jerusalem")
    const [loading, setLoading] = useState(true);
    const [loadingWeather, setLoadingWeather] = useState(true);
    const [latlonLocation, setLatlonLocation] = useState({ lat: 31.7667, lon: 35.2333 })
    const [weather, setWeather] = useState([])
    const [history, setHistory] = useState([])

    const { user } = useContext(UserContext);

    useEffect(() => {
        getAllCities().then((cities) => {
            if (cities) {
                SetCities(cities.data)
            } else {
                alert('שגיאה בטעינת ערים אנא נסה מאוחר יותר!');
            }
            setLoading(false)
        })
        handleClickSearch();
    }, [])

    useEffect(() => {
        wather()
    }, [latlonLocation])

    const wather = async () => {
        await getWeather(latlonLocation.lat, latlonLocation.lon).then((weather) => {
            setWeather(weather);
            setLoadingWeather(false)
        })

        const newHistory = [...history, currentCity];

        if (newHistory.length > 5) {
            newHistory.shift();
        }
        setHistory(newHistory)
    }

    async function handleClickSearch() {
        currentCity && await getLatAndLon(currentCity).then((data) => { handleLocation(data) })
    }

    async function handleLocation(location) {
        if (location) {
            setLatlonLocation({ lat: location.data.latitude, lon: location.data.longitude })
        }
    }

    return (
        <div className={styles.bg_img}>
            <h3 className="center">שלום {user.First_Name} {user.Last_Name}</h3>
            {!loading ? (
                <div>
                    <Search cities={cities} SetCurrentCity={SetCurrentCity} currentCity={currentCity} handleClickSearch={handleClickSearch} />
                </div>) : (<div>loading...</div>)
            }
            {!loadingWeather ? (
                <div>
                    <Weather weather={weather} currentCity={currentCity} />
                </div>)
                : (<div>
                    loading...
                </div>)
            }
        </div>)
}