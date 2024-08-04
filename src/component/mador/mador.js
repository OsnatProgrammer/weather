import React, { useEffect, useState } from 'react';
import styles from "./mador.module.css";
import { getSoldiers } from "../../services/service";
import Header from '../header/header';
import Soldiers from '../soldiers/soldiers';

export default function Mador() {

    const [soldiers, setSoldiers] = useState([])
    const [openPopup, setOpenPopup] = useState(false)

    useEffect(() => {
        getAllSoldiers()
    }, [])

    useEffect(() => {
        getAllSoldiers()
    }, [setOpenPopup])

    const getAllSoldiers = () => {
        getSoldiers().then(data => setSoldiers(data.data))
    }

    return (
        <div>
            <Header />
            5555
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