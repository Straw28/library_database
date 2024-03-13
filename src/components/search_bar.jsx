import React, {useState} from 'react';
import '../styles/header_styles.css';

function SearchBar() {
  return (
    <div className="search-container">
        Search
        <select style={{ marginRight: '10px', marginLeft:'10px'}}>
        <option value="catalog">Catalog</option>
        <option value="website">Website</option>
        <option value="faqs">FAQs</option> 
      </select>
      by
      <select style={{ marginRight: '10px', marginLeft:'10px' }}>
      <option value="catalog">Keyword</option>
        <option value="website">Author</option>
        <option value="faqs">Subject</option>
        <option value="faqs">Tag</option>
        </select>
      <div className="search-with-button">
        <input type="text" placeholder="Search..." />
        <button style={{ backgroundImage: 'url(../assets/find.png)' }}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;