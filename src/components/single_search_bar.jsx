import React, {useState} from 'react';
import '../styles/search_style.css';

function SingleSearchBar()
{
    const[searchTerm, setSearchTerm] = useState("");

    function handleSearch(event){
        setSearchTerm(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefualt();
        //keeping it as a console log for now, will implement functionality later
        console.log("Searching:", searchTerm);
    }


return (
    <div className="body">
    <form onSubmit={handleSubmit} className="search-container">
        <input type="text" value= {searchTerm} onChange = {handleSearch} placeholder= "Search"/>
        <button type="submit" className="search-button">Search</button>
    </form>
    </div>
);

}

export default SingleSearchBar;