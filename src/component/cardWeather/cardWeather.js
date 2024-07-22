import React from 'react';
import styles from './cardWeather.module.css';

export default function CardWeather(props) {
    return (
        <div className={styles.card} style={{ backgroundColor: props.details.color }}>
            <h3>{props.details.day}</h3>
            <img src={props.details.image} alt='weather icon' className={styles.weatherIcon} />
            <p style={{ margin: '0px' }}>{props.details.temperature}°C</p>
        </div>
    );
}