import React, { useState } from 'react';
import '../styles/header_styles.css'
import TopBar from '../components/top_bar';


function Donation_Page() {

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

  return (
    <div style={{flex:'column'}}>
        <div><TopBar/></div>
        <div className='thank-you-container' style={{ width: 'auto', height: 'auto', marginTop: '5%', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center', fontFamily:'"Google Sans",Roboto,Arial,sans-serif', color:'#3c4043' }}>Thank you for supporting the Madea Public Library!</h1>
            <p style={{ fontWeight:'bold',marginTop:'3%', textAlign: 'center', fontFamily:'"Google Sans",Roboto,Arial,sans-serif', color:'#3c4043', paddingBottom:'20px'}}>Scroll down to make an online donation, or click here to learn about other ways to make a gift such as through estate planning, gifts of stock, or a Donor Advised Fund.</p>
            <hr class="horizontal-line" style={{borderTop: '2px solid rgb(96, 179, 206)', width:'80%'}}></hr>
        </div>
        <div className='donation-container' style={{width: 'auto', height: 'auto',marginTop: '2%', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            <p style={{marginTop:'3%', marginRight:'65%', textAlign: 'center', fontFamily:'"Google Sans",Roboto,Arial,sans-serif', color:'#316a86', marginBottom:'10px', fontSize:'27px'}}>Gift Amount</p>
            <hr style={{borderTop:'2px solid black', width:'70%', align:'center'}}></hr>
            <div className='gift-amount-container' style={{display:'flex', padding:'20px', marginTop:'1px', flexDirection:'column'}}>
                <div className='one-time-or-recurring-donation' style={{justifyContent:'left'}}>
                    <button className="donation-button" style={{}}>One-time donation</button>
                    <button className="donation-button" style = {{marginLeft:'20px'}}>Recurring donation</button>
                </div>
                <div className='donation-amount' style={{marginTop:'10px', display:'flex', paddingBottom:'20px'}}>
                    <button className="donation-button" style = {{marginRight:'10px', padding:'10 10', fontSize:'30px'}}>$65</button>
                    <button className="donation-button" style = {{marginRight:'10px', padding:'10 10', fontSize:'30px'}}>$100</button>
                    <button className="donation-button" style = {{marginRight:'10px', padding:'10 10', fontSize:'30px'}}>$250</button>
                    <button className="donation-button" style = {{marginRight:'10px', padding:'10 10,', fontSize:'30px'}}>$500</button>
                    <button className="donation-button" style = {{marginRight:'10px', padding:'10 10',  fontSize:'30px'}}>Other</button>
                    
                </div>
            </div>
            <p style={{marginTop:'3%', marginRight:'62%', textAlign: 'center', fontFamily:'"Google Sans",Roboto,Arial,sans-serif', color:'#316a86', marginBottom:'10px', fontSize:'27px'}}>Donor Information</p>
            <hr style={{borderTop:'2px solid black', width:'70%', align:'center'}}></hr>
            <div className='donor-information-container' style={{marginRight:'10%'}}>
            { <form>
                <div class="input-container" style = {{display:'flex'}}>
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
                            marginRight:'20px',
                            align: 'center'
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
                            textAlign:'center',
                            align: 'center'
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
                <div class="input-container" style={{display:'flex'}}>
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
                        placeholder="Address"
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
                <div class="input-container" style = {{display:'flex'}}>
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
                </div>
                <label style={{ display: 'block', padding:'10px' }}><input name="anonGift" type="checkbox" style={{ width: '30px', height: '30px', textAlign:'center' }}></input>I would like the gift to remain anonymous</label>
                <label style={{ display: 'block', padding:'10px'  }}><input name="dedGift" type="checkbox" style={{ width: '30px', height: '30px', textAlign:'center' }}></input>I would like to dedicate this gift</label>
            </form> }
            </div>   
            
            <p style={{marginTop:'3%', marginRight:'67%', textAlign: 'center', fontFamily:'"Google Sans",Roboto,Arial,sans-serif', color:'#316a86', marginBottom:'10px', fontSize:'27px'}}>Payment</p>
            <hr style={{borderTop:'2px solid black', width:'70%', align:'center'}}></hr>
            <div className = 'payment-method-container' style={{marginRight:'11%'}}>
                <h3 style={{fontFamily:'"Google Sans",Roboto,Arial,sans-serif', color:'#316a86', display:'flex'}}>Choose payment method:</h3>
                <label style={{ display: 'block', padding:'10px' }}><input name="credcard" type="checkbox" style={{ width: '30px', height: '30px', textAlign:'center' }}></input> Use a credit card or wallet</label>
                <label style={{ display: 'block', padding:'10px'  }}><input name="bank-account" type="checkbox" style={{ width: '30px', height: '30px', textAlign:'center' }}></input> Use a bank account (direct debit)</label>
                <button className="donation-button" style={{marginTop:'20px', marginBottom:'20px'}}>Give Securely via Credit Card, Debit Card or Paypal</button>
            </div>
        </div>
    </div>
    );
}

export default Donation_Page;