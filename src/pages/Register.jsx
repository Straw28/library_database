import React, { useState } from 'react';
import '../styles/header_styles.css';
import {Link} from 'react-router-dom';
import TopBar from '../components/top_bar';

function Register(){
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthdate: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          birthdate: ''
        });
    };

    return(
        <>
        <div > <TopBar/></div>
        <div className="login-container-box">
        <form onSubmit={handleSubmit} style={{marginTop:'15%', marginLeft:'10%'}}>
            <div>
            <input
                style={{
                    width: '200%', 
                    padding: '12px 20px', 
                    margin: '8px 0', 
                    boxSizing: 'border-box', 
                    position:'relative', 
                    marginBottom:'5%', 
                    marginLeft: '117%', 
                    borderRadius: '50px',
                    textAlign: 'center'
                }}
                placeholder="Username"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
            />
            </div>
            <div>
                <input
                    style={{
                        width:'200%',
                        padding:'12px 20px',
                        margin:'8px 0', 
                        boxSizing:'border-box', 
                        position:'relative',
                        marginBottom:'5%',
                        marginLeft: '117%', 
                        borderRadius:'50px',
                        textAlign: 'center'
                    }}
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <input
                    style={{
                        width: '200%',
                        padding: '12px 20px',
                        margin: '8px 0', 
                        boxSizing: 'border-box', 
                        position:'relative',
                        marginBottom:'5%', 
                        marginLeft: '117%',
                        borderRadius: '50px',
                        textAlign: 'center'
                    }}
                    placeholder="Password"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <input
                    style={{
                        width: '200%',
                        padding: '12px 20px',
                        margin: '8px 0', 
                        boxSizing: 'border-box', 
                        position:'relative',
                        marginBottom:'5%', 
                        marginLeft: '117%',
                        borderRadius: '50px',
                        textAlign: 'center'
                    }}
                    placeholder="Confrim Password"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <input
                    style={{
                        width: '100%',
                        padding: '12px 20px',
                        margin: '8px 0', 
                        boxSizing: 'border-box', 
                        position:'relative',
                        marginBottom:'5%',
                        marginLeft: '170%', 
                        borderRadius: '50px',
                        textAlign: 'center'
                    }}
                    placeholder="Birthdate"
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" style={{marginLeft: '205%'}}>Register</button>
        </form>
        </div>
        </>
    );
}

export default Register;