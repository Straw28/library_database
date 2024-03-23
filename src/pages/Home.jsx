import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/header_styles.css'
import bookstack from '../assets/bookstack.jpg';
import bpl from '../assets/bpl.jpg';
import flowers from '../assets/flowers.jpg';
import TopBar from '../components/top_bar';


function Home() {

  return (
      <>
      <div> <TopBar/></div>
      <div className="page-body" 
        style={{ 
          overflowX:'hidden', 
          overflowY:'hidden',  
          position:'absolute', width:'100vw', 
          top:'150px', 
        }}>

        <div className="container">
          <div className="featured-box" style ={{backgroundColor:'#971b32a1;', padding:'20px', marginTop:'20%', justifyContent:'center'}}>

            <div style={{ 
              fontFamily:'"Google Sans",Roboto,Arial,sans-serif', 
              fontWeight:'700', 
              fontSize:'30px', 
              marginTop:'-7%', 
              position:'absolute' 
              }}>Featured
            </div>

            <div className="image-container">
              <Link to="/search" style={{ textDecoration:'none'}}>
                <img src={bookstack} alt="Image 1" className='featured-image'/>
                <div 
                  style={{ 
                    fontFamily:'"Google Sans",Roboto,Arial,sans-serif', 
                    fontWeight:'700', 
                    fontSize: '30px', 
                    marginTop:'3%',
                    position:'relative',
                  }}>New Releases
                </div>
              </Link>
                    
              <Link to="/" style={{ textDecoration:'none'}}>
                <img src={bpl} alt="Image 2" className='featured-image'/>
                <div 
                  style={{ 
                    fontFamily:'"Google Sans",Roboto,Arial,sans-serif', 
                    fontWeight:'700', 
                    fontSize:'30px', 
                    marginTop:'3%',
                    position:'relative' 
                  }}>Upcoming Events
                </div>
              </Link>
                    
              <Link to="/donations" style={{textDecoration:'none'}}>
                <img src={flowers} alt="Image 3"className='featured-image' />
                <div 
                  style={{
                    fontFamily:'"Google Sans",Roboto,Arial,sans-serif', 
                    fontWeight:'700', 
                    fontSize:'30px', 
                    marginTop:'3%',
                    position:'relative' 
                  }}>Support Us!
                </div>
              </Link>
                    
            </div>
          </div>
        </div>
      </div>
      </>
  );
  }
  
  export default Home;