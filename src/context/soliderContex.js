import React, { createContext, useState } from "react";

export const SoldierContext = createContext();

export const SoldierProvider = ({ children }) => {
    const [soldiers, setSoldiers] = useState([])
    const [openPopup, setOpenPopup] = useState(false)
    const [selectedSoldiers, setSelectedSoldiers] = useState([]);

    return (
        <SoldierContext.Provider value={{ soldiers, setSoldiers, openPopup, setOpenPopup, selectedSoldiers, setSelectedSoldiers }}>
            {children}
        </SoldierContext.Provider>
    );
};

