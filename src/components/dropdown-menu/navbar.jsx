import MenuItems from "./menu_items";
import SearchBar from '../search_bar';

const menuItemsData = [
    {
      title: 'Home',
      url: '/home',
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
            {/* search bar */}
                <div className="search-container">
            <div style={{marginTop:'15px'}}>Search</div>
            <select 
              style={{ 
                marginRight:'10px', 
                marginLeft:'10px',  
                left:'0px', top:'60px', 
                color: '#3c4043;', 
                textAlign: 'center', 
                padding: '14px 20px', 
                fontSize: '20px', 
                textDecoration: 'none',
                borderRadius: '30px'
              }}>
              <option value="catalog">Catalog</option>
              <option value="website">Website</option>
              <option value="faqs">FAQs</option> 
            </select>

            <div style={{marginTop:'15px'}}>by</div>
            <select 
              style={{ 
                marginRight:'10px', 
                marginLeft:'10px',  
                left:'0px', top:'60px', 
                color: '#3c4043;', 
                textAlign: 'center', 
                padding: '14px 20px', 
                fontSize: '20px', 
                textDecoration: 'none',
                borderRadius: '30px'
              }}>
              <option value="catalog">Keyword</option>
              <option value="website">Author</option>
              <option value="faqs">Subject</option>
              <option value="faqs">Tag</option>
            </select>

            <div className="search-with-button">
              <input type="text"
                style={{
                  color: '#f2f2f2', 
                  textAlign: 'center', 
                  fontSize: '20px', 
                  textDecoration: 'none', 
                  borderRadius: '30px',
                }}/>
              <button className='button-17' style={{left:'100%', top:'5%'}}>Search</button>
            </div>
            </div>
        </nav>
    );
};



export default Navbar;