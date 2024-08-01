import React, { useContext, useEffect } from "react";
import style from "./history.module.css"
import { HistoryContext } from '../../context/historyContext';
import { useNavigate } from "react-router-dom";
import { getLatAndLon } from "../../services/service";
import Header from "../header/header";

export default function History() {

    const { setHistorySearch, historySearch, currentCity, setCurrentCity, setLatlonLocation } = useContext(HistoryContext);

    const nav = useNavigate();

    useEffect(() => {
        getLocation()
    }, [currentCity])

    const deselect = async (index) => {
        historySearch.length < 2 ? setCurrentCity("Jerusalem") : setCurrentCity(historySearch[index - 1].split('/')[1]);
        nav('/');
    }

    const selectMain = async (city) => {
        setCurrentCity(city.split('/')[1]);
        nav('/');
    }

    const deleteCity = async (index) => {
        setHistorySearch(historySearch.filter((city, i) => i !== index))
        historySearch.length < 1 ? setCurrentCity("Jerusalem") : setCurrentCity(currentCity)
    }

    const getLocation = async () => {
        currentCity && await getLatAndLon(currentCity).then((data) => { handleLocation(data) })
    }

    const handleLocation = (location) => {
        if (location) {
            setLatlonLocation({ lat: location.data.latitude, lon: location.data.longitude })
        }
    }

    return (
        <div>
            <Header />
            <h1 className="center" style={{ margin: "25px" }}>היסטוריית חיפושים</h1>
            {historySearch && historySearch.length > 0 ? (
                <table className="center">
                    <thead>
                        <tr>
                            <th>עיר</th>
                            <th>מדינה</th>
                            <th>יבשת</th>
                            <th>פעולות</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historySearch.map((city, index) => (
                            <tr key={index}>
                                <td>{city.split('/')[1]}</td>
                                <td>{city.split('/')[1]}</td>
                                <td>{city.split('/')[0]}</td>
                                <td>
                                    <ul>
                                        <li>
                                            {index === historySearch.length - 1 ? (
                                                <span onClick={() => deselect(index)}>ביטול בחירה</span>
                                            ) : (
                                                <span onClick={() => { selectMain(city) }} style={{ color: "gray" }} >הפוך לראשי</span>
                                            )}
                                        </li>
                                        |<li onClick={() => deleteCity(index)}>{<span>מחיקה מההיסטוריה </span>}</li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (<p className="center" style={{ color: "red" }}>לא נמצאו נתונים להצגה ): </p >)}
        </div>
    )
}