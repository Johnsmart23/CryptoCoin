import React from "react";

const DashboardContent = () => {
  const servicesData = [
  {
  id: 1,
  icon: "/images/icon-7.png",
  title: "Easy To Start",
  description:
    "Getting started is simple. create your account, fund your wallet, and begin investing or trading within minutes. No technical experience required.",
},
{
  id: 2,
  icon: "/images/icon-6.png",
  title: "Safe & Secure",
  description:
    "Your assets are protected with top-grade encryption, multi-layer authentication, and advanced security protocols to ensure your funds remain safe at all times.",
},
{
  id: 3,
  icon: "/images/icon-5.png",
  title: "Affordable Plans",
  description:
    "Enjoy flexible investment options designed for everyone from beginners to pros. Choose a plan that fits your goals without hidden fees or high minimums.",
},
{
  id: 4,
  icon: "/images/icon-10.png",
  title: "Secure Storage",
  description:
    "Your crypto is stored safely in cold wallets with advanced protection measures, ensuring your digital assets are always secure and accessible only to you.",
},
{
  id: 5,
  icon: "/images/icon-3.png",
  title: "Protected By Insurance",
  description:
    "We prioritize your peace of mind. all assets held on our platform are backed by insurance coverage, safeguarding you against unexpected security breaches.",
},
{
  id: 6,
  icon: "/images/icon-8.png",
  title: "24/7 Support",
  description:
    "Our dedicated support team is available around the clock to assist you with transactions, account management, or any questions you may have.",
},

  ];

  return (
    <div className="dashboard-content">
      {/* ✅ Transactions Section */}
      <section className="transactions-section">
        <div className="transaction-item">
          <img src="/images/icon-9 1.png" alt="Transaction Icon 1" />
          <h3>45k</h3>
          <p>Today Transaction</p>
        </div>
        <div className="transaction-item">
          <img src="/images/icon-9 2.png" alt="Transaction Icon 2" />
          <h3>72k</h3>
          <p>Weekly Transaction</p>
        </div>
        <div className="transaction-item">
          <img src="/images/icon-4.png" alt="Transaction Icon 3" />
          <h3>180k</h3>
          <p>Monthly Transaction</p>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section className="services">
        <h2 className="services-title">Why Us!</h2>
        <p className="services-subtitle">
          The Best In The crypto Industry
        </p>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <img
                src={service.icon}
                alt={service.title}
                className="service-icon"
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardContent;
