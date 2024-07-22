import React, { useContext, useState } from 'react';
import { login } from "../../services/service"
import styles from "./login.module.css";
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const { user, setUser } = useContext(UserContext);

    const nav = useNavigate();

    function validateForm(userName, password) {

        const errors = {};
        const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]*[0-9]?[a-zA-Z]*[0-9]?[a-zA-Z]*[0-9]?$/;

        if (!userName.trim()) {
            errors.userName = '*שם משתמש הוא שדה חובה'
        } else if (!usernameRegex.test(userName)) {
            errors.userName = 'שם משתמש חייב להכיל לפחות אות קטנה אחת, אות גדולה אחת וללא תווים מיוחדים';
        }

        if (!password.trim()) {
            errors.password = '*סיסמה היא שדה חובה';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (validateForm(userName, password)) {
            const res = await login({ name: userName, password: password })
            if (res && res.status === 200) {
                localStorage.setItem('user', JSON.stringify({ name: userName, password: password }));
                setUser(res.data)
                nav('/')
            } else {
                alert("אחד או יותר מהפרטים שגוי...")
            }
            setUserName("")
            setPassword("")
        }
    }

    return (
        <div className={styles.from}>
            <h2>התחברות לחשבון</h2>
            <form onSubmit={handleSubmit} >
                <label htmlFor="user_name" >שם משתמש</label><br />
                <input
                    type="text"
                    placeholder="הכנס שם משתמש..."
                    name="user_name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className={styles.input}
                />
                <small>{errors.userName && <div className="error">{errors.userName}</div>}</small>
                <br />

                <label htmlFor="password">סיסמה</label><br />
                <input
                    type="password"
                    placeholder="הכנס סיסמה..."
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                />
                <small>{errors.password && <div className="error">{errors.password}</div>}</small>
                <br />

                <button type="submit" className="button">התחברות</button>
            </form>
        </div>
    )
}