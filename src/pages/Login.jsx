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
        <>
        <TopBar/>
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
                        <button type="submit" className='button-17' style={{marginTop:'20px'}}>Login</button>
                        <div style={{height: '400px', width:'1px', backgroundColor:'black', marginLeft:'120%', marginTop:'-110%', display:'flex'}}></div>
                    </form>
        <Link to='/register'>
           <div style={{position:'relative',display:'flex',left:'-110%', marginTop:'175%'}}>Don't have an account? Register here</div> 
          
        </Link>
        </div>
        </>
    );
}

export default Login;