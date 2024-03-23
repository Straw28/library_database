import React, { useState } from 'react';
import SearchBar from './search_bar';
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
        <>
        <div className='top-container' style={{width:'auto', height: '65px', top:'0%', display:'flex', overflowX:'hidden', overflowY:'hidden', position:'relative', backgroundClor:'aqua'}}>
            
            <div className='topbar-buttons-container' style={{ marginTop: '0%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '99.5%' }}>
                <Link to='/login'> <button className='button-17'  style={{ }}>Login</button> </Link> 
                <button className='button-17' onClick={toggleHours} style={{marginLeft:'25px'}}>Hours</button>
            </div>
            
            <div className='lib-logo-and-text' style={{marginLeft:'1.5%'}}>Madea Public Library</div>
        </div>

        <div>
            {hoursVisible && (
                <div style={{position: 'absolute', top: '70px', right: '55px', background: '#f2f2f2', padding: '10px', zIndex:'999', borderRadius: '10px'}}>
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
            </div>
            <Navbar/> 

            {/* <SearchBar/> */}
        
        </>
    );
}

export default TopBar;
