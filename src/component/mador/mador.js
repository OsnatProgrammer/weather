import React, { useContext, useEffect, useState } from 'react';
import styles from "./mador.module.css";
import { getSoldiers } from "../../services/service";
import Header from '../header/header';
import Soldiers from '../soldiers/soldiers';
import { SoldierContext } from '../../context/soliderContex';

export default function Mador() {

    const { setSoldiers, openPopup, setOpenPopup } = useContext(SoldierContext);

    useEffect(() => {
        getAllSoldiers()
    }, [])


    const getAllSoldiers = () => {
        getSoldiers().then(data => setSoldiers(data.data))
    }


    return (
        <div>
            <Header />
            <div className={openPopup ? styles.blurred : ''}>
                <div className={styles.container}>
                    {!openPopup ?
                        (<button className='button' onClick={() => setOpenPopup(!openPopup)}>פתיחת חלון</button>)
                        : <Soldiers />
                    }
                </div>
            </div>
        </div>
    )
}