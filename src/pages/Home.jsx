import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/header_styles.css'
import bookstack from '../assets/bookstack.jpg';
import bpl from '../assets/bpl.jpg';
import flowers from '../assets/flowers.jpg';
import TopBar from '../components/top_bar';


function Home() {
  
  return (
    <div style = {{overflowX:'hidden'}}>
    <div style={{overflowX:'hidden', marginTop:'100px'}}><TopBar/></div>
    <div className="page-body" 
      style={{ 
        overflowX:'hidden', 
        overflowY:'hidden',  
        position:'absolute', 
        width:'100%', 
        top:'150px', 
      }}>
  

    <div className="container">
    <div className="featured-box" 
      style={{
        backgroundColor:'#971b32a1;', 
        padding:'20px', 
        marginTop:'17%', 
        transition: 'all 0.3s ease-in-out', 
      }}>

    <div style={{ 
      fontFamily:'"Google Sans",Roboto,Arial,sans-serif', 
      fontWeight:'700', 
      fontSize:'40px', 
      marginTop:'2%', 
      marginLeft:'42%',
      position:'absolute', 
      textAlign:'center',
      color:'#3c4043',
      top: '-85px'
    }}>Featured
    </div>

    <div className="image-container">
      <Link to="/books" style={{ textDecoration: 'none', color:'black'}}>
        <img src={bookstack} alt="Image 1" className='featured-image'/>
        <div 
          style={{ 
            fontFamily:'"Google Sans",Roboto,Arial,sans-serif', 
            fontWeight:'700', 
            fontSize:'30px', 
            marginTop:'3%',
            position:'relative',
            color:'#3c4043'
          }}>New Releases
        </div>
      </Link>
            
      <Link to="/" style={{ textDecoration: 'none', color:'black'}}>
        <img src={bpl} alt="Image 2" className='featured-image'/>
        <div 
          style={{ 
            fontFamily:'"Google Sans",Roboto,Arial,sans-serif', 
            fontWeight:'700', 
            fontSize:'30px', 
            marginTop:'3%',
            position:'relative',
            color:'#3c4043'
          }}>Upcoming Events
        </div>
      </Link>
            
      <Link to="/" style={{ textDecoration: 'none', color:'black'}}>
        <img src={flowers} alt="Image 3"className='featured-image'/>
        <div 
          style={{
            fontFamily:'"Google Sans",Roboto,Arial,sans-serif', 
            fontWeight:'700', 
            fontSize: '30px', 
            marginTop:'3%',
            position: 'relative',
            color:'#3c4043'
          }}>Support Us!
        </div>
      </Link>
            
    </div>
    </div>
    </div>
    </div>
    </div>
  );
  }
  
  export default Home;