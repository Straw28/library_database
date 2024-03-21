import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import '../styles/header_styles.css';
import TopBar from '../components/top_bar';

function Profile(){

    const { username } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchUserData(username);
    }, [username]);

    const fetchUserData = async (username) => {
        try {
            const response = await fetch(`/api/users/${username}`);
            if (!response.ok) {
                throw new Error('User not found');
            }
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return(
    <>
    <div style={{overflowX:'hidden', marginTop:'100px'}}><TopBar/></div>
    <div>
        <p>this is the profile page :)</p>
    </div>
    </>
    );
}

export default Profile;