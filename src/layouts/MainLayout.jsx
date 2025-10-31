import React from "react";
import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header style={{ padding: "1rem", background: "#f0f0f0" }}>
        <h2>Investment Website</h2>
        <nav>
          <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
          <Link to="/user/dashboard" style={{ marginRight: "1rem" }}>User Page</Link>
          <Link to="/admin/dashboard">Admin Page</Link>
        </nav>
      </header>

      <main style={{ padding: "2rem" }}>
        <Outlet /> {/* This is where page content will load */}
      </main>
    </div>
  );
};

export default MainLayout;
