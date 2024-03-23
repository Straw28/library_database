import React from 'react';
import '../styles/header_styles.css';
import '../styles/catalog_styles.css';
import Catalog from '../components/catalog';
import TopBar from '../components/top_bar';
import Filter from '../components/filter';


const Search_Catalog=()=>{
    return(
    <div>
        <div> <TopBar/></div>
        <Filter/>
        {/* <div className="catalog-container" style ={{display:'flex', flexDirection:'column',position:'fixed', marginTop:'100px', width:'100vw', height:'80%'}}>
        
            <div className='catalog-row'>
                <div><h1>New Books </h1></div>
                <Catalog/>
            </div>
        
            <div className='catalog-row'>
                <div><h1>New in Science Fiction/Fantasy </h1></div>
                <p>catalog will go here</p>
            </div>
        
            <div>
                <div style={{position:'relative', top:'100px', marginBottom:'20px', marginTop:'0px',padding:'10px'}}><h1>New in Romance </h1></div>
                <p>catalog will go here</p>
            </div>
            
            <div>
                <div style={{position:'relative', top:'100px', marginBottom:'20px', marginTop:'0px',padding:'10px'}}><h1>New in Thriller </h1></div>
                <p>catalog will go here</p>
            </div>
        
        </div> */}

    </div>
        
    );
};

export default Search_Catalog;
