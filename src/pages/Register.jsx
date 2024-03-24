import React, { useState } from 'react';
import '../styles/header_styles.css';
import { Link } from 'react-router-dom';
import TopBar from '../components/top_bar';


function Register(){
// library_card_number varchar(20) 
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
        phone_number: '',
        email: '',
        password: '',
        confirmPassword: '',
        date_of_birth: '',
        phone: '',
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
        // Adjust the formData to match your server's expected format
        const adjustedFormData = {
            ...formData,
            first_name: formData.first_name,
            last_name: formData.last_name,
            date_of_birth: formData.date_of_birth, // Make sure the server expects this format
            // Flatten address if necessary, or adjust as needed
        };

        delete adjustedFormData.confirmPassword; // Typically not sent to server
    
        try {
            const response = await fetch("http://localhost:5001/api/member/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(adjustedFormData)
            });
    
            const data = await response.json(); // Assume we always get JSON back
            if (response.ok) {
                console.log(data);
                alert('Registration successful');
                // Reset formData here if necessary
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    password: '',
                    confirmPassword: '',
                    date_of_birth: '',
                    address: {
                        street: '',
                        unit: '',
                        city: '',
                        state: 'TX',
                        postalCode: ''
                    }
                });

            } else {
                // Handle non-ok responses
                throw new Error(data.message || 'Network response was not ok');
            }
        } catch (error) {
            console.error('Error registering member:', error);
            alert('Failed to register member');
        }
    };
    
    return(
        <>
        <div> <TopBar/></div>
        
        <div className="register-container-box" style={{padding:'0px', top:'50%', height: 'auto', marginLeft:'25%', position:'relative'}}>
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
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
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
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
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
                    <input
                        style={{
                            width: '70%',
                            padding: '12px 20px',
                            margin: '8px 0',
                            boxSizing: 'border-box',
                            position: 'relative',
                            marginBottom: '5%',
                            borderRadius: '50px',
                            textAlign: 'center',
                            marginRight: '20px'
                        }}
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone_number}
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
                        id="date_of_birth"
                        name="date_of_birth"
                        value={formData.date_of_birth}
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