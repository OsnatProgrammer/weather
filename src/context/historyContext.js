import React, { createContext, useState } from "react";

export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {

    const [currentCity, setCurrentCity] = useState("Jerusalem")
    const [latlonLocation, setLatlonLocation] = useState({ lat: 31.7667, lon: 35.2333 })
    const [historySearch, setHistorySearch] = useState([]);


    return (
        <HistoryContext.Provider value={{ historySearch, setHistorySearch, currentCity, setCurrentCity, latlonLocation, setLatlonLocation }}>
            {children}
        </HistoryContext.Provider>
    );
};