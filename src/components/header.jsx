import React, { useState } from 'react';
import SearchBar from './search_bar'; 
import Top_Bar from './top_bar';

import '../styles/header_styles.css';

/*This component contains top_bar a line the nav_bar and the search bars*/ 


function Header() {

  return (
    <div>
      <Top_Bar/>
    </div>
  );
}

export default Header;