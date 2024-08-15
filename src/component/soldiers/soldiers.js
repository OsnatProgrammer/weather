import React, { useContext, useState } from "react";
import styles from "./soldiers.module.css";
import HeaderForm from "../headerForm/soldierHeader";
import SoliderForm from "../soliderForm/soliderForm";
import SoliderArray from "../soliderArray/soliderArray";
import { SoldierContext } from "../../context/soliderContex";
import { updateMadorSoldiers } from "../../services/service";
import { UserContext } from "../../context/userContext";


export default function Soldiers() {

    const { setOpenPopup, soldiers, setSoldiers, selectedSoldiers, setSelectedSoldiers } = useContext(SoldierContext);
    const { user } = useContext(UserContext);

    const toggleSelecteSoldier = (id) => {
        setSelectedSoldiers((prev) =>
            prev.includes(id) ? prev.filter((soldierId) => soldierId !== id) : [...prev, id]
        );
    };

    const selectAll = () => {
        setSelectedSoldiers(soldiers.map(soldier => soldier.Mispar_Ishi));
    };

    const clearAll = () => {
        setSelectedSoldiers([]);
    };

    const deleteSelected = async () => {

        if (selectedSoldiers.includes(user.Mispar_Ishi)) {
            alert(` אינן יכול למחוק את עצמך כל עוד הנך מחובר! ${user.User_Name}`);
        }

        setSoldiers(prev => prev.filter(soldier =>
            !selectedSoldiers.includes(soldier.Mispar_Ishi) || soldier.Mispar_Ishi === user.Mispar_Ishi
        ));

        setSelectedSoldiers(prevSelected =>
            prevSelected.filter(misparIshi => misparIshi === user.Mispar_Ishi)
        );
    }

    const saveSoldiers = async () => updateMadorSoldiers({ "newSoldiers": [...soldiers], name: user.User_Name, password: user.Mispar_Ishi });

    return (
        <div className={styles.container}>
            <div className={styles.popup} >
                <div onClick={() => setOpenPopup(false)}>
                    <svg style={{ marginRight: "96%", padding: "8px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
                <HeaderForm />
                <SoliderForm />
                <div className={styles.scrollableSoldierArray}>
                    <SoliderArray toggleSelecteSoldier={toggleSelecteSoldier} selectedSoldiers={selectedSoldiers} />
                </div>
                {(soldiers.length > 0) && <div style={{ borderTop: '1px solid #e0e0e0' }}>
                    <div style={{ display: 'flex', justifyContent: 'end', margin: '0px 10px' }}>
                        <div style={{ margin: '10px px' }}>
                            <button className="button" onClick={selectAll}>בחר הכל</button>
                            <button className="button" onClick={clearAll}>נקה הכול</button>
                            <button className={selectedSoldiers.length === 0 ? "disabledButton" : "button"} onClick={deleteSelected} disabled={selectedSoldiers.length === 0}>מחיקת מסומנים</button>
                            <button className="button" onClick={saveSoldiers}>שמירה</button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}