
import React from 'react';
import styles from "./header.module.css";
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li><Link to="/">ראשי</Link></li>
            </ul>
        </div>
    )
}