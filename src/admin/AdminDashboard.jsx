import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AdminContext } from "./AdminContext";

const AdminDashboard = () => {
  const { adminData } = useContext(AdminContext) || { adminData: {} };

  const transactionData = [
    { name: "Mon", deposits: 2000, withdrawals: 800 },
    { name: "Tue", deposits: 3000, withdrawals: 1000 },
    { name: "Wed", deposits: 2500, withdrawals: 1200 },
    { name: "Thu", deposits: 4000, withdrawals: 1800 },
    { name: "Fri", deposits: 3500, withdrawals: 1500 },
    { name: "Sat", deposits: 2000, withdrawals: 1000 },
    { name: "Sun", deposits: 1500, withdrawals: 500 },
  ];

  const recentActivities = [
    "💰 User John Doe deposited $500.",
    "🔁 User Jane transferred 0.01 BTC.",
    "📈 New investment plan activated by Sarah.",
    "⚠️ Transaction #TXN231 flagged for review.",
    "🆕 New user registration: @cryptoBoss",
  ];

  return (
    <div className="admin-dashboard">
      {/* ===== Sidebar ===== */}
      <aside className="sidebar">
        <h2 className="logo">ADMIN</h2>
        <ul className="menu">
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/admin">📊 Dashboard</Link></li>
          <li><Link to="/admin/manage-users">👥 Manage Users</Link></li>
          <li><Link to="/admin/manage-transactions">💳 Transactions</Link></li>
          <li><Link to="/admin/manage-investments">💰 Investments</Link></li>
          <li><Link to="/admin/profile">👤 Profile</Link></li>
          <li><Link to="/admin/settings">⚙️ Settings</Link></li>
          <li><Link to="/logout" className="logout">🚪 Log Out</Link></li>
        </ul>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="main-content">
        {/* Topbar */}
        <div className="topbar">
          <div>
            <h1>Admin Dashboard</h1>
            <p>
              Welcome back, <strong>{adminData?.name || "Admin"}</strong> 👋
            </p>
          </div>
          <img
            src={adminData?.image || "/images/user.png"}
            alt="Admin"
            className="admin-avatar"
          />
        </div>

        {/* Stats Cards */}
        <section className="stats">
          <div className="stat-card">
            <h4>Total Users</h4>
            <p>1,254</p>
          </div>
          <div className="stat-card">
            <h4>Total Transactions</h4>
            <p>8,736</p>
          </div>
          <div className="stat-card">
            <h4>Active Investments</h4>
            <p>529</p>
          </div>
          <div className="stat-card">
            <h4>Total Wallet Balance</h4>
            <p>$87,540</p>
          </div>
        </section>

        {/* Chart */}
        <section className="chart-section">
          <h3>Weekly Transaction Overview</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="deposits" stroke="#4CAF50" strokeWidth={2} />
                <Line type="monotone" dataKey="withdrawals" stroke="#FF9800" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Quick Links */}
        <section className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="actions">
            <Link to="/admin/manage-users">👥 Manage Users</Link>
            <Link to="/admin/manage-transactions">💳 Transactions</Link>
            <Link to="/admin/manage-investments">💰 Investments</Link>
            <Link to="/admin/settings">⚙️ Settings</Link>
          </div>
        </section>

        {/* Recent Activities */}
        <section className="activities">
          <h3>Recent Activities</h3>
          <ul>
            {recentActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
