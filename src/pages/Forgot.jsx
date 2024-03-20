import React, { useState } from 'react';
import '../styles/header_styles.css';
import {Link} from 'react-router-dom';
import TopBar from '../components/top_bar';

function Forgot(){

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('An email has been sent with further instructions.');
  };

  return(   
      <>
      <div style={{overflowX:'hidden', marginTop:'100px'}}><TopBar/></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="login-container-box">
          { <form onSubmit={handleSubmit} style={{marginTop:'6%', width:'100%'}}>
                  <div style={{fontWeight:'700', fontSize:'30px', fontFamily: '"Google Sans",Roboto,Arial,sans-serif', color:'#3c4043', marginBottom:'5%'}}>Forgot your username or password?</div>
                  <div class="input-container">
                      <input 
                      style={{
                        width:'50%', 
                        padding:'12px 20px', 
                        margin:'8px 0', 
                        boxSizing:'border-box', 
                        position:'relative', 
                        marginBottom:'5%',
                        marginTop:'7%',
                        marginLeft:'25%' ,
                        borderRadius:'50px',
                        textAlign:'center',
                      }}  
                      placeholder='Email'
                      type="email" 
                      id="email" 
                      name="email"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                      />
                      <button type="submit" className='button-17' style={{marginTop:'15%', marginLeft:'28%'}}>Send</button>
                    </div>
                  </form> }
              </div>
          </div>
      </>
      );
}

export default Forgot;