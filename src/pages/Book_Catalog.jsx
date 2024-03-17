import React from 'react';
import '../styles/header_styles.css';
import '../styles/catalog_styles.css';
import Catalog from '../components/catalog';
import Top_Bar from '../components/top_bar';

const Book_Catalog=()=>{
    return(
    <div >
    <div>
    <Top_Bar/>
    </div>

    <div className="catalog-container" style ={{display:'flex', flexDirection:'column'}}>
    
    <div className='catalog-row' style={{position:'relative', top:'100px', marginBottom:'20px', marginTop:'0px',padding:'10px', display:'inline-block'}}>
        <div><h1>New Books </h1></div>
        <Catalog/>
    </div>

    <div className='catalog-row'  style={{position:'relative', top:'100px', marginBottom:'20px', marginTop:'0px',padding:'10px'}}>
    <div><h1>New in Science Fiction/Fantasy </h1></div>
        <p>catalog will go here</p>
    </div>
{/* 
    <div>
    <div style={{position:'relative', top:'100px', marginBottom:'20px', marginTop:'0px',padding:'10px'}}><h1>New in Romance </h1></div>
    <p>catalog will go here</p>
    </div>
    
    <div>
    <div style={{position:'relative', top:'100px', marginBottom:'20px', marginTop:'0px',padding:'10px'}}><h1>New in Thriller </h1></div>
    <p>catalog will go here</p>
    </div> */}
    
    </div>

    </div>
        
    );
};

export default Book_Catalog;