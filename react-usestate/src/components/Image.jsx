import React, { useState } from "react";

const Image = () => {
  const [Height, setHeight] = useState(100);
  const [Width, setWidth] = useState(100);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#12355B",
            marginBottom: "25px",
          }}
        >
          Image Resizer
        </h2>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_FrbsvT465rAXe10wCFepqhI_oa3v-B_FYTZRCKDrw&s"
          alt="Cute Cat"
          style={{
            height: `${Height}px`,
            width: `${Width}px`,
            objectFit: "cover",
            borderRadius: "10px",
            border: "3px solid #12355B",
            transition: "all 0.2s ease",
          }}
        />

        <p
          style={{
            color: "#555",
            marginTop: "15px",
            fontSize: "16px",
          }}
        >
          Width: {Width}px | Height: {Height}px
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <button
            onClick={() => setWidth(Width + 5)}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#2ecc71",
              color: "white",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Width +5
          </button>

          <button
            onClick={() => setWidth(Width - 5)}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#e74c3c",
              color: "white",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Width -5
          </button>

          <button
            onClick={() => setHeight(Height + 5)}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#3498db",
              color: "white",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Height +5
          </button>

          <button
            onClick={() => setHeight(Height - 5)}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#9b59b6",
              color: "white",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Height -5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Image;