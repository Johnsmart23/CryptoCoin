import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        {/* Left: Image */}
        <div className="about-image">
          <img src="/images/about 1.png"/>
        </div>

        {/* Right: Text */}
        <div className="about-text">
          <h2>About Us</h2>
          <h3 className="trusted-platform">The Most Trusted Cryptocurrency Platform</h3>
         <p>
          At CryptoCoin, we make global trading simple, secure, and rewarding.
          Our platform allows you to trade Cryptocurrencies, Stocks, Indices, Commodities, and Forex all from one account.
          Whether you’re a beginner or a professional, we provide the tools, insights, and support you need to make confident investment decisions.
          Join us today and take control of your financial future smart trading starts here.
         </p>
         <Link to="/about"><button className="read-more">Read More</button></Link>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
