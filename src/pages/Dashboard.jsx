import React from "react";
import { Link } from "react-router-dom";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const WalletDashboard = () => {
  return (
    <div className="wallet-dashboard">
      {/* ===== Top Bar ===== */}
      <div className="top-bar">
        <h2>WALLET</h2>
        <div className="balance-info">
          <p>Your balance: <strong>$650.00 USD</strong></p>
          <div className="user-info">
            <img src="/images/user.png" alt="Icon 1" />
            <span>Welcome back, <strong>John Doe</strong></span>
          </div>
        </div>
      </div>

      {/* ===== Main Dashboard Layout ===== */}
      <div className="dashboard-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <ul>
            <li><Link to="/">🏠 Home</Link></li>
            <li className="active"><Link to="/dashboard">📊 Dashboard</Link></li>
            <li><Link to="/wallet">💼 My Wallet</Link></li>
            <li><Link to="/investment">💰 Investment</Link></li>
            <li><Link to="/transfer">💸  Transfer Coin</Link></li>
            <li><Link to="/transactions">💳 Transaction</Link></li>
            <li>👤 Profile</li>
            <li>🚪 Log Out</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Forex Chart */}
          <div className="chart-container">
            <h3>Market Chart (Forex)</h3>
            <AdvancedRealTimeChart
              symbol="FX:GBPUSD"   // ✅ Use any symbol like FX:EURUSD, FX:USDJPY, etc.
              theme="light"
              autosize={false}
              width="100%"
              height={400}         // ✅ Fixed height to make it visible
              interval="60"
              style="1"
            />
          </div>

          {/* Coin Balance and Transactions */}
          <div className="cards-container">
            <div className="card">
              <h4>Coin Balance</h4>
              <ul>
                <li>🪙 Bitcoin (BTC) — <strong>0.0312 BTC</strong></li>
                <li>💠 Ethereum (ETH) — <strong>0.5121 ETH</strong></li>
                <li>💎 Litecoin (LTC) — <strong>6.0312 LTC</strong></li>
              </ul>
            </div>

            <div className="card">
              <h4>Last Transaction</h4>
              <ul>
                <li>⬆️ Deposit — Bitcoin Wallet</li>
                <li>⬇️ Withdrawal — Ethereum Wallet</li>
                <li>🔁 BTC to LTC — Litecoin Wallet</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WalletDashboard;
