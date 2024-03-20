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
        <div style={{overflowX:'hidden', marginTop:'100px'}}><TopBar/></div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="login-container-box">
                <form onSubmit={handleLogin} style={{marginTop:'6%', marginRight:'30%', marginLeft:'30%'}}>
                    <div style={{fontWeight:'700', fontSize:'30px', fontFamily: '"Google Sans",Roboto,Arial,sans-serif', color:'#3c4043', marginBottom:'12%'}}>Log In</div>
                    <input type="text" style={{width:'100%', padding:'12px 20px', margin:'8px 0', boxSizing:'border-box', position:'relative', marginBottom:'5%', borderRadius:'20px', textAlign:'center'}} placeholder="Username" />
                    <input type="password" style={{width:'100%', padding:'12px 20px', margin:'8px 0', boxSizing:'border-box', position:'relative', borderRadius:'20px', textAlign:'center'}} placeholder="Password"/>
                    <button type="submit" className='button-17' style={{marginTop:'6.5%', marginLeft:'-15%'}}>Login</button>
                </form>
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '8%' }}>
                        <Link to='/forgot' style={{ color: '#3c4043' }}>Forgot your username or password?</Link>
                        <Link to='/register' style={{ color: '#3c4043', marginTop: '20px' }}>Don't have an account? Register here</Link>
                    </div>
            </div>
        </div>
        </>
    );
}

export default Login;