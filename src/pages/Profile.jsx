import React from 'react';
import {useParams} from 'react-router-dom';
import '../styles/header_styles.css';
import TopBar from '../components/top_bar';

function Profile(){
    // Example user object (replace with actual user data)
    const user = {
        name: 'John Doe',
        username: 'johndoe123',
        address: '123 Main St, Anytown, USA',
        dateRegistered: '2024-03-20', 
        birthdate: '1990-01-01' 
    };

    return (
        <>
        <div><TopBar /></div>
        
        </>
    );
}

export default Profile;