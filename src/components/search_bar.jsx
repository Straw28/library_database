import React, {useState} from 'react';
import '../styles/header_styles.css';

function SearchBar() {
  return (
    <div className="search-container" style={{color: '#f2f2f2', textAlign: 'center', fontSize: '20px', textDecoration: 'none', marginTop:'120px'}}>
        <div style={{marginTop:'15px'}}>Search</div>
        <select style={{ marginRight: '10px', marginLeft:'10px',  left:'0px', top:'60px', color: '#3c4043;', textAlign: 'center', padding: '14px 20px', fontSize: '20px', textDecoration: 'none'}}>
        <option value="catalog">Catalog</option>
        <option value="website">Website</option>
        <option value="faqs">FAQs</option> 
      </select>
      <div style={{marginTop:'15px'}}>by</div>
      <select style={{ marginRight: '10px', marginLeft:'10px',  left:'0px', top:'60px', color: '#3c4043;', textAlign: 'center', padding: '14px 20px', fontSize: '20px', textDecoration: 'none'}}>
      <option value="catalog">Keyword</option>
        <option value="website">Author</option>
        <option value="faqs">Subject</option>
        <option value="faqs">Tag</option>
        </select>
      <div className="search-with-button">
        <input type="text" placeholder="Search..." style={{color: '#f2f2f2', textAlign: 'center', fontSize: '20px', textDecoration: 'none'}} />
        <button className='button-17'>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;