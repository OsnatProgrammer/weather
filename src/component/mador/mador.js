import React, { useContext, useEffect } from 'react';
import styles from "./mador.module.css";
import { getSoldiers } from "../../services/service";
import Header from '../header/header';
import Soliders from '../soldiers/soldiers';
import { SoldierContext } from '../../context/soliderContex';

export default function Mador() {

    const { setSoliders, openPopup, setOpenPopup, soliders } = useContext(SoldierContext);

    const getAllSoldiers = () => {
        getSoldiers().then(data => setSoliders(data.data))
    }

    useEffect(() => {
        getAllSoldiers()
    }, [])

    useEffect(() => {
        setSoliders(soliders.sort((s1, s2) => s1.First_Name.localeCompare(s2.First_Name)))
    }, [soliders])

    return (
        <div>
            <Header />
            <div>
                <div className={styles.container}>
                    {!openPopup ?
                        (<button className='button' onClick={() => setOpenPopup(!openPopup)}>פתיחת חלון</button>)
                        : <Soliders />
                    }
                </div>
            </div>
        </div>
    )
}