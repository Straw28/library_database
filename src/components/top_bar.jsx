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
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px' }}>
            
            <Link to='/login'> <button className='button-17' style={{top:'2%', marginRight:'30px'}}>Login</button> </Link> 
            <button className= 'button-17' onClick={toggleHours} style={{top:'2%', marginRight:'10px'}}>Hours</button>
   
            <div className='lib-logo-and-text' >Madea Public Library</div>
            {hoursVisible && (
                <div style={{ position: 'absolute', top: '50px', right: '10px', background: 'white', padding: '10px', zIndex:'999' }}>
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

            <SearchBar/>
        </div>
    );
}

export default TopBar;
