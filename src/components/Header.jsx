import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="/images/icon-1 1.png" alt="Icon 1" />
        <h1>CryptoCoin</h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>

          {/* Dropdown for Services */}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <span className="dropdown-title">Services ▾</span>
            <ul
              className={`dropdown-menu ${
                isDropdownVisible ? "visible" : ""
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <li>
                <Link to="/dashboard" onClick={() => setDropdownVisible(false)}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/transactions" onClick={() => setDropdownVisible(false)}>
                  Transactions
                </Link>
              </li>
              <li>
                <Link to="/wallet" onClick={() => setDropdownVisible(false)}>
                  Wallet
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {/* ✅ Login button now navigates to login page */}
          <li>
            <Link to="/signup">
              <button className="login-btn">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
