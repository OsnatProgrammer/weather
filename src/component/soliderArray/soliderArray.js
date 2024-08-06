import React, { useContext } from "react";
import SoliderCard from "../solider/soliderCard";
import { SoldierContext } from "../../context/soliderContex";

export default function SoliderArray() {

    const { soldiers } = useContext(SoldierContext);

    return (
        <div>
            סדר לפי:
            <select>
                <option>עיר</option>
                <option>מיקום עיר בארץ</option>
                <option>מין</option>
                <option>תפקיד + דרגה </option>
            </select>

            {soldiers ? (soldiers.map((solider) => (
                <SoliderCard key={solider.Mispar_Ishi} solider={solider} />
            ))
            ) : null}
        </div>
    )
}