import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { getAllCities, getLatAndLon } from "../../services/service";
import styles from "./home.module.css";
import Search from './../search/search'
import Weather from "../weather/weather";
import Header from "../header/header";
import weatherData from "./../../weatherData.json";

import { HistoryContext } from '../../context/historyContext';

export default function Home() {

    // Changes from API to files
    // const [loading, setLoading] = useState(true);

    const [loadingWeather, setLoadingWeather] = useState(true);
    const [weather, setWeather] = useState([])

    const { user } = useContext(UserContext);
    const { historySearch, setHistorySearch, currentCity, setCurrentCity, latlonLocation, setLatlonLocation } = useContext(HistoryContext);
    const cities = [
        { country: 'Jordan', city: 'Amman', continent: 'Asia' },
        { country: 'Israel', city: 'Jerusalem', continent: 'Asia' },
        { country: 'Italy', city: 'Rome', continent: 'Europe' },
        { country: 'Somalia', city: 'Mogadishu', continent: 'Africa' }]

    // Changes from API to files
    // useEffect(() => {
    //     getAllCities().then((cities) => {
    //         if (cities) {
    //             SetCities(cities.data)
    //         } else {
    //             alert('שגיאה בטעינת ערים אנא נסה מאוחר יותר!');
    //         }
    //         setLoading(false)
    //     })
    // }, [])

    useEffect(() => {
        wather()
    }, [latlonLocation])

    useEffect(() => {
        if (historySearch[historySearch.length - 1] !== weather.timezone && weather.timezone !== undefined) {
            const newHistory = [...historySearch, weather.timezone];

            if (newHistory.length > 5) { newHistory.shift(); }
            setHistorySearch(newHistory);
        }
    }, [weather])

    const getWeather = async (lat_lon) => {
        try {
            let city = weatherData.find((city) =>
                city.lat.toFixed(2) == lat_lon.lat.toFixed(2) &&
                city.lon.toFixed(2) == lat_lon.lon.toFixed(2));

            city ? setWeather(city) : setWeather("");

        } catch (err) {
            setWeather("");
            console.log(err.message);
            alert("User or password worng, or service down");
        }
    }

    const wather = async () => {
        try {
            await getWeather(latlonLocation);
            setLoadingWeather(false);
        } catch (err) {
            console.error("Error fetching weather:", err);
        }
    };

    const handleClickSearch = async () => {
        currentCity && await getLatAndLon(currentCity).then((data) => {handleLocation(data)})
    }

    const handleLocation = async (location) => {
        if (location) {
            await setLatlonLocation({ lat: location.data.latitude, lon: location.data.longitude })
        }
    }

    return (
        <div className={styles.bg_img}>
            <Header />
            <h3 className="center">שלום {user.First_Name} {user.Last_Name}</h3>
            {/* Changes from API to files */}
            {/* {!loading ? ( */}
            <div>
                <Search cities={cities} setCurrentCity={setCurrentCity} currentCity={currentCity} handleClickSearch={handleClickSearch} />
            </div>
            {/* Changes from API to files */}
            {/* ) : (<div>loading...</div>)} */}
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