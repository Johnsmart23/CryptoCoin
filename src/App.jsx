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
import Investment from "./pages/Investment"; // ✅ New Investment Page added

function Layout() {
  const location = useLocation();

  // Hide header/footer on dashboard-related pages
  const hideLayout = [
    "/dashboard",
    "/wallet",
    "/transfer",
    "/transactions",
    "/investment", // ✅ Hide header/footer on investment page
  ].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        {/* ✅ Home */}
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

        {/* ✅ Other Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQpage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ Dashboard Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/transfer" element={<TransferCoin />} />
        <Route path="/transactions" element={<TransactionPage />} />
        <Route path="/investment" element={<Investment />} /> {/* ✅ New Route */}
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
