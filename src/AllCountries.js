import React, { useState, useEffect } from "react";
import Country from "./Country";
import AllCountriesData from "./AllCountriesData.json";
import SearchBar from "./SearchBar";
import RegionMenu from "./RegionMenu"

function AllCountries() {
    const [data] = useState(AllCountriesData)
    const [searchedCountries, setSearchedCountries] = useState(data);
    const [regions, setRegions] = useState([])

    const handleSearch = (searchPhrase) => {
        const filteredCountries = data.filter(country => {
            return country.name.toLocaleLowerCase().includes(searchPhrase) ||
                country.capital.toLocaleLowerCase().includes(searchPhrase)
        })
        setSearchedCountries(filteredCountries);
    }

    const uniqeRegions = (arr) => {
        const regions = arr.map(country => country.region)
        const uniqeRegions = regions.filter((region, index) => regions.indexOf(region) === index)
        // const uniqeRegions = [...new Set(regions)]
        return uniqeRegions
    }
    useEffect(() => {
        setRegions(uniqeRegions(data))
    }, [])

    const handleRegionChange = (e) => {
        const region = e.target.value;
        if (region === "All") {
            setSearchedCountries(data)
        } else {
            const filteredCountries = data.filter((country, index) => country.region === region)
            setSearchedCountries(filteredCountries)
        }

    }
    return (
        <div className="">
            <div>
                <SearchBar onSearch={handleSearch} />
            </div>
            <select name="region" onChange={handleRegionChange} >
                <option value="All">Filter By Region</option>
                {regions.map((region, index) => {
                    return <RegionMenu key={"region" + index} region={region} />
                })}
            </select>
            <div>
                <ul className="list-unstyled d-flex flex-wrap justify-content-between">
                    {searchedCountries.map((country, index) => {
                        return <Country key={"country" + index} data={country} />
                    })}
                </ul>
            </div>

        </div>


    )
}
export default AllCountries;