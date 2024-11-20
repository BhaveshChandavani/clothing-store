// Cards.js
import React from "react";
// import React, { useState, useEffect } from "react";
import "./Cards.css";

const Cards = () => {
  // Initially, using custom data
  // const [cardData, setCardData] = useState([
  const cardData = [
    {
      id: 1,
      image: "clothimage.jpg",
      title: "Card Title 1",
      description: "Description for card 1",
    },
    {
      id: 2,
      image: "clothimage.jpg",
      title: "Card Title 2",
      description: "Description for card 2",
    },
    {
      id: 3,
      image: "clothimage.jpg",
      title: "Card Title 3",
      description: "Description for card 3",
    },
    {
      id: 4,
      image: "clothimage.jpg",
      title: "Card Title 4",
      description: "Description for card 4",
    },
    {
      id: 5,
      image: "clothimage.jpg",
      title: "Card Title 1",
      description: "Description for card 1",
    },
    {
      id: 6,
      image: "clothimage.jpg",
      title: "Card Title 2",
      description: "Description for card 2",
    },
    {
      id: 7,
      image: "clothimage.jpg",
      title: "Card Title 3",
      description: "Description for card 3",
    },
  ];

  // Uncomment the following code and replace the URL when you have the API endpoint

  // useEffect(() => {
  //   // Example of fetching data from an API
  //   fetch('https://api.example.com/cards') // Replace with your API URL
  //     .then((response) => response.json())
  //     .then((data) => setCardData(data));
  // }, []);

  return (
    <section className="cards-section">
      <div className="cards-container">
        {cardData.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
