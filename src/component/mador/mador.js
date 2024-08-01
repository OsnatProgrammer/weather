import React, { useEffect, useState } from 'react';
import styles from "./mador.module.css";
import { getSoldiers } from "../../services/service";
import Header from '../header/header';

export default function Mador() {

    const [soldiers, setSoldiers] = useState([])

    useEffect(() => {
        getAllSoldiers()
    }, [])

    const getAllSoldiers = () => {
        getSoldiers().then(data => setSoldiers(data))
    }


    return (
        <div>
            <Header />
            {soldiers ?
                (<button className='button'>פתיחת חלון</button>)
                : <h2 className='center' style={{ color: "red", margin: "20px" }}>לא נמצאו נתונים להצגה :(</h2>
            }
        </div>
    )
}