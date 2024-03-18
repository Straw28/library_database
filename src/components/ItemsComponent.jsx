import React, { useState, useEffect } from 'react';

const ItemsComponent = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/items'); // Updated port to match server
        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          console.error('Failed to fetch items:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.item_id}>{item.item_type}: {item.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsComponent;
