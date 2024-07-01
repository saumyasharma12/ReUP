// src/FreshItems.js
import React, { useState } from 'react';
import './Grid.css';

import itemImage from '../../assets/image/iphone.png'; // Use one image for all items

const items = Array.from({ length: 20 }, (_, index) => ({
  image: itemImage,
  price: `$${(index + 1) * 1000}`, // Example price
  description: `Item description ${index + 1}`, // Example description
  location: 'Default Location',
}));

const Grid = () => {
  const [likedItems, setLikedItems] = useState(Array(items.length).fill(false));

  const toggleLike = (index) => {
    const newLikedItems = [...likedItems];
    newLikedItems[index] = !newLikedItems[index];
    setLikedItems(newLikedItems);
  };

  return (
    <div className="fresh-items-container">
      <h1 className="fresh-items-heading">Fresh Items</h1>
      <div className="fresh-items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.image} alt={`item${index}`} className="item-image" />
            <button
              className={`like-button ${likedItems[index] ? 'liked' : ''}`}
              onClick={() => toggleLike(index)}
            >
              ❤
            </button>
            <div className="item-info">
              <div className="item-price">{item.price}</div>
              <div className="item-description">{item.description}</div>
              <div className="item-location">{item.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
