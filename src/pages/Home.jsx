import Header from '../components/header' ;
import { useState } from 'react';
import '../styles/header_styles.css'

function Home() {

  return (
    <div className="page-body" style={{ overflowX: 'hidden' }}>
      <Header/>
      <div style={{ fontFamily: 'Papyrus', fontWeight: '700', fontSize: '30px', top: '130px', left: '1000px', position: 'fixed' }}>Featured</div>
      <div className="container">
      <div className="featured-box">
        <h2>This is a large box</h2>
        <div className="image-container">
          <img src="image1.jpg" alt="Image 1" />
          <img src="image2.jpg" alt="Image 2" />
          <img src="image3.jpg" alt="Image 3" />
        </div>
      </div>
    </div>
    </div>
  );
  }
  
  export default Home;