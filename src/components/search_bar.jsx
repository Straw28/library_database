import React, {useState} from 'react';
import SingleSearchBar from './single_search_bar';

function SearchBar()
{
    return(
        <div className='search-bar'>
            <SingleSearchBar/>
            <SingleSearchBar/>
            <SingleSearchBar/>
        </div>
    );
}

export default SearchBar;