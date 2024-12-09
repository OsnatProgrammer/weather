
import React, { useContext } from 'react';
import styles from "./header.module.css";
import { Link } from 'react-router-dom';
import { HistoryContext } from '../../context/historyContext';

export default function Header() {

    const { historySearch, setHistorySearch, setCurrentCity, setLatlonLocation } = useContext(HistoryContext);

    const disconnection = () => {
        localStorage.removeItem('user');
        setHistorySearch([])
        setCurrentCity("Jerusalem")
        setLatlonLocation({ lat: 31.7667, lon: 35.2333 })
    }

    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li><Link to="/">ראשי</Link></li>
                <li><Link to="/mador">מדור</Link></li>
                <li><Link to="/history">היסטוריה - {historySearch.length}</Link></li>
            </ul>
            <div className={styles.leftMenu}>
                <Link to="/login" onClick={() => disconnection()}>התנתקות</Link>
            </div>
        </div>
    )
}