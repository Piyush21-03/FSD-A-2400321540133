import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        minHeight: "90vh",
        padding: "50px 8%",
        backgroundColor: "#f5f7fa",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#12355B",
          fontSize: "40px",
          marginBottom: "15px",
        }}
      >
        Contact Us
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: "18px",
          marginBottom: "40px",
        }}
      >
        Get in touch with ABES Engineering College
      </p>

      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        {/* Contact Information */}
        <div
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#12355B" }}>College Information</h2>

          <p style={{ color: "#555", lineHeight: "1.8" }}>
            <strong>Address:</strong>
            <br />
            ABES Engineering College,
            <br />
            Campus Road, Ghaziabad,
            <br />
            Uttar Pradesh, India
          </p>

          <p style={{ color: "#555" }}>
            <strong>Phone:</strong> +91 XXXXX XXXXX
          </p>

          <p style={{ color: "#555" }}>
            <strong>Email:</strong> info@abes.ac.in
          </p>

          <p style={{ color: "#555" }}>
            <strong>Website:</strong> www.abes.ac.in
          </p>
        </div>

        {/* Contact Form */}
        <div
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#12355B" }}>Send Us a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box",
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box",
            }}
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              resize: "none",
              boxSizing: "border-box",
            }}
          ></textarea>

          <button
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#12355B",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;