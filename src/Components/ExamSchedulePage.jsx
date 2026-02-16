import React from "react";
import { AlertCircle } from "lucide-react";

const ExamSchedulePage = () => {
  return (
    <div style={pageContainer}>
      <h2 style={headingStyle}>Examination Schedule</h2>
      <div
        style={{
          ...cardStyle,
          textAlign: "left",
          marginTop: "30px",
          borderLeft: "5px solid #1a237e",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#d32f2f",
          }}
        >
          <AlertCircle size={20} />
          <h4 style={{ margin: 0 }}>Important Announcement</h4>
        </div>
        <p style={{ color: "#555", fontSize: "14px", marginTop: "10px" }}>
          The Send-up examinations for Intermediate Part-I and II are scheduled
          to start from **March 10, 2026**. Please collect your roll number
          slips from the admin office.
        </p>
      </div>
    </div>
  );
};

const pageContainer = {
  padding: "120px 40px",
  minHeight: "100vh",
  maxWidth: "1000px",
  margin: "0 auto",
};
const headingStyle = {
  color: "#1a237e",
  textTransform: "uppercase",
  borderLeft: "5px solid #ffd54f",
  paddingLeft: "15px",
  fontSize: "24px",
};
const cardStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  border: "1px solid #f0f0f0",
};

export default ExamSchedulePage;
