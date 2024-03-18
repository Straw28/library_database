import React from 'react';
import '../styles/header_styles.css';

import Catalog from '../components/catalog';
import Top_Bar from '../components/top_bar';

const Book_Catalog=()=>{
    return(
    <div >
    <div>
    <Top_Bar/>
    </div>
    <div style={{position:'relative', top:'100px', left:'1600px'}}><button>View All Books</button></div>
    <div>
        <div style={{position:'relative', top:'100px'}}><h1>New Books </h1></div>
        <Catalog/>;
    </div>
    <div>
    <div style={{position:'relative', top:'100px'}}><h1>New in Science Fiction/Fantasy </h1></div>
        <Catalog/>;
    </div>

    <div>
    <div style={{position:'relative', top:'100px'}}><h1>New in Romance </h1></div>
        <Catalog/>;
    </div>
    
    <div>
    <div style={{position:'relative', top:'100px'}}><h1>New in Thriller </h1></div>
        <Catalog/>;
    </div>

    </div>
        
    );
};

export default Book_Catalog;