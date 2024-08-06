import React from "react";
import style from "./soliderCard.module.css"

export default function SoliderCard(props) {

    return (
        <div className={style.card}>
            <div className={style.imgCard}>
                {props.solider.Gender === 'ז' ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45">
                        <defs>
                            <linearGradient id="27340ljoca" x1="50%" x2="50%" y1="0%" y2="98.152%">
                                <stop offset="0%" stop-color="#FF7B6E" />
                                <stop offset="100%" stop-color="#FF9C8D" />
                            </linearGradient>
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <g fill="url(#27340ljoca)" transform="translate(-1524 -657)">
                                <g>
                                    <g>
                                        <path d="M22.275 0C34.577 0 44.55 9.973 44.55 22.275c0 12.302-9.973 22.275-22.275 22.275C9.973 44.55 0 34.577 0 22.275 0 9.973 9.973 0 22.275 0zm0 2.413c-10.97 0-19.862 8.893-19.862 19.862 0 10.97 8.893 19.862 19.862 19.862 10.97 0 19.862-8.893 19.862-19.862 0-10.97-8.893-19.862-19.862-19.862zm-.073 22.825c6.469 0 9.906 2.772 10.313 8.314l.019.305v.024c0 .226-.162.413-.376.452l-.083.008H12.48c-.261-.01-.46-.221-.451-.475.192-5.752 3.584-8.628 10.173-8.628zm-.164-15.029c3.609 0 6.535 2.943 6.535 6.572 0 3.63-2.926 6.573-6.535 6.573s-6.535-2.943-6.535-6.573c0-3.63 2.926-6.572 6.535-6.572z" transform="translate(1322 586) translate(202.75 71)" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    : null
                }
            </div>
            <div className={style.text}>
                <h2 style={{ fontWeight: "bold" }}>{`${props.solider.First_Name} ${props.solider.Last_Name}`}</h2>
                <p style={{ fontWeight: "bold" }}>{props.solider.Rank}</p>
                <p >{props.solider.Role}</p>
            </div>
        </div>
    )
}