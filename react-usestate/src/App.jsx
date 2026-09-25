import React from "react";
import Counter from "./components/Counter";
import Image from "./components/Image";

const App = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eef2f7",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#12355B",
          fontSize: "40px",
          marginBottom: "40px",
        }}
      >
        React Practice
      </h1>

      {/* Side by Side Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Counter Section */}
        <div
          style={{
            flex: "1",
            minWidth: "350px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.12)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#12355B",
              marginBottom: "20px",
            }}
          >
            My Counter Page
          </h2>

          <Counter />
        </div>

        {/* Image Section */}
        <div
          style={{
            flex: "1",
            minWidth: "350px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.12)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#12355B",
              marginBottom: "20px",
            }}
          >
            My Image Page
          </h2>

          <Image />
        </div>
      </div>
    </div>
  );
};

export default App;