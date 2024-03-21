import React from 'react';

function Contact(){
    return(   
        <>
        <div className="contact">
            <h2>Contact Us</h2>
            <p>If you have any questions or need assistance, feel free to contact us:</p>
                <ul>
                    <li>Phone: 123-456-7890</li>
                    <li>Email: info@library.com</li>
                    <li>Address: 123 Library St, City, State, ZIP</li>
                </ul>

        {/* if we want to be cheeky we can put our emails respectively */}
            <h3>Employee List</h3>
            <ul>
                <li>Drew </li>
                <li>Maria</li>
                <li>Enlee</li>
                <li>Armmaan</li>
                <li>Annette</li>
            </ul>
        </div>
        </>
        );
}

export default Contact;