import React, { useEffect, useRef } from 'react';

export default function Search(props) {

    const selectRef = useRef(null)

    useEffect(() => {
        props.handleClickSearch()
    }, [props.currentCity])

    const handleSearch = (city) => {
        const current = props.cities.find((c) => { return c.city == city })
        props.setCurrentCity(current.city);
    }

    return (
        <div className="center">
            <select defaultValue={props.currentCity} ref={selectRef}>
                {props.cities.map((city, i) => {
                    return <option key={i} value={city.city}>{city.city}</option>
                })}
            </select>

            <button onClick={() => { handleSearch(selectRef.current.value) }}>

                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
        </div>
    )
}