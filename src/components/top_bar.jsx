import React, { useState } from 'react';
import SearchBar from './search_bar';
import {Link} from 'react-router-dom';
import '../styles/header_styles.css'


function TopBar() {
    const [loginVisible, setLoginVisible] = useState(false);
    const [hoursVisible, setHoursVisible] = useState(false);

    const toggleLogin = () => {
        setLoginVisible(!loginVisible);
        setHoursVisible(false); // Hide hours if login is clicked
    };

    const toggleHours = () => {
        setHoursVisible(!hoursVisible);
        setLoginVisible(false); // Hide login if hours is clicked
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Your login logic here
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px' }}>
            <button className= 'top-bar-login-button' onClick={toggleLogin}>Login</button>
            <button className= 'top-bar-hours-button' onClick={toggleHours}>Hours</button>
            {loginVisible && (
                <div style={{ position: 'absolute', top: '50px', right: '10px', background: 'white', padding: '10px' }}>
                    <form onSubmit={handleLogin}>
                        <label>
                            Username:
                            <input type="text" />
                        </label>
                        <label>
                            Password:
                            <input type="password" />
                        </label>
                        <button type="submit">Login</button>
                    </form>
                </div>
            )}
            <div className='lib-logo-and-text'>Madea Public Library</div>
            {hoursVisible && (
                <div style={{ position: 'absolute', top: '50px', right: '10px', background: 'white', padding: '10px' }}>
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
            
            <div className="navbar">
            <Link to='/'>Home</Link>
        
            <Link to='/books'>Book Catalog</Link>
            
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/register'>Register</Link>

          </div>
          <SearchBar/>
        </div>
    );
}

export default TopBar;
