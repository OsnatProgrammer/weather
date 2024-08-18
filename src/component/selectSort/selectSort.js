import React, { useState, useRef, useEffect } from "react";
import style from './selectSort.module.css'

export default function SelectSort(props) {

    const options = [
        { value: "City", label: "עיר" },
        { value: "City_Location", label: "מיקום עיר בארץ" },
        { value: "Gender", label: "מין" },
        { value: "Role_Rank", label: "תפקיד + דרגה" }
    ];

    const [selectedValue, setSelectedValue] = useState(options[0].value);
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const selectRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleOptionClick = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        props.setFilterType(value);
    };

    return (
        <div ref={selectRef} className={style.container}>
            <div className={style.selectWrapper}>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={style.selectedOption}
                >
                    {options.find(option => option.value === selectedValue)?.label}
                </div>
                {isOpen && (
                    <div className={style.options}>
                        {options.map((option, index) => (
                            <div
                                key={option.value}
                                onClick={() => handleOptionClick(option.value)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={style.option}
                                style={{
                                    backgroundColor: hoveredIndex === index ? '#f0f0f0' : 'transparent',
                                    fontWeight: option.value === selectedValue || hoveredIndex === index ? 'bold' : 'normal',
                                }}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
