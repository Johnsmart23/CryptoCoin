import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "./AdminContext";

const AdminProfile = () => {
  const { adminData, setAdminData } = useContext(AdminContext);
  const [preview, setPreview] = useState(adminData.image);

  // ✅ Handle DP Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setAdminData({ ...adminData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
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
          <li><Link to="/admin/manage-transactions">💳 Transactions</Link></li>
          <li><Link to="/admin/manage-investments">💰 Investments</Link></li>
          <li><Link to="/admin/profile" className="active">👤 Profile</Link></li>
          <li><Link to="/admin/settings">⚙️ Settings</Link></li>
          <li><Link to="/logout">🚪 Log Out</Link></li>
        </ul>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="admin-main">
        <div className="topbar">
          <div className="welcome-text">
            <h2>Admin Profile</h2>
            <p>Manage your profile display picture and view details</p>
          </div>
        </div>

        {/* ===== Profile Section ===== */}
        <section className="profile-section">
          <div className="profile-card">
            {/* Profile Image */}
            <div className="profile-image-wrapper">
              <img
                src={preview}
                alt="Admin Avatar"
                className="profile-avatar"
              />

              {/* Upload Button */}
              <label className="upload-btn">
                📸 Change Picture
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>

              <h3>{adminData.name}</h3>
              <p className="role">{adminData.role}</p>
            </div>

            {/* Profile Info */}
            <div className="profile-info">
              <div className="info-row">
                <span className="label">Username:</span>
                <span className="value">{adminData.username}</span>
              </div>
              <div className="info-row">
                <span className="label">Email:</span>
                <span className="value">{adminData.email}</span>
              </div>
              <div className="info-row">
                <span className="label">Phone:</span>
                <span className="value">{adminData.phone}</span>
              </div>
              <div className="info-row">
                <span className="label">Joined:</span>
                <span className="value">{adminData.joined}</span>
              </div>
            </div>

            <Link to="/admin/settings" className="settings-link">
              ⚙️ Edit Profile in Settings
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminProfile;
