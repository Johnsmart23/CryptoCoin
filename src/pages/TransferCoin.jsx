import React, { useState } from "react";
import { Link } from "react-router-dom";

const TransferCoin = () => {
  const [formData, setFormData] = useState({
    address: "",
    amount: "",
  });

  const [selectedTab, setSelectedTab] = useState("send");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTab === "send") {
      console.log("Sending:", formData);
      alert(`You sent ${formData.amount} BTC to ${formData.address}`);
    } else {
      console.log("Receiving to wallet address");
      alert("Your wallet address copied successfully!");
    }
  };

  return (
    <div className="transfer-container">
      {/* ===== Sidebar ===== */}
      <aside className="sidebar">
        <h2 className="logo">WALLET</h2>
        <ul className="menu">
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/wallet">💼 My Wallet</Link></li>
          <li><Link to="/dashboard">📊 Dashboard</Link></li>
          <li><Link to="/investment">💰 Investment</Link></li>
          <li><Link to="/transactions">💳 Transactions</Link></li>
          <li><Link to="/profile">👤 Profile</Link></li>
          <li><Link to="/logout">🚪 Log Out</Link></li>
        </ul>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="transfer-main">
        {/* ===== Topbar ===== */}
        <div className="topbar">
          <div className="balance">
            <span>Your balance</span>
            <h4>$650.00 USD</h4>
          </div>
          <div className="profile">
            <img src="/images/user.png" alt="Profile" />
            <p>
              Welcome back<br />
              <strong>John Doe</strong>
            </p>
          </div>
        </div>

        {/* ===== Transfer Section ===== */}
        <section className="transfer-section">
          <h2 className="transfer-title">Transfer Coins</h2>

          <div className="transfer-content">
            {/* Tabs */}
            <div className="transfer-tabs">
              <button
                className={selectedTab === "send" ? "active" : ""}
                onClick={() => setSelectedTab("send")}
              >
                Send
              </button>
              <button
                className={selectedTab === "receive" ? "active" : ""}
                onClick={() => setSelectedTab("receive")}
              >
                Receive
              </button>
            </div>

            {/* ===== Conditional Forms ===== */}
            {selectedTab === "send" ? (
              <form onSubmit={handleSubmit} className="transfer-form">
                <div className="currency-row">
                  <select required>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="LTC">LTC</option>
                    <option value="USD">USD</option>
                  </select>
                </div>

                <label>Recipient Wallet Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter wallet address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />

                <label>Amount to Send</label>
                <div className="amount-row">
                  <input
                    type="number"
                    name="amount"
                    placeholder="0.00000"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                  <span className="unit">BTC</span>
                </div>

                <button type="submit" className="send-btn">
                  Send Coin
                </button>
              </form>
            ) : (
              <div className="receive-section">
                <h3>Your Wallet Address</h3>
                <p>Use this address to receive crypto:</p>

                <div className="wallet-address">
                  <input
                    type="text"
                    readOnly
                    value="3F1AhxsZs1HU8vCxNLbMDEqwa56GNbxtgX"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "3F1AhxsZs1HU8vCxNLbMDEqwa56GNbxtgX"
                      );
                      alert("Address copied!");
                    }}
                  >
                    Copy
                  </button>
                </div>

                <div className="qr-code">
                  <img src="/images/qrcode.png" alt="QR Code" />
                  <p>Scan to receive crypto</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TransferCoin;
