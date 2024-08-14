import React, { useContext } from "react";
import styles from "./soldiers.module.css";
import HeaderForm from "../headerForm/soldierHeader";
import SoliderForm from "../soliderForm/soliderForm";
import SoliderArray from "../soliderArray/soliderArray";
import { SoldierContext } from "../../context/soliderContex";


export default function Soldiers() {

    const { setOpenPopup } = useContext(SoldierContext);

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
                    <SoliderArray />
                </div>
                <div style={{ borderTop: '1px solid #e0e0e0' }}>
                    <div style={{ display: 'flex', justifyContent: 'end', margin: '0px 10px' }}>
                        <div style={{ margin: '10px px' }}>
                            <button className="button">בחר הכל</button>
                            <button className="button">נקה הכול</button>
                            <button className="button">מחיקת מסומנים</button>
                            <button className="button">שמירה</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}