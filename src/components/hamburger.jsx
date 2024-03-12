import React, { useState, useEffect, useRef } from "react";
import Home from '../pages/Home'
import Book_Catalog from "../pages/Book_Catalog";
import "../styles/menu_styles.css";

function Burger() {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Hide the menu if clicked outside
        setMenuVisible(false);
      }
    }

    function handleClickInside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Hide the menu if clicked outside
        setMenuVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  function handleClick() {
    // Toggle menu visibility
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  }

  function displayMenu() {
    if (menuVisible) {
      return (
        <div className="hamburger-menu" ref={menuRef}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
          </ul>
        </div>
      );
    }
    return null; // Return null if menuVisible is false
  }

  return (
    <div>
      <button className="hamburger-button" onClick={handleClick}>
        <div className="hamburger-menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </button>
      {displayMenu()} {}
    </div>
  );
}

export default Burger;
