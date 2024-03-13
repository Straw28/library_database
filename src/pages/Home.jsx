import TopBar from '../components/top_bar' ;
import React from 'react';
import '../styles/header_styles.css'
import {Link} from 'react-router-dom';
import bookstack from '../assets/bookstack.jpg';
import bpl from '../assets/bpl.jpg';
import flowers from '../assets/flowers.jpg';
function Home() {

  return (
    <div className="page-body" style={{ overflowX: 'hidden' }}>
      <TopBar/>
      <div style={{ fontFamily: 'Papyrus', fontWeight: '700', fontSize: '30px', top: '130px', left: '1000px', position: 'fixed' }}>Featured</div>
      <div className="container">
      <div className="featured-box">
        <div className="image-container">
          <Link to="/books">
            <img src={bookstack} alt="Image 1" className='featured-image'/>
            <div>New Releases</div>
            </Link>
            <Link to="/">
          <img src={bpl} alt="Image 2" className='featured-image'/>
          <div>Upcoming Events</div>
          </Link>
          <Link to="/">
          <img src={flowers} alt="Image 3"className='featured-image' />
          <div>Support us!</div>
          </Link>
          
      </div>
    </div>
    </div>
    </div>
  );
  }
  
  export default Home;