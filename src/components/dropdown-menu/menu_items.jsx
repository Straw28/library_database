import { useState } from 'react';
import Dropdown from './dropdown';
import { Link } from 'react-router-dom';
import '../../styles/header_styles.css';

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <li className='menu-items'>
            {items.submenu ? (
                <>
                    <button className='dropdown' aria-haspopup='menu' aria-expanded={dropdown ? 'true' : 'false'} onClick={() => setDropdown((prev) => !prev)}>
                        {items.title}{' '}
                    </button>
                    {dropdown && <Dropdown submenus={items.submenu} />}
                </>
            ) : (
                <Link to={items.url}>{items.title}</Link>
            )}
        </li>
    );
};

export default MenuItems;