import TopBar from '../components/top_bar' ;
import React from 'react';
import '../styles/header_styles.css'
import {Link} from 'react-router-dom';
import bookstack from '../assets/bookstack.jpg';
import bpl from '../assets/bpl.jpg';
import flowers from '../assets/flowers.jpg';


function Home() {

  return (
    <div style={{overflowX:'hidden', marginTop:'100px'}}>
    <TopBar/>
    <div className="page-body" style={{ overflowX: 'hidden', overflowY:'hidden', marginTop:'100px', display:'flex' }}>
 
      <div style= {{ fontFamily: '"Google Sans",Roboto,Arial,sans-serif', fontWeight: '700', fontSize: '30px', marginTop:'-3%', marginLeft:'45%',position: 'absolute' }}>Featured</div>
      <div className="container" >
      <div className="featured-box" style ={{backgroundColor:'#971b32a1;', padding:'20px'}}>
        <div className="image-container">
          <Link to="/books">
            <img src={bookstack} alt="Image 1" className='featured-image'/>
            <div style={{ fontFamily: '"Google Sans",Roboto,Arial,sans-serif', fontWeight: '700', fontSize: '30px', marginTop:'3%',position: 'relative' }}>New Releases</div>
          </Link>
          
          <Link to="/">
          <img src={bpl} alt="Image 2" className='featured-image'/>
          <div style={{ fontFamily: '"Google Sans",Roboto,Arial,sans-serif', fontWeight: '700', fontSize: '30px', marginTop:'3%',position: 'relative' }}>Upcoming Events</div>
          </Link>
          
          <Link to="/">
          <img src={flowers} alt="Image 3"className='featured-image' />
          <div style={{fontFamily: '"Google Sans",Roboto,Arial,sans-serif', fontWeight: '700', fontSize: '30px', marginTop:'3%',position: 'relative' }}>Support us!</div>
          </Link>
          
      </div>
    </div>
    </div>
    </div>
    </div>
  );
  }
  
  export default Home;