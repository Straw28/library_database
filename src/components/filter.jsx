import React, { useState } from 'react';

// Nothing found for genre:(Cookbooks) isolanguage:"eng" audience:"adult" formatcode:(BOARD_BK OR BK OR GRAPHIC_NOVEL OR LPRINT ).


const Filter = ({ books, onFilter }) => {

  return (
    <div style={{}}>
    <div className='keyword-search-type' style={{display: 'flex', marginTop:'5%', borderBottom:'2px solid #000', marginBottom:'0px'}}>
        <h1>Keyword search: {/*keyword here*/}</h1>
    </div>

    {/* Filter  */}
    <div className='filter-container' style={{position:'absolute', display:'inline-block', flexDirection:'column', width: '20%', marginTop:'1%', height:'auto', borderRight:'2px solid #000', padding:'20px'}}>
        <div>
            <h2 style={{textAlign:'center', paddingBottom:'20px'}}>Filter by...</h2>
        </div>
        
        <div className= 'filter-by-format' style={{ flex: '1', flexDirection:'column', width:'100%', height:'auto', borderTop:'2px solid #000'}}>
            <h2 style={{textAlign:'center', paddingTop:'20px'}}>Format</h2>
            <label style={{ display: 'block' }}><input name="Books" type="checkbox"></input>Books</label>
            <label style={{ display: 'block' }}><input type="checkbox"></input>EBooks</label>
            <label style={{ display: 'block' }}><input type="checkbox"></input>DVDs</label>
        </div>
        
        <div className= 'filter-by-genre' style={{ flex: '1', flexDirection:'column', width:'100%', height:'auto', borderTop:'2px solid #000'}}>
            <h2 style={{textAlign:'center', paddingTop:'20px'}}>Genre</h2>
            <label style={{ display: 'block'}}><input type="checkbox"></input>Mystery</label>
            <label style={{ display: 'block' }}><input type="checkbox"></input>Fantasy</label>
            <label style={{ display: 'block' }}><input type="checkbox"></input>Adventure</label>
            <label style={{ display: 'block' }}><input type="checkbox"></input>Action</label>
            <label style={{ display: 'block' }}><input type="checkbox"></input>Fiction</label>
            <label style={{ display: 'block' }}><input type="checkbox"></input>Science Fiction</label>
            <label style={{ display: 'block' }}><input type="checkbox"></input>Biography/Memoir</label>
            <label style={{ display: 'block' }}><input type="checkbox"></input>Historical</label>
            <label style={{ display: 'block' }}><input type="checkbox"></input>Science</label>
        </div>
        
        <h2 style={{textAlign:'center', paddingTop:'20px'}}>Author</h2>
        <div className= 'filter-by-author' style={{ flex: '1', flexDirection:'column', width:'100%', height:'auto', borderTop:'2px solid #000', borderBottom:'2px solid #000'}}>
            <label style={{ display: 'block' }}><input type="checkbox"></input>JK Rowling (come back and make these links later, only 1 author at a time)</label>
        </div>
    </div>

    {/* Filter Results */}
    <div className='filter-results-container' style={{background:'pink', display:'flex', width:'90%', height:'auto', marginLeft:'22%'}}>
        <p>this book goes here</p>
    </div>
    </div>
  );
};

export default Filter;
