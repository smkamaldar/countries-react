import React,{ useState } from "react";
import Country from "./Country";
import AllCountriesData from "./AllCountriesData.json";
import SearchBar from "./SearchBar";

function AllCountries() {
    const [searchedCountries,setSearchedCountries]=useState(AllCountriesData);

    const handleSearch =(searchPhrase)=>{
        const filteredCountries= AllCountriesData.filter(country=>{
            return country.name.toLocaleLowerCase().includes(searchPhrase) || 
            country.capital.toLocaleLowerCase().includes(searchPhrase)
        })
        setSearchedCountries(filteredCountries);
    }
    
    return (
        <div className="">
            <div>
            <SearchBar onSearch={handleSearch}/>
            </div>
            <div>
            <ul className="list-unstyled d-flex flex-wrap justify-content-between">
                {searchedCountries.map((country, index) => {
                    return <Country key={index} data={country} />
                })}
            </ul>
            </div>
            
        </div>


    )
}
export default AllCountries;