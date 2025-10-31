import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h2>Admin Panel</h2>
      <Outlet /> {/* This renders nested admin pages */}
    </div>
  );
};

export default AdminLayout;
