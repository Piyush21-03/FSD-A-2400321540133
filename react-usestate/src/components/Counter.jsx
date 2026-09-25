import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function inc() {
    
    if(count<10){
      setCount(count+1)
    }
    else{
      alert("Count exceeding")
    }
  }

  function dec() {
    if(count>0){
      setCount(count-1)
    }
    else{
      alert("Count Cannot be negative")
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "28px",
            color: "#12355B",
            marginBottom: "30px",
          }}
        >
          Counter App
        </h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <button
            onClick={dec}
            style={{
              width: "45px",
              height: "45px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#e74c3c",
              color: "white",
              fontSize: "25px",
              cursor: "pointer",
            }}
          >
            -
          </button>

          <span
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              minWidth: "50px",
              color: "#333",
            }}
          >
            {count}
          </span>

          <button
            onClick={inc}
            style={{
              width: "45px",
              height: "45px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#2ecc71",
              color: "white",
              fontSize: "25px",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;