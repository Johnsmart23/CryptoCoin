import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders nested user pages */}
    </>
  );
};

export default UserLayout;
