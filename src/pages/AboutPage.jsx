import React from "react";

const AboutPage = () => {
  const servicesData = [
    {
      id: 1,
      icon: "/images/icon-7.png",
      title: "Current Wallet",
      description: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sit clita duo justo.",
    },
    {
      id: 2,
      icon: "/images/icon-6.png",
      title: "Current Transaction",
      description: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sit clita duo justo.",
    },
    {
      id: 3,
      icon: "/images/icon-5.png",
      title: "Bitcoin Investment",
      description: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sit clita duo justo.",
    },
    {
      id: 4,
      icon: "/images/icon-10.png",
      title: "Current Exchange",
      description: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sit clita duo justo.",
    },
    {
      id: 5,
      icon: "/images/icon-3.png",
      title: "Bitcoin Escrow",
      description: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sit clita duo justo.",
    },
    {
      id: 6,
      icon: "/images/icon-8.png",
      title: "Token Sale",
      description: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sit clita duo justo.",
    },
  ];

  return (
    <>
      {/* ✅ About Header Section */}
      <section className="about-header">
        <div className="about-header-content">
          <h1>About Us</h1>
        </div>
      </section>

      {/* ✅ About Us Section */}
      <section className="about-us">
        <div className="about-container">
          {/* Left: Image */}
          <div className="about-image">
            <img src="/images/about 1.png" alt="About Us" />
          </div>

          {/* Right: Text */}
          <div className="about-text">
            <h3 className="trusted-platform">The Most Trusted Cryptocurrency Platform</h3>
            <p>
              At CryptoCoin, we make global trading simple, secure, and rewarding.
              Our platform allows you to trade Cryptocurrencies, Stocks, Indices, Commodities, 
              and Forex all from one account. Whether you’re a beginner or a professional, 
              we provide the tools, insights, and support you need to make confident investment 
              decisions. Join us today and take control of your financial future — smart trading starts here.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section className="services">
        <h2 className="services-title">Services</h2>
        <p className="services-subtitle">Buy, Sell And Exchange Cryptocurrency</p>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
