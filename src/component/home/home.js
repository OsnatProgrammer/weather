import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { getAllCities, getLatAndLon, getWeather } from "../../services/service";
import styles from "./home.module.css";
import Search from './../search/search'
import Weather from "../weather/weather";
import Header from "../header/header";
import { HistoryContext } from '../../context/historyContext';

export default function Home() {

    const [cities, SetCities] = useState([])
    const [loading, setLoading] = useState(true);
    const [loadingWeather, setLoadingWeather] = useState(true);
    const [weather, setWeather] = useState([])
    
    const { user } = useContext(UserContext);
    const { historySearch, setHistorySearch, currentCity, setCurrentCity, latlonLocation, setLatlonLocation } = useContext(HistoryContext);

    useEffect(() => {
        getAllCities().then((cities) => {
            if (cities) {
                SetCities(cities.data)
            } else {
                alert('שגיאה בטעינת ערים אנא נסה מאוחר יותר!');
            }
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        wather()
    }, [latlonLocation])

    const wather = async () => {
        await getWeather(latlonLocation.lat, latlonLocation.lon).then((weather) => {
            setWeather(weather);
            setLoadingWeather(false)
            if (historySearch[historySearch.length - 1] !== weather.data?.timezone) {

                const newHistory = [...historySearch, weather.data?.timezone];

                if (newHistory.length > 5) {
                    newHistory.shift();
                }
                setHistorySearch(newHistory)
            }
        })
    }

    const handleClickSearch = async () => {
        currentCity && await getLatAndLon(currentCity).then((data) => { handleLocation(data) })
    }

    const handleLocation = (location) => {
        if (location) {
            setLatlonLocation({ lat: location.data.latitude, lon: location.data.longitude })
        }
    }

    return (
        <div className={styles.bg_img}>
            <Header />
            <h3 className="center">שלום {user.First_Name} {user.Last_Name}</h3>
            {!loading ? (
                <div>
                    <Search cities={cities} setCurrentCity={setCurrentCity} currentCity={currentCity} handleClickSearch={handleClickSearch} />
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