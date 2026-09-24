import React from "react";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px 8%",
        backgroundColor: "#f5f7fa",
        gap: "50px",
      }}
    >
      {/* Left Content */}
      <div style={{ width: "50%" }}>
        <h1
          style={{
            fontSize: "48px",
            color: "#12355B",
            marginBottom: "20px",
          }}
        >
          Welcome to ABES Engineering College
        </h1>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "1.7",
            color: "#555",
          }}
        >
          ABES Engineering College is committed to providing quality technical
          education and developing skilled professionals through innovation,
          practical learning, research, and industry exposure.
        </p>

        <button
          style={{
            padding: "13px 28px",
            backgroundColor: "#12355B",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          Explore ABES
        </button>
      </div>

      {/* Right Image */}
      <div style={{ width: "45%" }}>
        <img
          src="https://img.collegedunia.com/public/reviewPhotos/722952/f8cc4343-06e5-4df4-bacd-45ea646d356a.jpeg"
          alt="ABES Engineering College"
          style={{
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </div>
  );
};

export default Home;