import React from "react";

export default function SelectSort(props) {

    return (
        <div style={{ borderBottom: '1px solid #e0e0e0' }}>
            <div style={{ margin: '10px' }}>סדר לפי:
                <select onChange={(e) => props.setFilterType(e.target.value)}>
                    <option value="City">עיר</option>
                    <option value="City_Location">מיקום עיר בארץ</option>
                    <option value="Gender">מין</option>
                    <option value="Role_Rank">תפקיד + דרגה</option>
                </select>
            </div>
        </div>
    )
}