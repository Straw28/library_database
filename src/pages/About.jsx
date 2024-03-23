import React from 'react';
import '../styles/header_styles.css';
import '../styles/catalog_styles.css';
import '../styles/about_styles.css';
import Catalog from '../components/catalog';
import TopBar from '../components/top_bar';
import Filter from '../components/filter';

function About(){
    return(
    <>
    <div> <TopBar/> </div>
    <div className="image-container">
      <img src="..assets/bookstack.jpg" alt="books" />
    </div>
    <div className="about-me" style={{overflowX:'hidden', marginTop:'10%', position: "relative"}}>
      <h2>About Us</h2>
      <p>Welcome to our library! We are committed to creating a warm and enriching environment where members of our community can immerse themselves in the world of literature and knowledge.</p>

      <h3>Our Mission</h3>
      <p>Our mission is to foster literacy, lifelong learning, and community engagement by providing a diverse collection of books, resources, and programs tailored to individuals of all ages and backgrounds.</p>

      <h3>Our Collection</h3>
      <p>Explore our library's extensive collection of books, encompassing a wide range of genres, subjects, and formats. From timeless classics to the latest bestsellers, our collection offers something to captivate every reader.</p>

      <h3>Our History</h3>
      <p>Established in 2023, our library has been a pillar of the community for generations. Throughout the years, we have grown and adapted to meet the changing needs of our patrons, while remaining steadfast in our dedication to promoting literacy and learning.</p>

      <h3>Our Services</h3>
      <p>Discover the array of services available at our library designed to enhance your reading and learning experience. Whether you're looking to borrow books, receive research assistance, or participate in our programs, our knowledgeable staff is here to assist you.</p>

      
    </div>
    
    </>


    
    );
}

export default About;
