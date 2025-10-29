import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([
    { id: 1, username: "john_doe", email: "john@example.com", status: "Active" },
    { id: 2, username: "jane_smith", email: "jane@example.com", status: "Suspended" },
    { id: 3, username: "cryptoBoss", email: "boss@crypto.com", status: "Active" },
    { id: 4, username: "investKing", email: "king@btc.com", status: "Active" },
  ]);

  const handleToggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: u.status === "Active" ? "Suspended" : "Active" } : u
      )
    );
  };

  const filteredUsers = users.filter(
    (u) =>
      u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2 className="logo">ADMIN</h2>
        <ul className="menu">
             <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/admin">🏠 Dashboard</Link></li>
          <li><Link to="/admin/manage-users" className="active">👥 Manage Users</Link></li>
          <li><Link to="/admin/manage-transactions">💳 Transactions</Link></li>
          <li><Link to="/admin/manage-investments">💰 Investments</Link></li>
          <li><Link to="/admin/profile">👤 Profile</Link></li>
          <li><Link to="/admin/settings">⚙️ Settings</Link></li>
          <li><Link to="/logout">🚪 Log Out</Link></li>
        </ul>
      </aside>

      <main className="admin-main">
        <div className="topbar">
          <h2>Manage Users</h2>
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
                </td>
                <td>
                  <button
                    className="btn-toggle"
                    onClick={() => handleToggleStatus(user.id)}
                  >
                    {user.status === "Active" ? "Suspend" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ManageUsers;
