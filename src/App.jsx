import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Transactions from "./components/Transactions";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import RoadMap from "./components/RoadMap";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

// Pages
import AboutPage from "./pages/AboutPage";
import FAQpage from "./pages/FAQpage";
import ContactPage from "./pages/ContactPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import TransferCoin from "./pages/TransferCoin";
import TransactionPage from "./pages/TransactionPage";
import Investment from "./pages/Investment";
import UserProfile from "./pages/UserProfile"; // ✅ Added user profile page

// ✅ Admin Pages
import AdminDashboard from "./admin/AdminDashboard";
import ManageUsers from "./admin/ManageUsers";
import ManageTransactions from "./admin/ManageTransactions";
import ManageInvestments from "./admin/ManageInvestments";
import AdminSettings from "./admin/AdminSettings";
import AdminProfile from "./admin/AdminProfile";

function Layout() {
  const location = useLocation();

  // ✅ Automatically hide layout (header/footer) on user dashboard or admin pages
  const hideLayout =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/wallet") ||
    location.pathname.startsWith("/transfer") ||
    location.pathname.startsWith("/transactions") ||
    location.pathname.startsWith("/investment") ||
    location.pathname.startsWith("/profile") || // ✅ Added user profile to hidden layout
    location.pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        {/* ✅ Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <About />
              <Transactions />
              <WhyUs />
              <Services />
              <RoadMap />
              <FAQ />
            </>
          }
        />

        {/* ✅ Public Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQpage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ User Dashboard Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/transfer" element={<TransferCoin />} />
        <Route path="/transactions" element={<TransactionPage />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/profile" element={<UserProfile />} /> {/* ✅ Added user profile route */}

        {/* ✅ Admin Pages */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/manage-transactions" element={<ManageTransactions />} />
        <Route path="/admin/manage-investments" element={<ManageInvestments />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
