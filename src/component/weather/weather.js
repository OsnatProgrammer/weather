import React from 'react';
import styles from "./weather.module.css";
import CardWeather from './../cardWeather/cardWeather';

export default function Weather(props) {

    const daysArray = ["מחר", "בעוד יומיים", " בעוד 3 ימים", " בעוד 4 ימים"];

    const calcTemp = (index) => {
        const temp = props.weather.data.daily[index].temp;
        return Math.ceil(((temp.eve + temp.max) / 2) - 272.15);
    };

    const getImgByTemp = (index) => {
        const weather = props.weather.data.daily[index];
        let image = "rainbow";

        if (weather.temp.day > 29) {
            image = 'sun';
        } else if (weather.clouds > 20) {
            image = 'cloudAndSun';
        } else if (weather.pop > 40) {
            image = 'rain';
        }

        return `/images/${image}.png`;
    };

    const getColorFeelsLike = (index) => {
        let count = 0;
        if (props.weather) {
            const tempFeels = props.weather.data.daily[index].feels_like;
            const temp = props.weather.data.daily[index].temp;

            for (let key in tempFeels) {
                if (temp[key] < tempFeels[key]) {
                    count++;
                }
            }
        }

        if (count === 1) {
            return 'gray'
        }
        else if (count === 2) {
            return 'orenge'
        }

        else if (count > 2) {
            return 'red'
        }
    };


    return (
        <div className={styles.center}>
            <div className={styles.principalCard}>
                <div className={styles.container}>
                    <div style={{ width: '40%' }}>
                        <img src={getImgByTemp(0)} alt='icon' className={styles.weatherIcon} />
                    </div>
                    <div className={styles.today}>
                        <h1>היום</h1>
                        <h2>{props.currentCity}</h2>
                        <p>Temperature: {calcTemp(0)}°C</p>
                        <p>{props.weather.data.current.weather[0].description}</p>
                    </div>
                </div>
                <div className={styles.forecast}>
                    {daysArray.map((day, i) => (
                        <CardWeather
                            key={i + 1}
                            details={{
                                day: day,
                                color: getColorFeelsLike(i + 1),
                                image: getImgByTemp(i + 1),
                                temperature: calcTemp(i + 1),
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
