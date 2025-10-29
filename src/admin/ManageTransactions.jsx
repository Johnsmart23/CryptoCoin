import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../admin/AdminContext";
const ManageTransactions = () => {
  const { adminData } = useContext(AdminContext);

  const [transactions, setTransactions] = useState([
    {
      id: "TXN001",
      user: "John Doe",
      type: "Deposit",
      amount: 500,
      status: "Success",
      date: "2025-10-20 12:30 PM",
    },
    {
      id: "TXN002",
      user: "Jane Smith",
      type: "Withdrawal",
      amount: 250,
      status: "Pending",
      date: "2025-10-21 03:15 PM",
    },
    {
      id: "TXN003",
      user: "CryptoBoss",
      type: "Transfer",
      amount: 100,
      status: "Failed",
      date: "2025-10-22 01:45 PM",
    },
    {
      id: "TXN004",
      user: "Mark Adams",
      type: "Deposit",
      amount: 2000,
      status: "Success",
      date: "2025-10-23 10:20 AM",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const filteredTransactions =
    filter === "All"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  const updateStatus = (id, newStatus) => {
    setTransactions((prev) =>
      prev.map((txn) =>
        txn.id === id ? { ...txn, status: newStatus } : txn
      )
    );
  };

  const totalVolume = transactions.reduce((sum, t) => sum + t.amount, 0);
  const totalPending = transactions.filter((t) => t.status === "Pending").length;
  const totalSuccess = transactions.filter((t) => t.status === "Success").length;

  return (
    <div className="admin-dashboard">
      {/* ===== Sidebar ===== */}
      <aside className="sidebar">
        <h2 className="logo">ADMIN</h2>
        <ul className="menu">
             <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/admin">🏠 Dashboard</Link></li>
          <li><Link to="/admin/manage-users">👥 Manage Users</Link></li>
          <li className="active"><Link to="/admin/manage-transactions">💳 Transactions</Link></li>
          <li><Link to="/admin/manage-investments">💰 Investments</Link></li>
          <li><Link to="/admin/profile">👤 Profile</Link></li>
          <li><Link to="/admin/settings">⚙️ Settings</Link></li>
          <li><Link to="/logout">🚪 Log Out</Link></li>
        </ul>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="admin-main">
        <div className="topbar">
          <div className="welcome-text">
            <h2>Manage Transactions</h2>
            <p>Monitor and control all crypto operations 💳</p>
          </div>
          <div className="admin-profile">
            <img
              src={adminData.image}
              alt="Admin"
              className="admin-avatar"
            />
            <span>{adminData.name}</span>
          </div>
        </div>

        {/* ===== Stats Section ===== */}
        <section className="stats-section">
          <div className="stat-card">
            <h4>Total Volume</h4>
            <p>${totalVolume.toLocaleString()}</p>
          </div>
          <div className="stat-card">
            <h4>Successful</h4>
            <p>{totalSuccess}</p>
          </div>
          <div className="stat-card">
            <h4>Pending</h4>
            <p>{totalPending}</p>
          </div>
        </section>

        {/* ===== Filter Section ===== */}
        <section className="filter-section">
          <label>Filter by Type:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="All">All</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdrawal">Withdrawal</option>
            <option value="Transfer">Transfer</option>
          </select>
        </section>

        {/* ===== Transactions Table ===== */}
        <section className="table-section">
          <table className="transaction-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Type</th>
                <th>Amount ($)</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((txn) => (
                <tr key={txn.id}>
                  <td>{txn.id}</td>
                  <td>{txn.user}</td>
                  <td>{txn.type}</td>
                  <td>${txn.amount}</td>
                  <td className={`status ${txn.status.toLowerCase()}`}>
                    {txn.status}
                  </td>
                  <td>{txn.date}</td>
                  <td>
                    {txn.status === "Pending" ? (
                      <>
                        <button
                          className="approve-btn"
                          onClick={() => updateStatus(txn.id, "Success")}
                        >
                          ✅ Approve
                        </button>
                        <button
                          className="reject-btn"
                          onClick={() => updateStatus(txn.id, "Failed")}
                        >
                          ❌ Reject
                        </button>
                      </>
                    ) : (
                      <button className="view-btn">👁️ View</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ManageTransactions;
