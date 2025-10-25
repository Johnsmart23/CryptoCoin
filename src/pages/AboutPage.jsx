import React from "react";

const AboutPage = () => {
  const servicesData = [
    {
      id: 1,
      icon: "/images/icon-7.png",
      title: "Current Wallet",
      description:
        "Securely store and manage all your digital assets in one place. Our wallet ensures fast transactions and top-tier encryption for your peace of mind.",
    },
    {
      id: 2,
      icon: "/images/icon-6.png",
      title: "Current Transaction",
      description:
        "Send and receive crypto instantly with transparent transaction tracking. Experience smooth transfers with minimal fees and real-time confirmations.",
    },
    {
      id: 3,
      icon: "/images/icon-5.png",
      title: "Bitcoin Investment",
      description:
        "Grow your wealth with smart Bitcoin investment options. Track market trends, analyze performance, and invest confidently with our user-friendly tools.",
    },
    {
      id: 4,
      icon: "/images/icon-10.png",
      title: "Current Exchange",
      description:
        "Swap your favorite cryptocurrencies at the best available rates. Our exchange service ensures speed, security, and complete control over your assets.",
    },
    {
      id: 5,
      icon: "/images/icon-3.png",
      title: "Bitcoin Escrow",
      description:
        "Trade safely with our Bitcoin escrow service. Funds are held securely until both parties fulfill their obligations ensuring fairness and trust in every deal.",
    },
    {
      id: 6,
      icon: "/images/icon-8.png",
      title: "Token Sale",
      description:
        "Participate in exclusive token sales and early investment opportunities. Stay ahead in the crypto space with vetted projects and secure purchasing methods.",
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
              At <strong>CryptoCoin</strong>, we make global trading simple, secure, and rewarding.
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
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Privacy Policy Section */}
      <section className="policy-section">
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is our top priority. At <strong>CryptoCoin</strong>, we collect and store only 
          essential information required to provide our services efficiently. We never share your 
          personal or financial data with third parties without your consent. All user information 
          is encrypted and protected using the latest security standards. You can review, edit, or 
          delete your account information anytime through your user dashboard.
        </p>
      </section>

      {/* ✅ Disclaimer Section */}
      <section className="disclaimer-section">
        <h2>Disclaimer</h2>
        <p>
          The information provided on this platform is for educational and informational purposes only 
          and should not be considered financial advice. Cryptocurrency trading and investment involve 
          significant risks, including the possible loss of your capital. Past performance is not indicative 
          of future results. Always do your own research and consult a licensed financial advisor before 
          making any investment decisions.
        </p>
      </section>

      {/* ✅ Terms of Service Section */}
      <section className="terms-section">
        <h2>Terms of Service</h2>
        <p>
          By using <strong>CryptoCoin</strong>, you agree to comply with our Terms of Service. Users must 
          be 18 years or older to create an account. You are solely responsible for maintaining the 
          confidentiality of your login credentials. Any fraudulent or illegal activity will result in 
          immediate account suspension. We reserve the right to modify these terms at any time to ensure 
          compliance with global financial and regulatory standards.
        </p>
      </section>
    </>
  );
};

export default AboutPage;
