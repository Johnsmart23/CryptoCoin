import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Left Side - Hero Text */}
      <div className="hero-text">
        <h1>Make Better Life <br /> With Trusted <br /> CryptoCoin</h1>
        <p>
        Trade Cryptocurrencies, Stock, Indices, Commodities and Forex from a single account.
        </p>
         <Link to="/about">
          <button className="explore-btn">Explore More</button>
        </Link>
      </div>

      {/* Right Side - Images */}
      <div className="hero-image">
        {/* Reference images placed in the public folder */}
        <img src="/images/hero-1 1.png"/>
      </div>
    </section>
  );
};

export default HeroSection;
