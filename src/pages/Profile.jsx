import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import '../styles/header_styles.css';
import TopBar from '../components/top_bar';

function Profile(){

    // Example user object (replace with actual user data)
    const user = {
        name: 'John Doe',
        barcode: '0123456789',
        username: 'johndoe123',
        address: '123 Main St, Anytown, USA',
        dateRegistered: '2024-03-20', 
        birthdate: '1990-01-01' 
    };

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleMessagesDropdown = () => {
        setShowMessagesDropdown(!showMessagesDropdown);
    };

    return (
        <>
        <div><TopBar /></div>
            <div className="profile-sidebar-container" style={{marginBottom:'3%'}}>
                <div className="sidebar-container-box"></div>
                <div>
                    <div className="profile-container-box">
                    <div style={{ marginLeft: '20px' }}>
                        <h1 style={{marginTop:'5%'}}>User Profile</h1>
                        <p style={{marginTop:'5%'}}><strong>Name:</strong> {user.name}</p>
                        <p style={{marginTop:'2%'}}><strong>Barcode:</strong> {user.barcode}</p>
                        <p style={{marginTop:'2%'}}><strong>Username:</strong> {user.username}</p>
                        <p style={{marginTop:'2%'}}><strong>Address:</strong> {user.address}</p>
                        <p style={{marginTop:'2%'}}><strong>Date Registered:</strong> {user.dateRegistered}</p>
                        <p style={{marginTop:'2%'}}><strong>Birthdate:</strong> {user.birthdate}</p>
                    </div>
                    </div>
                    <div className="dropdown-container-box">
                        <button onClick={toggleDropdown}>Messages</button>
                        {showDropdown && (
                            <div className="dropdown-info-container"></div>
                        )}
                    </div>
                    <div className="dropdown-container-box">
                    <button onClick={toggleDropdown}>Change User/Password</button>
                        {showDropdown && (
                            <div className="dropdown-info-container"></div>
                        )}
                    </div>
                </div>
                

            </div>

        </>
    );
}

export default Profile;

/* 
{showDropdown && (
                        <div className="dropdown-info-container">
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                            <p>{user.address}</p>
                            <p>{user.dateRegistered}</p>
                            <p>{user.birthdate}</p>
                        </div>
                    )}
*/