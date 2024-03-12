import SearchBar from '../components/search_bar' 
import { useState } from 'react'
import Burger from '../components/hamburger'

function Header() {

    return (
      <div>
        <SearchBar/>
        <Burger/>
      </div>
    )
  }
  
  export default Header;