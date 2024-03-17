import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Dropdown({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
            <a className="dropdown-toggle" onClick={toggleDropdown} style={{ textDecoration: 'underline', verticalAlign: 'middle', display: 'inline-flex', zIndex: 999 }}>
                Catalog
            </a>
            {isOpen && (
                <div className="dropdown-menu" style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', zIndex: 999 }}>
                    {children}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
