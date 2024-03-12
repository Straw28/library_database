import { useState } from 'react';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Book_Catalog from './pages/Book_Catalog';  
import EBook_Catalog from './pages/EBook_Catalog';
import DVD_Catalog from './pages/DVD_Catalog';

function App() {
  
  return (
    <Router>
      
        <Routes> //makes sure only one route shows at a time
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/books" element={<Book_Catalog/>}></Route>
          <Route path="/dvds" element={<DVD_Catalog/>}></Route>
          <Route path="/ebooks" element={<EBook_Catalog/>}></Route>
        </Routes>
      
    </Router>
    // <div>
    //   <Home/>
    // </div>

  );
}

export default App;
