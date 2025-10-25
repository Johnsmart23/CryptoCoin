import React from "react";

const ContactPage = () => {
  return (
    <section className="contact-page">
      {/* Header Section */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <img src="/images/hero-2.png" alt="Icon 1" />
      </div>

      {/* Contact Form Section */}
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If You Have Any Query, Please Contact Us</p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>

          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="5" required></textarea>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
