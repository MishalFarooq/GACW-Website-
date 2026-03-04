import React from "react";
import { Clock } from "lucide-react";
// Breadcrumbs import add kiya
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const ClassSchedulePage = () => {
  const schedule = [
    { period: "1st Period", time: "08:30 AM - 09:15 AM" },
    { period: "2nd Period", time: "09:15 AM - 10:00 AM" },
    { period: "3rd Period", time: "10:00 AM - 10:45 AM" },
    { period: "Break Time", time: "10:45 AM - 11:15 AM" },
    { period: "4th Period", time: "11:15 AM - 12:00 PM" },
    { period: "5th Period", time: "12:00 PM - 12:45 PM" },
    { period: "6th Period", time: "12:45 PM - 01:30 PM" },
    { period: "7th Period", time: "01:30 PM - 02:00 PM" },
  ];

  return (
    <div style={pageWrapper}>
      {/* Breadcrumbs: Home / Academics / Class Schedule */}
      <Breadcrumbs
        links={[
          { name: "Academics", path: "/academics" },
          { name: "Class Schedule" },
        ]}
      />

      <div style={contentArea}>
        <h2 style={headingStyle}>Class Schedule (Morning Only)</h2>
        <p style={{ color: "#666", marginBottom: "30px" }}>
          College timing: 08:30 AM to 02:00 PM
        </p>

        <div
          style={{
            maxWidth: "800px",
            border: "1px solid #eee",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {schedule.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "15px 20px",
                backgroundColor:
                  item.period === "Break Time" ? "#f8f9fa" : "#fff",
                borderBottom: "1px solid #eee",
                fontWeight: item.period === "Break Time" ? "bold" : "normal",
              }}
            >
              <span
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                {item.period === "Break Time" && <Clock size={16} />}
                {item.period}
              </span>
              <span style={{ color: "#1a237e", fontWeight: "600" }}>
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Standard Styles (Matching other pages) ---
const pageWrapper = {
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#fff",
};

const contentArea = {
  padding: "40px 20px", // Side extra space set to standard 20px
  width: "100%",
};

const headingStyle = {
  borderLeft: "5px solid #1a237e",
  paddingLeft: "15px",
  color: "#1a237e",
  textTransform: "uppercase",
  fontSize: "24px",
  marginBottom: "10px",
};

export default ClassSchedulePage;
