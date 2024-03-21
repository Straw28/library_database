import MenuItems from './menu_items';

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? '-show' : ''}`} > {/*if dropdown is true, add show to the end, otherwise add an empty string*/}
      {submenus.map((submenu, index) => ( 
        <MenuItems items={submenu} key={index} />
         
      ))}
    </ul>
  );
};

export default Dropdown;
