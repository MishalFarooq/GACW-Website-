import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

const CalendarPage = () => (
  <div style={pageContainer}>
    <h2 style={headingStyle}>Academic Calendar 2025-26</h2>
    <div style={{ marginTop: "30px" }}>
      {[
        { event: "Summer Vacations", date: "June 15 - August 14" },
        { event: "Mid-Term Examinations", date: "November 10, 2025" },
        { event: "Sports Week", date: "February 20, 2026" },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            padding: "15px",
            borderBottom: "1px solid #eee",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#e8eaf6",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <CalendarIcon color="#1a237e" />
          </div>
          <div>
            <h4 style={{ margin: 0, color: "#333" }}>{item.event}</h4>
            <p style={{ margin: 0, color: "#666", fontSize: "13px" }}>
              {item.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Styles yahan lazmi honay chahiyen
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

export default CalendarPage;
