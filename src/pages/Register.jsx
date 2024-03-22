import React, { useState } from 'react';
import '../styles/header_styles.css';
import {Link} from 'react-router-dom';
import TopBar from '../components/top_bar';


function Register(){
//     library_card_number varchar(20) 
// member_status enum('active','inactive') 
// member_type varchar(20) 
// first_name varchar(50) 
// last_name varchar(50) 
// email_address varchar(100) 
// phone_number varchar(15) 
// address varchar(255) 
// date_of_birth date 
// item_borrowing_history text 
// device_borrowing_history text 
// registration_date date 
// expiration_date date 
// requests text 
// fine_id
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Form submitted:', formData);
            // sending data to server
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                // Request was successful
                console.log('Registration successful');
                // Optionally, you can reset the form data after successful registration
                setFormData({
                    first_name: '',
                    last_name: '',
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
            } else {
                // Request failed
                console.error('Registration failed');
            }
        } catch (error) {
            // Handle any network or fetch-related errors
            console.error('Error:', error);
        }
    };

    
    return(
        <>
        <div> <TopBar/></div>
        <div className="register-container-box" style={{marginTop:'10%'}}>
            <div style={{marginTop:'3%', marginLeft:'35%', fontWeight:'700', fontSize:'30px', fontFamily: '"Google Sans",Roboto,Arial,sans-serif'}}>eCard Registration</div>
            { <form style={{marginRight:'5%', marginLeft:'5%', width:'100%'}}>
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
                <button onClick={handleSubmit} type="button">Register</button>
            </form> }
        </div>
        </>
    );
}

export default Register;