import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* Logo & Newsletter */}
        <div className="footer-column logo-social">
          <div className="footer-brand">
            <img
              src="/images/icon-1 1.png"
              alt="CryptoCoin Logo"
              className="footer-logo"
            />
            <span className="footer-text">CryptoCoin</span>
          </div>

          {/* Newsletter Form */}
          <div className="newsletter">
            <p>Subscribe to our newsletter for the latest updates</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>QUICK LINK</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/">Our Services</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4>CONTACT</h4>
          <p>
            <a href="mailto:cryptocoin@gmail.com">cryptocoin@gmail.com</a>
          </p>
          <p>
            <a href="tel:+2348127790800">+2348127790800</a>
          </p>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>OUR SERVICES</h4>
          <ul>
            <li><a href="/wallet">Currency Wallet</a></li>
            <li><a href="/transactions">Currency Transactions</a></li>
            <li>Bitcoin Investment</li>
            <li>Token Sale</li>
          </ul>
        </div>
      </footer>

      {/* Footer Bottom */}
      <hr />
      <p className="footer-bottom-text">
        © {new Date().getFullYear()} CryptoCoin. All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;
