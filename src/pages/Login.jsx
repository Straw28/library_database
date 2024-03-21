import React, {useState} from 'react';
import '../styles/header_styles.css';
import {Link} from 'react-router-dom';
import TopBar from '../components/top_bar';

function Login(){
    
    const [loginVisible, setLoginVisible] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Your login logic here
    };
    
    return(
        <div style = {{overflowX:'hidden'}}>
        <div style={{overflowX:'hidden', marginTop:'100px'}}> <TopBar/></div>
        <div className="page-body" 
        style={{ 
          overflowX:'hidden', 
          overflowY:'hidden',  
          position:'absolute', width:'100vw', 
          marginTop:'1%', 
          top:'150px', 
          marginLeft:'1%'
        }}></div>
        <div className="login-container-box">
        <form onSubmit={handleLogin} style={{marginTop:'15%', marginLeft:'10%'}}>
                        <label>
                            <div style={{fontFamily: '"Google Sans",Roboto,Arial,sans-serif', fontSize: '20px',fontWeight: '500'}}>Username:</div>
                            <input type="text" style={{width: '100%', padding: '12px 20px', margin: '8px 0', boxSizing: 'border-box', position:'relative', marginBottom:'5%'}} />
                        </label>
                        <label>
                            <div style={{fontFamily: '"Google Sans",Roboto,Arial,sans-serif', fontSize: '20px',fontWeight: '500'}}>Password:</div>
                            <input type="password" style={{width: '100%', padding: '12px 20px', margin: '8px 0', boxSizing: 'border-box', position:'relative'}}/>
                        </label>
                        <button type="submit" className='button-17' style={{marginTop:'5%', marginLeft:'-9%'}}>Login</button>
                        <div style={{height: '400px', width:'1px', backgroundColor:'black', marginLeft:'120%', marginTop:'-110%', display:'flex'}}></div>
                    </form>
        <Link to='/register'>
           <div style={{position:'relative',display:'flex',left:'-100%', marginTop:'175%'}}>Don't have an account? Register here</div> 
        </Link>
        </div>
        </div>
    );
}

export default Login;