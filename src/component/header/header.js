
import React from 'react';
import styles from "./header.module.css";
import { Link } from 'react-router-dom';

export default function Header() {

    const disconnection = () => {
        localStorage.removeItem('user');
    }

    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li><Link to="/">ראשי</Link></li>
                <li><Link to="/mador">מדור</Link></li>
            </ul>
            <div className={styles.leftMenu}>
                <Link to="/login" onClick={() => disconnection()}>התנתקות</Link>
            </div>
        </div>
    )
}