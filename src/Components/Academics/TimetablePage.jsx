import React from "react";
// Breadcrumbs import add kiya
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
// Path check kar lein: agar file 'src/assets/timetable.pdf' hai
import timetableFile from "../../assets/timetable.pdf";

const TimetablePage = () => {
  return (
    <div style={pageWrapper}>
      {/* Breadcrumbs: Home / Academics / Timetable */}
      <Breadcrumbs
        links={[
          { name: "Academics", path: "/academics" },
          { name: "Timetable" },
        ]}
      />

      <div style={contentArea}>
        {/* Heading bilkul Govt College ki website jaisa */}
        <h1 style={headingStyle}>Timetable</h1>

        <ul style={listStyle}>
          <li style={listItemStyle}>
            {/* Blue Bullet Point */}
            <span style={bulletStyle}>•</span>

            {/* Download attribute for saving, target blank for viewing */}
            <a
              href={timetableFile}
              download="GACW_CHUNG_Timetable.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              College Timetable 2025-26
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// --- STYLES (Matching Consistency) ---

const pageWrapper = {
  width: "100%",
  minHeight: "80vh",
  backgroundColor: "#ffffff",
  fontFamily: "Arial, sans-serif",
};

const contentArea = {
  padding: "40px 20px", // Side spacing standard 20px kar di
  width: "100%",
};

const headingStyle = {
  fontSize: "28px",
  color: "#333",
  fontWeight: "500",
  marginBottom: "30px",
  borderBottom: "1px solid #eeeeee", // Thin line niche
  paddingBottom: "15px",
  width: "100%",
};

const listStyle = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
};

const listItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
};

const bulletStyle = {
  marginRight: "10px",
  fontSize: "24px",
  color: "#1a237e", // Dark Blue Bullet
  lineHeight: "1",
};

const linkStyle = {
  fontSize: "18px",
  color: "#1a237e", // Blue Link
  textDecoration: "none",
  cursor: "pointer",
  fontWeight: "500",
};

export default TimetablePage;
