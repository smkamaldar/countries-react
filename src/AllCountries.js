import React from "react";
import Country from "./Country";
import AllCountriesData from "./AllCountriesData.json";

function AllCountries() {
    return (
        <div className="container-md">
            <ul className="list-unstyled d-flex flex-wrap justify-content-evenly">
                {AllCountriesData.map((country, index) => {
                    return <Country key={index} data={country} />
                })}
            </ul>
        </div>


    )
}
export default AllCountries;