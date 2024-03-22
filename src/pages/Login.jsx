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
       <div> <TopBar/></div>
        <div style={{display: 'flex', justifyContent: 'center' }}>
            <div className="login-container-box">
                <form onSubmit={handleLogin} style={{marginTop:'8%', marginRight:'30%', marginLeft:'30%'}}>
                    <div style={{fontWeight:'700', fontSize:'30px', fontFamily: '"Google Sans",Roboto,Arial,sans-serif', color:'#3c4043', marginBottom:'5%'}}>Log In</div>
                    <input type="text" style={{width:'100%', padding:'12px 20px', margin:'8px 0', boxSizing:'border-box', position:'relative', marginBottom:'5%', borderRadius:'20px', textAlign:'center'}} placeholder="Username" />
                    <input type="password" style={{width:'100%', padding:'12px 20px', margin:'8px 0', boxSizing:'border-box', position:'relative', borderRadius:'20px', textAlign:'center'}} placeholder="Password"/>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop:'10%'}}>
                        <button type="submit" className='button-17'>Login</button>
                    </div>
                    <div style={{display:'flex', justifyContent: 'center', marginTop:'25%', width:'100%'}}> 
                        <div>
                            <Link to='/forgot'>
                                <div style={{position:'relative', display:'flex', color:'#3c4043', width:'100%'}}>Forgot your password or username?</div> 
                            </Link>            
                            <Link to='/register'>
                                <div style={{position:'relative', display:'flex', color:'#3c4043', width:'100%', marginTop:'4%', right:'5px'}}>Don't have an account? Register here</div> 
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Login;