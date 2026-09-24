import React from "react";

const Courses = () => {
  const courses = [
    {
      name: "B.Tech Computer Science & Engineering",
      duration: "4 Years",
      description:
        "Learn programming, software development, databases, operating systems, computer networks, and modern technologies.",
    },
    {
      name: "B.Tech CSE - Data Science",
      duration: "4 Years",
      description:
        "Focus on data analysis, machine learning, artificial intelligence, statistics, and data-driven technologies.",
    },
    {
      name: "B.Tech Information Technology",
      duration: "4 Years",
      description:
        "Develop skills in software engineering, web technologies, databases, networking, and information systems.",
    },
    {
      name: "B.Tech Electronics & Communication Engineering",
      duration: "4 Years",
      description:
        "Study electronics, communication systems, embedded systems, signal processing, and modern technologies.",
    },
    {
      name: "B.Tech Mechanical Engineering",
      duration: "4 Years",
      description:
        "Explore manufacturing, thermodynamics, mechanics, machine design, and industrial engineering.",
    },
    {
      name: "B.Tech Electrical & Electronics Engineering",
      duration: "4 Years",
      description:
        "Learn electrical systems, power electronics, control systems, machines, and electrical technologies.",
    },
  ];

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
        Courses Offered
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: "18px",
          marginBottom: "40px",
        }}
      >
        Explore the undergraduate engineering programs offered at ABES
        Engineering College.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "25px",
        }}
      >
        {courses.map((course, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
          >
            <h2
              style={{
                color: "#12355B",
                fontSize: "22px",
                marginBottom: "12px",
              }}
            >
              {course.name}
            </h2>

            <p
              style={{
                color: "#e67e22",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Duration: {course.duration}
            </p>

            <p
              style={{
                color: "#555",
                lineHeight: "1.6",
                fontSize: "16px",
              }}
            >
              {course.description}
            </p>

            <button
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                backgroundColor: "#12355B",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;