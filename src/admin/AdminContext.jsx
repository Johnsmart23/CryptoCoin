import React, { createContext, useState, useEffect } from "react";

// ✅ Create Context
export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [adminData, setAdminData] = useState(() => {
    const stored = localStorage.getItem("adminData");
    return stored
      ? JSON.parse(stored)
      : {
          name: "John Smart",
          role: "Super Administrator",
          email: "admin@investmentpro.com",
          username: "AdminMaster",
          phone: "+234 812 345 6789",
          joined: "Jan 10, 2024",
          image: "/images/user.png",
        };
  });

  useEffect(() => {
    localStorage.setItem("adminData", JSON.stringify(adminData));
  }, [adminData]);

  return (
    <AdminContext.Provider value={{ adminData, setAdminData }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
