const Roadmap = () => {
  return (
    <>
      <section className="roadmap">
        <h2 className="section-title">Roadmap</h2>
        <p className="section-subtitle">We translate dream into reality</p>

        <div className="roadmap-timeline">
          {[
            { date: "January 2024", desc: "Diam dolor ipsum sit amet" },
            { date: "March 2024", desc: "Diam dolor ipsum sit amet" },
            { date: "May 2024", desc: "Diam dolor ipsum sit amet" },
            { date: "September 2024", desc: "Diam dolor ipsum sit amet" },
            { date: "November 2024", desc: "Diam dolor ipsum sit amet" },
          ].map((item, index) => (
            <div key={index} className="roadmap-item">
              <div className="roadmap-icon"></div>
              <h3 className="roadmap-date">{item.date}</h3>
              <p className="roadmap-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Token Section */}
      <section className="token">
        <button className="buy-token-btn">Payment Method</button>
        <div className="token-logo">
          <img src="/images/payment-1.png" alt="Icon 1" />
          <img src="/images/payment-2 1.png" alt="Icon 1" />
          <img src="/images/payment-3 1.png" alt="Icon 1" />
          <img src="/images/payment-4 1.png" alt="Icon 1" />
        </div>
      </section>
    </>
  );
};

export default Roadmap;
