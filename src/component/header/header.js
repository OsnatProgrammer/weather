
import React, { useContext } from 'react';
import styles from "./header.module.css";
import { Link } from 'react-router-dom';
import { HistoryContext } from '../../context/historyContext';

export default function Header() {

    const { historySearch } = useContext(HistoryContext);

    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li><Link to="/">ראשי</Link></li>
                <li><Link to="/history">היסטוריה - {historySearch.length}</Link></li>
            </ul>
        </div>
    )
}