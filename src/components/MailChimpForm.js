import React, { useState } from "react";

const MailchimpForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }
    
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    
    // Simulate successful submission
    setStatus("success");
    setMessage("Thank you for subscribing! We'll be in touch soon.");
    setEmail("");
    
    // You can add your own logic here, such as:
    // - Sending to your own backend
    // - Logging to console
    // - Storing in local database
    console.log("Email submitted:", email);
  };

  return (
    <div className="newsletter-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
          />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </div>
        
        {status && (
          <div className={`message ${status}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default MailchimpForm;