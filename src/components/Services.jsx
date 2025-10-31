import React from "react";

const Services = () => {
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
    <section className="services">
      <h2 className="services-title">Services</h2>
      <p className="services-subtitle">
        Buy, Sell And Exchange Cryptocurrency
      </p>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
            />
            <div className="service-text">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
