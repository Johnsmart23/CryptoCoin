import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManageInvestments = () => {
  const [investments, setInvestments] = useState([
    {
      id: 1,
      user: "John Doe",
      plan: "Gold",
      amount: "$2,000",
      profit: "20%",
      status: "Active",
      startDate: "2025-09-01",
    },
    {
      id: 2,
      user: "Mary Smith",
      plan: "Silver",
      amount: "$1,000",
      profit: "15%",
      status: "Completed",
      startDate: "2025-08-10",
    },
    {
      id: 3,
      user: "Alex Johnson",
      plan: "Platinum",
      amount: "$5,000",
      profit: "25%",
      status: "Pending",
      startDate: "2025-10-01",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleStatusChange = (id, newStatus) => {
    setInvestments((prev) =>
      prev.map((inv) => (inv.id === id ? { ...inv, status: newStatus } : inv))
    );
  };

  const filteredInvestments = investments.filter(
    (inv) =>
      inv.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.plan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-dashboard">
      {/* ===== Sidebar ===== */}
      <aside className="sidebar">
        <h2 className="logo">ADMIN</h2>
        <ul className="menu">
             <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/admin">🏠 Dashboard</Link></li>
          <li><Link to="/admin/manage-users">👥 Manage Users</Link></li>
          <li><Link to="/admin/manage-transactions">💳 Transactions</Link></li>
          <li><Link to="/admin/manage-investments" className="active-link">💰 Investments</Link></li>
          <li><Link to="/admin/profile">👤 Profile</Link></li>
          <li><Link to="/admin/settings">⚙️ Settings</Link></li>
          <li><Link to="/logout">🚪 Log Out</Link></li>
        </ul>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="admin-main">
        <h2>💰 Manage Investments</h2>
        <p>View and control all user investment activities.</p>

        <div className="investments-controls">
          <input
            type="text"
            placeholder="Search by user, plan, or status..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="report-btn">📊 Generate Report</button>
        </div>

        <div className="table-container">
          <table className="investments-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Plan</th>
                <th>Amount</th>
                <th>Profit %</th>
                <th>Start Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvestments.length > 0 ? (
                filteredInvestments.map((inv) => (
                  <tr key={inv.id}>
                    <td>{inv.user}</td>
                    <td>{inv.plan}</td>
                    <td>{inv.amount}</td>
                    <td>{inv.profit}</td>
                    <td>{inv.startDate}</td>
                    <td>
                      <span className={`status ${inv.status.toLowerCase()}`}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="actions">
                      <button
                        className="approve"
                        onClick={() => handleStatusChange(inv.id, "Active")}
                      >
                        ✅ Approve
                      </button>
                      <button
                        className="complete"
                        onClick={() => handleStatusChange(inv.id, "Completed")}
                      >
                        🏁 Complete
                      </button>
                      <button
                        className="cancel"
                        onClick={() => handleStatusChange(inv.id, "Cancelled")}
                      >
                        ❌ Cancel
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No investments found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ManageInvestments;
