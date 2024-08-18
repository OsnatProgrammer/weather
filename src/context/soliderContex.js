import React, { createContext, useState } from "react";

export const SoldierContext = createContext();

export const SoldierProvider = ({ children }) => {
    const [soliders, setSoliders] = useState([])
    const [openPopup, setOpenPopup] = useState(false)
    const [selectedSoldiers, setSelectedSoldiers] = useState([]);

    return (
        <SoldierContext.Provider value={{ soliders, setSoliders, openPopup, setOpenPopup, selectedSoldiers, setSelectedSoldiers }}>
            {children}
        </SoldierContext.Provider>
    );
};

