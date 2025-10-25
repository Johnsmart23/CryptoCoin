import React from "react";
import { Link } from "react-router-dom";

const Transaction = () => {
  const transactions = [
    {
      type: "Deposit",
      wallet: "Litecoin Wallet | Bank Transfer",
      amount: "$405.34",
      date: "20 Jan 2020",
      icon: "➡️",
      color: "#3b82f6",
    },
    {
      type: "Withdrawal",
      wallet: "Litecoin Wallet | Bank Transfer",
      amount: "$405.34",
      date: "20 Jan 2020",
      icon: "⬅️",
      color: "#22c55e",
    },
    {
      type: "BTC to LTC",
      wallet: "Litecoin Wallet",
      amount: "$405.34",
      date: "20 Jan 2020",
      icon: "🔄",
      color: "#06b6d4",
    },
    {
      type: "Deposit",
      wallet: "Litecoin Wallet | Bank Transfer",
      amount: "$405.34",
      date: "20 Jan 2020",
      icon: "➡️",
      color: "#3b82f6",
    },
    {
      type: "BTC to ETH",
      wallet: "Ethereum Wallet",
      amount: "$405.34",
      date: "20 Jan 2020",
      icon: "🔁",
      color: "#0ea5e9",
    },
  ];

  return (
    <div className="transaction-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">WALLET</h2>
        <ul className="menu">
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/dashboard">📊 Dashboard</Link></li>
          <li><Link to="/wallet">💼 My Wallet</Link></li>
          <li><Link to="/transfer">💸 Transfer Coins</Link></li>
          <li><Link to="/investment">💰 Investment</Link></li>
          <li><Link to="/profile">👤 Profile</Link></li>
          <li><Link to="/">🚪 Log Out</Link></li>
        </ul>
      </aside>

      {/* Main Section */}
      <main className="transaction-main">
        {/* Topbar */}
        <div className="topbar">
          <div className="balance">
            <span>Your balance</span>
            <h4>$650.00 USD</h4>
          </div>
          <div className="profile">
            <img src="/images/user.png" alt="Profile" />
            <p>
              Welcome back
              <br />
              <strong>John Doe</strong>
            </p>
          </div>
        </div>

        {/* Transaction Section */}
        <section className="transaction-section">
          <h2 className="transaction-title">Transactions</h2>

          <div className="transaction-list">
            {transactions.map((tx, index) => (
              <div className="transaction-card" key={index}>
                <div className="tx-icon" style={{ background: tx.color }}>
                  {tx.icon}
                </div>
                <div className="tx-info">
                  <h3>{tx.type}</h3>
                  <p>{tx.wallet}</p>
                </div>
                <div className="tx-meta">
                  <h4>{tx.amount}</h4>
                  <span>{tx.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Transaction;
