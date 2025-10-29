import React from "react";
import { Link } from "react-router-dom";

const InvestmentPlan = () => {
  return (
    <div className="investment-page">
      {/* ===== Sidebar ===== */}
      <aside className="sidebar">
        <h2 className="logo">INVEST</h2>
        <ul className="menu">
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/dashboard">📊 Dashboard</Link></li>
          <li><Link to="/wallet">💼 My Wallet</Link></li>
          <li><Link to="/transfer">💸 Transfer Coin</Link></li>
          <li><Link to="/transactions">💳 Transactions</Link></li>
          <li><Link to="/profile">Profile Profile</Link></li>
          <li>🚪 Log Out</li>
        </ul>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="investment-content">
        <h2 className="page-title">Investment Plans</h2>
        <p className="page-subtitle">Choose a plan that fits your financial goals</p>

        {/* ===== Plan Cards ===== */}
        <div className="plans-container">
          {/* Bronze Plan */}
          <div className="plan-card bronze">
            <h3>🥉 Bronze Plan</h3>
            <p className="profit">Profit: <strong>1% Daily</strong></p>
            <p>Minimum Deposit: <strong>$10</strong></p>
            <p>Maximum Deposit: <strong>$50</strong></p>
            <Link to="/transfer"><button className="invest-btn">Invest Now</button></Link>
          </div>

          {/* Silver Plan */}
          <div className="plan-card silver">
            <h3>🥈 Silver Plan</h3>
            <p className="profit">Profit: <strong>2.5% Daily</strong></p>
            <p>Minimum Deposit: <strong>$50</strong></p>
            <p>Maximum Deposit: <strong>$100</strong></p>
            <Link to="/transfer"><button className="invest-btn">Invest Now</button></Link>
          </div>

          {/* Gold Plan */}
          <div className="plan-card gold">
            <h3>🥇 Gold Plan</h3>
            <p className="profit">Profit: <strong>4% Daily</strong></p>
            <p>Minimum Deposit: <strong>$100</strong></p>
            <p>Maximum Deposit: <strong>$1,000+</strong></p>
            <Link to="/transfer"><button className="invest-btn">Invest Now</button></Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestmentPlan;
