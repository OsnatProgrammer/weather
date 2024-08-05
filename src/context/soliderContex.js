import React, { createContext, useState } from "react";

export const SoldierContext = createContext();

export const SoldierProvider = ({ children }) => {
    const [soldiers, setSoldiers] = useState([])
    const [openPopup, setOpenPopup] = useState(false)

    return (
        <SoldierContext.Provider value={{ soldiers, setSoldiers, openPopup, setOpenPopup }}>
            {children}
        </SoldierContext.Provider>
    );
};

