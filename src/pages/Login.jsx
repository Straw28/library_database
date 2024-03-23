import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from '../components/top_bar';

function Login(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigateTo = useNavigate(); // Get the history object

    const handleLogin = async (e) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = {
                library_card_number: username,
                password: password,
            };

            const response = await fetch("http://localhost:5000/member/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                // localStorage.setItem('token', data.token); // Store token in local storage
                // localStorage.setItem('role', data.role); // Store role in local storage
                // localStorage.setItem('firstName', data.firstName);
                // localStorage.setItem('lastName', data.lastName);
                navigateTo('/');
                console.log("Login Successful");
            } else {
                let errorMessage = 'Login failed';
                try {
                    const errorData = await response.json();
                    if (errorData.message) {
                        errorMessage += ': ' + errorData.message;
                    }
                } catch (error) {
                    console.error('Failed to parse error message:', error);
                }
                console.error(errorMessage);
            }
        } catch (err) {
            console.error('Error:', err.message);
        }
    };

    return (
        <>
            <TopBar />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="login-container-box">
                    <form onSubmit={handleSubmit} style={{ marginTop: '8%', marginRight: '30%', marginLeft: '30%' }}>
                        <div style={{ fontWeight: '700', fontSize: '30px', fontFamily: '"Google Sans",Roboto,Arial,sans-serif', color: '#3c4043', marginBottom: '5%' }}>Log In</div>
                        <input type="text" style={{ width: '100%', padding: '12px 20px', margin: '8px 0', boxSizing: 'border-box', position: 'relative', marginBottom: '5%', borderRadius: '20px', textAlign: 'center' }} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" style={{ width: '100%', padding: '12px 20px', margin: '8px 0', boxSizing: 'border-box', position: 'relative', borderRadius: '20px', textAlign: 'center' }} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
                            <button type="submit" className='button-17'>Login</button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25%', width: '100%' }}>
                            <div>
                                <Link to='/forgot'>
                                    <div style={{ position: 'relative', display: 'flex', color: '#3c4043', width: '100%' }}>Forgot your password or username?</div>
                                </Link>
                                <Link to='/register'>
                                    <div style={{ position: 'relative', display: 'flex', color: '#3c4043', width: '100%', marginTop: '4%', right: '5px' }}>Don't have an account? Register here</div>
                                </Link>
                            </div>
                        </div>
        try {
            const response = await fetch('http://localhost:5000/api/member/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            const token = data.token;

            // Store token in localStorage or sessionStorage
            localStorage.setItem('token', token);

            // Redirect or perform any other actions upon successful login
        } catch (error) {
            console.error('Login failed:', error);
            alert('Failed to login');
        }
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
                            <div style={{fontFamily: '"Google Sans",Roboto,Arial,sans-serif', fontSize: '20px',fontWeight: '500'}}>Email:</div>
                            <input type="text" style={{width: '100%', padding: '12px 20px', margin: '8px 0', boxSizing: 'border-box', position:'relative', marginBottom:'5%'}} />
                        </label>
                        <label>
                            <div style={{fontFamily: '"Google Sans",Roboto,Arial,sans-serif', fontSize: '20px',fontWeight: '500'}}>Password:</div>
                            <input type="password" style={{width: '100%', padding: '12px 20px', margin: '8px 0', boxSizing: 'border-box', position:'relative'}}/>
                        </label>
                        <button type="submit" className='button-17' style={{marginTop:'5%', marginLeft:'-9%'}}>Login</button>
                        <div style={{height: '400px', width:'1px', backgroundColor:'black', marginLeft:'120%', marginTop:'-110%', display:'flex'}}></div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
