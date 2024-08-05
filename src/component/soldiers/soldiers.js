import React, { useContext } from "react";
import styles from "./soldiers.module.css";
import HeaderForm from "../headerForm/soldierHeader";
import SoliderForm from "../soliderForm/soliderForm";
import { SoldierContext } from "../../context/soliderContex";


export default function Soldiers() {

    const { openPopup, setOpenPopup } = useContext(SoldierContext);

    return (
        <div className={styles.container}>
            <div className={styles.popup} >
                
                <svg style={{ marginRight: "8px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <HeaderForm />
                <SoliderForm />
            </div>
        </div>
    )
}