import React from 'react';
import '../styles/header_styles.css'
import TopBar from '../components/top_bar';


function template() {

  return (
    <>
      <div style={{overflowX:'hidden', marginTop:'1%'}}> <TopBar/></div>
    </>
    );
}

export default template;