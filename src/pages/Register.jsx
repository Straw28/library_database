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
        birthdate: '',
        address: {
            street: '',
            unit: '',
            city: '',
            state: 'TX',
            postalCode: ''
        }
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('address.')) {
            const addressField = name.split('.')[1];
            setFormData(prevState => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [addressField]: value
                }
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          birthdate: '',
          address: {
            street: '',
            unit: '',
            city: '',
            state: 'TX',
            postalCode: ''
          }
        });
    };

    return(
        <>
        <div style={{overflowX:'hidden', marginTop:'10px'}}><TopBar/></div>
        <div className="register-container-box" style={{marginTop:'13%'}}>
            <div style={{marginTop:'3%', marginLeft:'35%', marginBottom:'3%', fontWeight:'700', fontSize:'30px', fontFamily: '"Google Sans",Roboto,Arial,sans-serif', color:'#3c4043'}}>eCard Registration</div>
            { <form onSubmit={handleSubmit} style={{marginRight:'5%', marginLeft:'5%', marginTop:'-10%', width:'90%'}}>
                <div class="input-container">
                    <input
                        style={{
                            width:'70%', 
                            padding:'12px 20px', 
                            margin:'8px 0', 
                            boxSizing:'border-box', 
                            position:'relative', 
                            marginBottom:'5%', 
                            borderRadius:'50px',
                            textAlign:'center',
                            marginRight:'20px'
                        }}
                        placeholder="First Name"
                        type="text"
                        id="Fname"
                        name="Fname"
                        value={formData.Fname}
                        onChange={handleChange}
                        required
                    />
                    <input
                        style={{
                            width:'70%', 
                            padding:'12px 20px', 
                            margin:'8px 0', 
                            boxSizing:'border-box', 
                            position:'relative', 
                            marginBottom:'5%', 
                            borderRadius:'50px',
                            textAlign:'center'
                        }}
                        placeholder="Last Name"
                        type="text"
                        id="Lname"
                        name="Lname"
                        value={formData.Lname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class="input-container">
                    <input
                        style={{
                            width:'70%', 
                            padding:'12px 20px', 
                            margin:'8px 0', 
                            boxSizing:'border-box', 
                            position:'relative', 
                            marginBottom:'5%', 
                            borderRadius:'50px',
                            textAlign:'center',
                            marginRight:'20px'
                        }}
                        placeholder="Username"
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        style={{
                            width:'70%', 
                            padding:'12px 20px', 
                            margin:'8px 0', 
                            boxSizing:'border-box', 
                            position:'relative', 
                            marginBottom:'5%', 
                            borderRadius:'50px',
                            textAlign:'center'
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
                <div class="input-container">
                    <input
                        style={{
                            width:'70%', 
                            padding:'12px 20px', 
                            margin:'8px 0', 
                            boxSizing:'border-box', 
                            position:'relative', 
                            marginBottom:'5%', 
                            borderRadius:'50px',
                            textAlign:'center',
                            marginRight:'20px'
                        }}
                        placeholder="StreetAddress"
                        type="text"
                        id="street"
                        name="address.street"
                        value={formData.address.street}
                        onChange={handleChange}
                        required
                    />
                    <input
                        style={{
                            width:'70%', 
                            padding:'12px 20px', 
                            margin:'8px 0', 
                            boxSizing:'border-box', 
                            position:'relative', 
                            marginBottom:'5%', 
                            borderRadius:'50px',
                            textAlign:'center'
                        }}
                        placeholder="Apt/Unit/Suite"
                        type="text"
                        id="unit"
                        name="address.unit"
                        value={formData.address.unit}
                        onChange={handleChange}
                    />
                </div>
                <div class="input-container">
                    <input
                        style={{
                            width:'70%', 
                            padding:'12px 20px', 
                            margin:'8px 0', 
                            boxSizing:'border-box', 
                            position:'relative', 
                            marginBottom:'5%', 
                            borderRadius:'50px',
                            textAlign:'center',
                            marginRight:'20px'
                        }}
                        placeholder="City"
                        type="text"
                        id="city"
                        name="address.city"
                        value={formData.address.city}
                        onChange={handleChange}
                        required
                    />
                    <input
                        style={{
                            width:'70%', 
                            padding:'12px 20px', 
                            margin:'8px 0', 
                            boxSizing:'border-box', 
                            position:'relative', 
                            marginBottom:'5%', 
                            borderRadius:'50px',
                            textAlign:'center'
                        }}
                        placeholder="State"
                        className="placeholder-black"
                        type="text"
                        id="state"
                        name="address.state"
                        value={formData.address.state}
                        onChange={handleChange}
                    />
                </div>
                <div class="input-container">
                    <input
                        style={{
                            width:'70%', 
                            padding:'12px 20px', 
                            margin:'8px 0', 
                            boxSizing:'border-box', 
                            position:'relative', 
                            marginBottom:'5%', 
                            borderRadius:'50px',
                            textAlign:'center',
                            marginRight:'20px'
                        }}
                        placeholder="Zip Code"
                        type="text"
                        id="postalCode"
                        name="address.postalCode"
                        value={formData.address.postalCode}
                        onChange={handleChange}
                        required
                    />
                    <input
                        style={{
                            width:'70%', 
                            padding:'12px 20px', 
                            margin:'8px 0', 
                            boxSizing:'border-box', 
                            position:'relative', 
                            marginBottom:'5%', 
                            borderRadius:'50px',
                            textAlign:'center'
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
                <div class="input-container">
                    <input
                        style={{
                            width:'70%', 
                            padding:'12px 20px', 
                            margin:'8px 0', 
                            boxSizing:'border-box', 
                            position:'relative', 
                            marginBottom:'5%', 
                            borderRadius:'50px',
                            textAlign:'center',
                            marginRight:'20px'
                        }}
                        placeholder="Password"
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        style={{
                            width:'70%', 
                            padding:'12px 20px', 
                            margin:'8px 0', 
                            boxSizing:'border-box', 
                            position:'relative', 
                            marginBottom:'5%', 
                            borderRadius:'50px',
                            textAlign:'center'
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
                <button type="submit" className='button-17' style={{marginLeft:'-3.7%'}}>Register</button>
            </form> }
        </div>
        </>
    );
}

export default Register;