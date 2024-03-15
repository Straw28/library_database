import React, { useState } from 'react';
import SearchBar from './search_bar';

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
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px', zIndex: '999'}}>
            <button className= 'top-bar-login-button' onClick={toggleLogin}>Login</button>
            <button className= 'top-bar-hours-button' onClick={toggleHours}>Hours</button>
            {loginVisible && (
                <div style={{ position: 'absolute', top: '35px', right: '0px', background: 'white', padding: '0px', zIndex: '999', marginRight:'10px' }}>
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
                <div style={{ position: 'absolute', top: '50px', right: '10px', background: 'white', padding: '10px',zIndex:'999' }}>
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
            <div className='search-line'></div>
            <div className="navbar">
            <a href="#">Home</a>
            <div className="dropdown">
              <button className="dropbtn">Products</button>
              <div className="dropdown-content">
                <a href="#">Product 1</a>
                <a href="#">Product 2</a>
                <a href="#">Product 3</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Services</button>
              <div className="dropdown-content">
                <a href="#">Service 1</a>
                <a href="#">Service 2</a>
                <a href="#">Service 3</a>
              </div>
            </div>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <SearchBar/>
          <div className='search-line' style={{top:'105px'}}></div>
        </div>
    );
}

export default TopBar;
