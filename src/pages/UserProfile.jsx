import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [userData, setUserData] = useState(() => {
    const stored = localStorage.getItem("userData");
    return stored
      ? JSON.parse(stored)
      : {
          name: "John Smart",
          username: "johnsmart",
          email: "johnsmart@gmail.com",
          phone: "+234 812 345 6789",
          joined: "March 15, 2024",
          image: "/images/user.png",
        };
  });

  const [preview, setPreview] = useState(userData.image);

  // ✅ Handle DP Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        const updatedUser = { ...userData, image: reader.result };
        setUserData(updatedUser);
        localStorage.setItem("userData", JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user-dashboard">
      {/* ===== Sidebar ===== */}
      <aside className="sidebar">
        <h2 className="logo">USER</h2>
         <ul>
                    <li><Link to="/">🏠 Home</Link></li>
                    <li className="active"><Link to="/dashboard">📊 Dashboard</Link></li>
                    <li><Link to="/wallet">💼 My Wallet</Link></li>
                    <li><Link to="/investment">💰 Investment</Link></li>
                    <li><Link to="/transfer">💸  Transfer Coin</Link></li>
                    <li><Link to="/transactions">💳 Transaction</Link></li>
                    <li><Link to="/profile">👤 Profile</Link></li>
                    <li>🚪 Log Out</li>
                  </ul>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="user-main">
        <div className="topbar">
          <div className="welcome-text">
            <h2>User Profile</h2>
            <p>Manage your profile picture and view your account details</p>
          </div>
        </div>

        {/* ===== Profile Section ===== */}
        <section className="profile-section">
          <div className="profile-card">
            {/* Profile Image */}
            <div className="profile-image-wrapper">
              <img src={preview} alt="User Avatar" className="profile-avatar" />
              <label className="upload-btn">
                📸 Change Picture
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>

              <h3>{userData.name}</h3>
              <p className="role">@{userData.username}</p>
            </div>

            {/* Profile Info */}
            <div className="profile-info">
              <div className="info-row">
                <span className="label">Email:</span>
                <span className="value">{userData.email}</span>
              </div>
              <div className="info-row">
                <span className="label">Phone:</span>
                <span className="value">{userData.phone}</span>
              </div>
              <div className="info-row">
                <span className="label">Joined:</span>
                <span className="value">{userData.joined}</span>
              </div>
            </div>

            <Link to="/settings" className="settings-link">
              ⚙️ Edit Profile in Settings
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserProfile;
