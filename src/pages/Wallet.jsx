import React from "react";
import { Link } from "react-router-dom";

const Wallet = () => {
  return (
    <div className="wallet-container">
      <aside className="wallet-sidebar">
        <div className="wallet-profile">
          <img src="images/user.png" alt="User Avatar" className="wallet-avatar" />
          <h3>John Doe</h3>
          <p>john.doe@email.com</p>
        </div>

        <ul className="wallet-menu">
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/investment">💰 Investment</Link></li>
          <li><Link to="/dashboard">📊 Dashboard</Link></li>
          <li><Link to="/transfer">💸  Transfer Coin</Link></li>
          <li><Link to="/transactions">💳 Transactions</Link></li>
          <li><Link to="/profile">👤 Profile</Link></li>
          <li><Link to="/logout">🚪 Log Out</Link></li>
        </ul>
      </aside>

      <main className="wallet-content">
        <h2>My Wallet</h2>

        <div className="wallet-cards">
          <div className="wallet-card">
            <img src="images/bitcoin.png" alt="Bitcoin" />
            <h3>Bitcoin</h3>
            <p>₿ 0.527 BTC</p>
          </div>

          <div className="wallet-card">
            <img src="images/ethereum.png" alt="Ethereum" />
            <h3>Ethereum</h3>
            <p>Ξ 2.43 ETH</p>
          </div>
           <div className="wallet-card">
            <img src="images/litecoin.png" alt="Bitcoin" />
            <h3>Litecoin</h3>
            <p>₿ 0.527 LTC</p>
          </div>

          <div className="wallet-card">
            <img src="images/bitcoincash.png" alt="Ethereum" />
            <h3>Bitcoin Cash </h3>
            <p>Ξ 2.43 BTH</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wallet;
