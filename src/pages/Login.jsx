import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from '../components/top_bar';


function Login(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
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


    return (
        <>
            <TopBar />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="login-container-box">
                    <form onSubmit={handleLogin} style={{ marginTop: '8%', marginRight: '30%', marginLeft: '30%' }}>
                        <div style={{ fontWeight: '700', fontSize: '30px', fontFamily: '"Google Sans",Roboto,Arial,sans-serif', color: '#3c4043', marginBottom: '5%' }}>Log In</div>
                        <input type="text" style={{ width: '100%', padding: '12px 20px', margin: '8px 0', boxSizing: 'border-box', position: 'relative', marginBottom: '5%', borderRadius: '20px', textAlign: 'center' }} placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;