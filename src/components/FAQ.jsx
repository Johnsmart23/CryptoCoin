import React, { useState } from "react";

const faqs = [
  {
    question: "How long do I wait to receive my tokens?",
    answer:
      "Once your transaction is confirmed on the blockchain, your tokens are typically credited to your wallet within a few minutes. However, network congestion or payment verification may sometimes cause a short delay usually no more than 10-15 minutes.",
  },
  {
    question: "How do I recover my lost Password?",
    answer:
      "You can easily reset your password by clicking on the “Forgot Password” link on the login page. Enter your registered email address, and we'll send you a secure password reset link or OTP to create a new password safely.",
  },
  {
    question: "What if I want to withdraw my assets from the Exchange?",
    answer:
      "Withdrawing your assets is simple, just go to the Withdrawal section in your dashboard, enter your wallet address, and specify the amount. All withdrawals are processed instantly or within a few minutes, depending on the blockchain network's confirmation speed.",
  },
  {
    question: "Can I get an instant notifications on new listing?",
    answer:
      "Yes! Once you enable email or push notifications in your profile settings, you'll receive instant alerts whenever a new token or trading pair is listed on the platform — so you never miss an opportunity.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <div className="faq-icon">{openIndex === index ? "▲" : "▼"}</div>
            </div>
            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
