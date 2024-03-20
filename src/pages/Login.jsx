import React, {useState} from 'react';
import '../styles/header_styles.css';
import {Link} from 'react-router-dom';
import TopBar from '../components/top_bar';

function Login(){
    
    const [loginVisible, setLoginVisible] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Your login logic here <div style={{height: '400px', width:'1px', backgroundColor:'black', marginLeft:'120%', marginTop:'-110%', display:'flex'}}></div>
    };
    
    return(
        <>
        <div style={{overflowX:'hidden', marginTop:'100px'}}> <TopBar/></div>
        <div className="login-container-box">
        <form onSubmit={handleLogin} style={{marginTop:'6%', marginRight:'30%', marginLeft:'30%'}}>
        <div style={{fontWeight:'700', fontSize:'30px', fontFamily: '"Google Sans",Roboto,Arial,sans-serif', color:'#3c4043', marginBottom:'5%'}}>Log In</div>
            <input type="text" style={{width:'100%', padding:'12px 20px', margin:'8px 0', boxSizing:'border-box', position:'relative', marginBottom:'5%', borderRadius:'20px', textAlign:'center'}} placeholder="Username" />
            <input type="password" style={{width:'100%', padding:'12px 20px', margin:'8px 0', boxSizing:'border-box', position:'relative', borderRadius:'20px', textAlign:'center'}} placeholder="Password"/>
            <button type="submit" className='button-17' style={{marginTop:'5%', marginLeft:'-13%'}}>Login</button>
        </form>
        <div style={{position:'relative', display:'flex', color:'#3c4043', width:'100%', marginTop:'10%', marginLeft:'35%'}}>Forgot your password or username?</div> 
        <Link to='/register'>
           <div style={{position:'relative', display:'flex', color:'#3c4043', width:'100%', marginBottom:'20%'}}>Don't have an account? Register here</div> 
        </Link>
        </div>
        </>
    );
}

export default Login;