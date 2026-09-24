import React from "react";

const About = () => {
  return (
    <div
      style={{
        minHeight: "90vh",
        padding: "50px 10%",
        backgroundColor: "#ffffff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#12355B",
          fontSize: "40px",
          marginBottom: "30px",
        }}
      >
        About ABES Engineering College
      </h1>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#555",
          textAlign: "justify",
        }}
      >
        ABES Engineering College is an engineering institution located in
        Ghaziabad, Uttar Pradesh. The college focuses on providing students
        with quality technical education, practical knowledge, and
        opportunities to develop professional skills.
      </p>

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {/* Vision */}
        <div
          style={{
            flex: 1,
            padding: "25px",
            backgroundColor: "#f5f7fa",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#12355B" }}>Our Vision</h2>

          <p style={{ color: "#555", lineHeight: "1.6" }}>
            To become a center of excellence in technical education,
            innovation, research, and entrepreneurship.
          </p>
        </div>

        {/* Mission */}
        <div
          style={{
            flex: 1,
            padding: "25px",
            backgroundColor: "#f5f7fa",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#12355B" }}>Our Mission</h2>

          <p style={{ color: "#555", lineHeight: "1.6" }}>
            To provide quality education, encourage innovation, develop
            practical skills, and prepare students for successful careers.
          </p>
        </div>
      </div>

      <h2
        style={{
          color: "#12355B",
          marginTop: "45px",
        }}
      >
        Why Choose ABES?
      </h2>

      <ul
        style={{
          fontSize: "17px",
          lineHeight: "2",
          color: "#555",
        }}
      >
        <li>Quality technical education</li>
        <li>Experienced faculty members</li>
        <li>Modern infrastructure and laboratories</li>
        <li>Industry-oriented learning</li>
        <li>Innovation and research opportunities</li>
        <li>Student clubs and extracurricular activities</li>
      </ul>
    </div>
  );
};

export default About;