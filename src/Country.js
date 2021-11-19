import React from "react";

function Country(props) {
    const { flag, name, population, region, capital } = props.data
    return (
        <li className="d-flex flex-column m-1 align-items-center justify-content-evenly border p-1 " style={{ width: 400 }} >
            <img className="border mb-2" alt="flag" src={flag} style={{ height: 150, width: 250, objectFit: "cover", borderRadius: 16 }}></img>
            <h5>{name}</h5>
            <div className="d-flex flex-column">
                <span>Population: {population}</span>
                <span>Region: {region} </span>
                <span>Capital: {capital} </span>
            </div>
        </li>
    )
}
export default Country;