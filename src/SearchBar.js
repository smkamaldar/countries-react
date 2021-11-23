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
            onChange={handleChange}></input>
        </div>
    )
}

export default SearchBar
