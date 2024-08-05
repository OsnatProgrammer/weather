import React from "react";
import styles from "./soldierHeader.module.css";
import Clock from "../clock/clock";


export default function HeaderForm() {
    return (
        <div className={styles.container}>
            <div style={{ margin: "20px" }}>
                <svg width="30" height="30" viewBox="0 0 80 65" xmlns="http://www.w3.org/2000/svg">
                    <rect width="80" height="90" fill="purple" />
                    <g fill="white">
                        <path d="M 72 14 c 0 3.241 -2.246 5.905 -5.119 6.207 l -0.545 0.028 l -40.001 -0.002 l 4.65 5.123 c 1.935 2.13 2.177 5.42 0.725 7.84 l -0.337 0.504 l -0.389 0.474 c -2.073 2.283 -5.355 2.425 -7.58 0.428 l -0.43 -0.428 l -14.321 -15.765 c -0.852 -0.937 -1.396 -2.126 -1.587 -3.476 l -0.066 -0.688 l 0.003 -0.612 a 6.589 6.589 90 0 1 1.25 -3.553 l 0.4 -0.489 l 14.32 -15.765 c 2.213 -2.435 5.8 -2.435 8.011 0 c 2.074 2.283 2.204 5.896 0.39 8.345 l -0.39 0.474 l -4.653 5.117 l 40.005 0.003 c 2.76 0 5.06 2.173 5.562 5.05 L 71.974 13.4 L 72 14 z m -2 38.246 c -0.052 0.985 -0.417 1.953 -1.095 2.705 l -14.27 15.827 c -1.469 1.63 -3.851 1.63 -5.32 0 c -1.47 -1.63 -1.47 -4.272 0 -5.902 l 7.847 -8.705 l -44.4 0.002 C 10.685 56.173 9 54.305 9 52 c 0 -2.305 1.685 -4.173 3.762 -4.173 l 44.4 -0.002 l -7.847 -8.7 c -1.47 -1.63 -1.47 -4.273 0 -5.903 c 1.469 -1.63 3.851 -1.63 5.32 0 L 68.906 49.05 c 0.678 0.752 1.043 1.72 1.095 2.705 v 0.492 z M 68 14 c 0 -1.03 -0.663 -1.885 -1.537 -2.063 l -0.336 -0.034 l -48.737 -0.002 L 28.404 -0.42 c 0.731 -0.818 0.731 -2.146 0 -2.965 c -0.65 -0.728 -1.66 -0.809 -2.39 -0.243 l -0.26 0.243 l -14.209 15.903 c -0.247 0.277 -0.415 0.616 -0.494 0.931 l -0.048 0.304 l -0.003 0.373 c 0.02 0.382 0.131 0.747 0.325 1.061 l 0.22 0.297 l 14.21 15.903 c 0.73 0.819 1.917 0.819 2.649 0 c 0.65 -0.728 0.722 -1.858 0.216 -2.675 l -0.216 -0.29 L 17.39 16.095 l 48.736 0.002 C 67.16 16.097 68 15.158 68 14 z" fill-rule="evenodd" />
                        <path d="M 72 17.2 c 0 2.5928 -2.246 4.724 -5.119 4.9656 l -0.545 0.0224 l -40.001 -0.0016 l 4.65 4.0984 c 1.935 1.704 2.177 4.336 0.725 6.272 l -0.337 0.4032 l -0.389 0.3792 c -2.073 1.8264 -5.355 1.94 -7.58 0.3424 l -0.43 -0.3424 l -14.321 -12.612 c -0.852 -0.7496 -1.396 -1.7008 -1.587 -2.7808 l -0.066 -0.5504 l 0.003 -0.4896 a 6.589 5.2712 0 0 1 1.25 -2.8424 l 0.4 -0.3912 l 14.32 -12.612 c 2.213 -1.948 5.8 -1.948 8.011 0 c 2.074 1.8264 2.204 4.7168 0.39 6.676 l -0.39 0.3792 l -4.653 4.0936 l 40.005 0.0024 c 2.76 0 5.06 1.7384 5.562 4.04 L 71.974 16.72 L 72 17.2 z m -2 30.5968 c -0.052 0.788 -0.417 1.5624 -1.095 2.164 l -14.27 12.6616 c -1.469 1.304 -3.851 1.304 -5.32 0 c -1.47 -1.304 -1.47 -3.4176 0 -4.7216 l 7.847 -6.964 l -44.4 0.0016 C 10.685 50.9384 9 49.444 9 47.6 c 0 -1.844 1.685 -3.3384 3.762 -3.3384 l 44.4 -0.0016 l -7.847 -6.96 c -1.47 -1.304 -1.47 -3.4184 0 -4.7224 c 1.469 -1.304 3.851 -1.304 5.32 0 L 68.906 45.24 c 0.678 0.6016 1.043 1.376 1.095 2.164 v 0.3936 z M 68 17.2 c 0 -0.824 -0.663 -1.508 -1.537 -1.6504 l -0.336 -0.0272 l -48.737 -0.0016 L 28.404 5.664 c 0.731 -0.6544 0.731 -1.7168 0 -2.372 c -0.65 -0.5824 -1.66 -0.6472 -2.39 -0.1944 l -0.26 0.1944 l -14.209 12.7224 c -0.247 0.2216 -0.415 0.4928 -0.494 0.7448 l -0.048 0.2432 l -0.003 0.2984 c 0.02 0.3056 0.131 0.5976 0.325 0.8488 l 0.22 0.2376 l 14.21 12.7224 c 0.73 0.6552 1.917 0.6552 2.649 0 c 0.65 -0.5824 0.722 -1.4864 0.216 -2.14 l -0.216 -0.232 L 17.39 18.876 l 48.736 0.0016 C 67.16 18.8776 68 18.1264 68 17.2 z" fill-rule="evenodd" />
                    </g>
                </svg>
            </div>
            <div>
                <h2 style={{ margin: "0px" }}>חיילי המדור</h2>
                <Clock />
            </div>
        </div >
    )
}