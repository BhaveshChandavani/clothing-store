import React from "react";
import "./Home.css"; // Make sure to import the CSS file
import Cards from "../Cards/Cards";

const Home = () => {
  return (
    <div>
      {/* First Section with Image */}
      <section className="first-section">
        <img src="backimage1.png" alt="Background" className="section-image" />
      </section>

      {/* Second Section */}
      <section className="second-section">
        <h2 className="deals-title">DAILY DEALS</h2>
        <div className="deals-links">
          <ul>
            <li className="deal-link">Best Sellers</li>
            <li className="deal-link">New Arrivals</li>
            <li className="deal-link">Sale Items</li>
          </ul>
        </div>
      </section>

      {/* Cards  */}
      <Cards />

      {/* Last Section */}
      <section className="last-section">
        <h1>End to Our Store</h1>
        <p>Explore the latest trends in fashion.</p>
      </section>
    </div>
  );
};

export default Home;
