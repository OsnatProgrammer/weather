import React, { useContext, useEffect, useState } from "react";
import styles from "./soliderForm.module.css";
import { SoldierContext } from "../../context/soliderContex";

export default function SoliderForm() {

    const defaultSoldier = {
        Mispar_Ishi: '',
        User_Name: '',
        First_Name: '',
        Last_Name: '',
        Gender: ' ז',
        Role: ' מפתח תוכנה',
        Rank: ` קא\ב`,
        City: ' ראשון לציון',
        City_Location: ' מרכז',
        Is_Officer: true,
        Age: 19
    }

    const [newSolider, setNewSolider] = useState(defaultSoldier)
    const [errorSolider, setErrorSolider] = useState({
        Mispar_Ishi: '',
        User_Name: '',
        First_Name: '',
        Last_Name: ' ',
        Gender: '',
    });

    const { soldier, setSoldiers } = useContext(SoldierContext);

    const handleValidat = (field, field_value, validation, error) => {
        console.log(field, field_value, validation, error);
        let isValid = validation.test(field_value);
        isValid ? setErrorSolider({ ...errorSolider, [field]: '' }) : setErrorSolider({ ...errorSolider, [field]: error });
        setNewSolider({ ...newSolider, [field]: field_value });
    }


    const handleSubmit = () => {

    }

    const isButtonDisabled =
        errorSolider.First_Name.length > 0 ||
        errorSolider.Last_Name.length > 0 ||
        errorSolider.Mispar_Ishi.length > 0 ||
        errorSolider.User_Name.length > 0 ||
        !newSolider.First_Name ||
        !newSolider.Last_Name ||
        !newSolider.User_Name ||
        !newSolider.Mispar_Ishi ||
        !newSolider.Gender;

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.filed}>
                <input type="text" className={styles.input} value={newSolider.First_Name} placeholder="שם פרטי" name="First_Name" required onChange={(e) => handleValidat('First_Name', e.target.value, /^(?=[a-zA-Zא-ת0-9._]{3,8}$)(?!.*[_.]{2})[^_.].*[^_.]$/, 'שם פרטי אינו תקין')} />
                <p className="error">{errorSolider.First_Name}</p>
                <input className={styles.input} value={newSolider.Last_Name} placeholder="שם משפחה" name="Last_Name" required onChange={(e) => handleValidat('Last_Name', e.target.value, /^(?=[a-zA-Zא-ת0-9._]{3,8}$)(?!.*[_.]{2})[^_.].*[^_.]$/, 'שם משפחה אינו תקין')} />
                <p className="error">{errorSolider.Last_Name}</p>
                <input className={styles.input} value={newSolider.Mispar_Ishi} placeholder="מספר אישי" name="Mispar_Ishi" required onChange={(e) => handleValidat('Mispar_Ishi', e.target.value, /^\d{9}$/, 'מספר אישי חייב להיות באורך 9 ספרות')} />
                <p className="error">{errorSolider.Mispar_Ishi}</p>
                <input className={styles.input} value={newSolider.User_Name} placeholder="שם משתמש" name="User_Name" required onChange={(e) => handleValidat('User_Name', e.target.value, /^(?=.*[a-z])(?=.*[A-Z])(?!.*[^a-zA-Z0-9])(?!.*[0-9]{4,}).*$/, 'שם משתמש אינו תקין')} />
                <p className="error">{errorSolider.User_Name}</p>
                <label>מין </label>
                <select name="Gender" value={newSolider.Gender} onChange={(e) => setNewSolider({ ...newSolider, 'Gender': e.target.value })}>
                    <option>זכר</option>
                    <option>נקבה</option>
                </select>
                <div className={styles.buttonForm}>
                    <button type="submit" className={isButtonDisabled ? "soliderbutton" : "button"} disabled={isButtonDisabled}>הוספה</button>
                </div>
            </div>
        </form >
    )
}
