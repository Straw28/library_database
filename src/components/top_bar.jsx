import React, { useState } from 'react';

import Navbar from './dropdown-menu/navbar';
import {Link} from 'react-router-dom';
import '../styles/header_styles.css'


function TopBar() {

    const [hoursVisible, setHoursVisible] = useState(false);

    const toggleHours = () => {
        setHoursVisible(!hoursVisible);
        setLoginVisible(false); // Hide login if hours is clicked
    };


    return (
        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', padding:'10px', overflowX:'hidden'}}>
            
            <Link to='/login'> <button className='button-17' style={{top:'1.5%', marginRight:'20px', left:'93%'}}>Login</button> </Link> 
            <button className='button-17' onClick={toggleHours} style={{top:'1.5%', marginRight:'7%' }}>Hours</button>
   
            <div className='lib-logo-and-text'>Madea Public Library</div>
            {hoursVisible && (
                <div style={{position:'absolute', top:'75px', right:'80px', background:'#f2f2f2', padding:'10px', zIndex:'999', borderRadius:'10px', textAlign:'center'}}>
                    <h3>Library Hours</h3>
                    <p><strong>Mon</strong>&nbsp;&nbsp;&nbsp;&nbsp;12 pm – 9 pm</p>
                    <p><strong>Tue</strong>&nbsp;&nbsp;&nbsp;&nbsp;10 am – 9 pm</p>
                    <p><strong>Wed</strong>&nbsp;&nbsp;&nbsp;&nbsp;10 am – 6 pm</p>
                    <p><strong>Thu</strong>&nbsp;&nbsp;&nbsp;&nbsp;10 am – 6 pm</p>
                    <p><strong>Fri</strong>&nbsp;&nbsp;&nbsp;&nbsp;12 pm – 9 pm</p>
                    <p><strong>Sat</strong>&nbsp;&nbsp;&nbsp;&nbsp;10 am – 5 pm</p>
                    <p><strong>Sun</strong>&nbsp;&nbsp;&nbsp;&nbsp;CLOSED</p>
                </div>
            )}
            
            <Navbar/> 

            
        </div>
    );
}

export default TopBar;
