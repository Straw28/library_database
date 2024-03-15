import React from 'react';
import '../styles/header_styles.css';
import {Link} from 'react-router-dom';
import Catalog from '../components/catalog';

const Book_Catalog=()=>{
    return(
    <>
    <div>
        <Catalog/>;
    </div>
    <div>
        <Catalog/>
    </div>
    
    </>
        
    );
};

export default Book_Catalog;