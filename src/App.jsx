import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Book_Catalog from './pages/Book_Catalog';  
import EBook_Catalog from './pages/EBook_Catalog';
import DVD_Catalog from './pages/DVD_Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import TopBar from './components/top_bar';
import React from 'react';
import './styles/header_styles.css'

function App() {
  
  return (
    <>
    
    <Router>
      
        <Routes> //makes sure only one route shows at a time
          <Route index element= {<Home />} />
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<Book_Catalog/>}/>
          <Route path="/dvds" element={<DVD_Catalog/>}/>
          <Route path="/ebooks" element={<EBook_Catalog/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      
    </Router>
    </>
  );
}

export default App;
