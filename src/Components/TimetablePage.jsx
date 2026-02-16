import React from "react";

const TimetablePage = () => {
  return (
    <div
      style={{
        padding: "120px 40px",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2
        style={{
          color: "#1a237e",
          borderBottom: "3px solid #ffd54f",
          display: "inline-block",
        }}
      >
        COLLEGE TIMETABLE 2026
      </h2>
      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* Yahan aap apna Table dal sakti hain */}
        <p>
          Timetable details for Intermediate and ADP classes will be displayed
          here.
        </p>
      </div>
    </div>
  );
};

export default TimetablePage;
