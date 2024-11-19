import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the page is scrolled more than 50px, change the navbar style
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">Fashionista</div>
      <ul className="navbar-links">
        <li className="navbar-link">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-link shop-link">
          <Link to="/shop">
            Shop
            <ul className="dropdown-menu">
              <li>
                <Link to="/dresses" className="dropdown-item">
                  Dresses
                </Link>
              </li>
              <li>
                <Link to="/tops" className="dropdown-item">
                  Tops
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="dropdown-item">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/shoes" className="dropdown-item">
                  Shoes
                </Link>
              </li>
            </ul>
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Link to="/purchase" className="purchase-button">
        Purchase
      </Link>
    </div>
  );
};

export default Navbar;
