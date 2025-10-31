import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminSettings = () => {
  const [adminInfo, setAdminInfo] = useState({
    username: "AdminMaster",
    email: "admin@example.com",
    password: "",
    confirmPassword: "",
    twoFactorEnabled: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAdminInfo({
      ...adminInfo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminInfo.password && adminInfo.password !== adminInfo.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Settings updated successfully!");
  };

  return (
    <div className="admin-dashboard">
      {/* ===== Sidebar ===== */}
      <aside className="sidebar">
        <h2 className="logo">ADMIN</h2>
        <ul className="menu">
             <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/admin">🏠 Dashboard</Link></li>
          <li><Link to="/admin/manage-users">👥 Manage Users</Link></li>
          <li><Link to="/admin/manage-transactions">💳  Transactions</Link></li>
          <li><Link to="/admin/manage-investments">💰  Investments</Link></li>
          <li><Link to="/admin/profile">👤 Profile</Link></li>
          <li><Link to="/admin/settings" className="active-link">⚙️ Settings</Link></li>
          <li><Link to="/logout">🚪 Log Out</Link></li>
        </ul>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="admin-main">
        <h2>⚙️ Admin Settings</h2>
        <p>Manage your admin profile, password, and security preferences.</p>

        <div className="settings-container">
          <form className="settings-form" onSubmit={handleSubmit}>
            <h3>Profile Settings</h3>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={adminInfo.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={adminInfo.email}
                onChange={handleChange}
              />
            </div>

            <h3>Security Settings</h3>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                name="password"
                value={adminInfo.password}
                onChange={handleChange}
                placeholder="Enter new password"
              />
            </div>

            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={adminInfo.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm new password"
              />
            </div>

            <div className="form-group checkbox">
              <label>
                <input
                  type="checkbox"
                  name="twoFactorEnabled"
                  checked={adminInfo.twoFactorEnabled}
                  onChange={handleChange}
                />
                Enable Two-Factor Authentication (2FA)
              </label>
            </div>

            <button type="submit" className="save-btn">
              💾 Save Changes
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AdminSettings;
