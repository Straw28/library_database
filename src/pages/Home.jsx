import TopBar from '../components/top_bar' ;
import React from 'react';
import '../styles/header_styles.css'
import {Link} from 'react-router-dom';
import bookstack from '../assets/bookstack.jpg';
import bpl from '../assets/bpl.jpg';
import flowers from '../assets/flowers.jpg';


function Home() {

  return (
    <div>
    <TopBar/>
    <div className="page-body" style={{ overflowX: 'hidden', overflowY:'auto' }}>
    <div style={{ fontFamily: 'Papyrus', fontWeight: '700', fontSize: '50px', top: '15%', marginLeft:'40%', position: 'fixed' }}>Featured</div>

      <div className="container" >
      <div className="featured-box">
        <div className="image-container">
          <Link to="/books">
            <img src={bookstack} alt="Image 1" className='featured-image'/>
            <div style={{ fontFamily: 'Papyrus', fontWeight: '700', fontSize: '30px', marginTop:'3%',position: 'relative' }}>New Releases</div>
          </Link>
          
          <Link to="/">
          <img src={bpl} alt="Image 2" className='featured-image'/>
          <div style={{ fontFamily: 'Papyrus', fontWeight: '700', fontSize: '30px', marginTop:'3%',position: 'relative' }}>Upcoming Events</div>
          </Link>
          
          <Link to="/">
          <img src={flowers} alt="Image 3"className='featured-image' />
          <div style={{ fontFamily: 'Papyrus', fontWeight: '700', fontSize: '30px', marginTop:'3%',position: 'relative' }}>Support us!</div>
          </Link>
          
      </div>
    </div>
    </div>
    </div>
    </div>
  );
  }
  
  export default Home;