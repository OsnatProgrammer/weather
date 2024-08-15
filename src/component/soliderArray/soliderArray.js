import React, { useContext, useState } from "react";
import SoliderCard from "../solider/soliderCard";
import { SoldierContext } from "../../context/soliderContex";
import style from "./soliderArray.module.css";
import SelectSort from "../selectSort/selectSort";

export default function SoliderArray(props) {

    const [filterType, setFilterType] = useState('City_Location');

    const { soldiers, selectedSoldiers } = useContext(SoldierContext);

    const categorizeSoldiers = () => {
        return soldiers.reduce((groups, soldier) => {
            let category;

            if (filterType === 'Role_Rank') {
                category = `${soldier.Role} ${soldier.Rank}`;
            } else if (filterType === 'Gender') {
                category = soldier.Gender === 'נ' ? 'נקבה' : 'זכר';
            } else {
                category = soldier[filterType];
            }

            if (!groups[category]) {
                groups[category] = [];
            }

            groups[category].push(soldier);
            return groups;
        }, {});
    };

    const categorizedSoldiers = categorizeSoldiers();

    return (
        <div >
            <SelectSort setFilterType={setFilterType} />
            {Object.keys(categorizedSoldiers).map(category => (
                <div key={category}>
                    <div style={{ fontWeight: 'bold', margin: '15px' }}>
                        {category} ({categorizedSoldiers[category].length})
                    </div>
                    <div className={style.list}>
                        {categorizedSoldiers[category].map(solider => (
                            <SoliderCard key={solider.Mispar_Ishi} solider={solider} isSelected={selectedSoldiers.includes(solider.Mispar_Ishi)}
                            toggleSelecteSoldier={props.toggleSelecteSoldier} 
                             />
                        
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
