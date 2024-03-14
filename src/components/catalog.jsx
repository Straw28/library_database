import React,{useState} from "react";
import '../styles/page_styles.css'
import headshot from '../assets/book_covers/headshot.jpg';

function Catalog()
{

    const[hoverOver, setHoverOver]= useState(false);

    function handleHover(){

}

return( 
<>
<div className="container">
      
        <div className="image-container">
          <Link to="/">
            <img src={headshot} alt="Image 1" className='book-cover'/>
            </Link>
          
      </div>
    </div>
    </>
    );
};

export default Catalog;