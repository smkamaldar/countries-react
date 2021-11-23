import React,{ useState }from 'react'

function SearchBar(props) {
    
    const [searchPhrase,setSearchPhrase] = useState("");
    const handleChange = (e)=>{
        const value = e.target.value.toLowerCase();
        setSearchPhrase(value);
        props.onSearch(value);
    }
    return (
        <div>
            <input type="text" value={searchPhrase} 
            onChange={handleChange} className="searchBarStyle" placeholder="Search for a country"></input>
        </div>
    )
}

export default SearchBar
