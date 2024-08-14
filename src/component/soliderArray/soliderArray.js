import React, { useContext, useState } from "react";
import SoliderCard from "../solider/soliderCard";
import { SoldierContext } from "../../context/soliderContex";
import style from "./soliderArray.module.css";

export default function SoliderArray() {

    const [filterType, setFilterType] = useState('City_Location');

    const { soldiers } = useContext(SoldierContext);

    const categorizeSoldiers = () => {
        return soldiers.reduce((acc, soldier) => {
            let category;

            if (filterType === 'Role_Rank') {
                category = `${soldier.Role} ${soldier.Rank}`;
            } else if (filterType === 'Gender') {
                category = soldier.Gender === 'נ' ? 'נקבה' : 'זכר';
            } else {
                category = soldier[filterType];
            }

            if (!acc[category]) {
                acc[category] = [];
            }

            acc[category].push(soldier);
            return acc;
        }, {});
    };

    const categorizedSoldiers = categorizeSoldiers();

    return (
        <div className={style.container}>
                <div style={{ margin: '15px' }}>
                    סדר לפי:
                    <select onChange={(e) => setFilterType(e.target.value)}>
                        <option value="City">עיר</option>
                        <option value="City_Location">מיקום עיר בארץ</option>
                        <option value="Gender">מין</option>
                        <option value="Role_Rank">תפקיד + דרגה</option>
                    </select>
            </div>
            <hr />

            {Object.keys(categorizedSoldiers).map(category => (
                <div key={category}>
                    <div style={{ fontWeight: 'bold', margin: '15px' }}>
                        {category} ({categorizedSoldiers[category].length})
                    </div>
                    <div className={style.list}>
                        {categorizedSoldiers[category].map(solider => (
                            <SoliderCard key={solider.Mispar_Ishi} solider={solider} />
                        ))}
                    </div>
                </div>
            ))}
            <hr />
        </div>
    );
}
