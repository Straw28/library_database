import MenuItems from "./menu_items";

const menuItemsData = [
    {
        title: 'Home',
        url: '/',
      },
      {
          title: 'Catalog',
          url: '/catalog',
          submenu: [
            {
              title: 'Books',
              url: '/books',
            },
          ],
        },
      {
        title: 'About',
        url: '/about',
      },
      {
        title: 'Contact',
        url: '/contact',
      },
      {
        title: 'Register',
        url: '/register',
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