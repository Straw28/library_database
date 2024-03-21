import MenuItems from "./menu_items";

const menuItemsData = [
    {
      title: 'Home',
      url: '/',
    },
      
    {
      title: 'Books',
      url: '/books',
    },

    {
      title: 'EBooks',
      url: '/ebooks',
    },

    {
      title: 'DVDs',
      url: '/dvds',
    },
            
    {
      title: 'About',
      url: '/about',
    },

    {
      title: 'Contact',
      url: '/contact',
    },
];

const Navbar = () => {
    return (
        <nav className="desktop-nav">
            <ul className="menus">
                {menuItemsData.map((menu, index) => {
                    return <MenuItems items={menu} key={index} />;
                })}
            </ul>
            
        </nav>
    );
};



export default Navbar;