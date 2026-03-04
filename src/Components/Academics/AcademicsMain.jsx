import React from "react";
import { Link } from "react-router-dom";
// Breadcrumbs import add kiya
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const AcademicsMain = () => {
  const listItems = [
    { name: "Programs", path: "/academics/programs" },
    { name: "Faculty", path: "/academics/faculty" },
    { name: "Class Schedule", path: "/academics/class-schedule" },
    { name: "Timetable", path: "/academics/timetable" },
    { name: "Exam Schedule", path: "/academics/exams" },
    { name: "Results", path: "/academics/results" },
  ];

  return (
    <div style={pageWrapper}>
      {/* Breadcrumbs add kiya - links array ke sath */}
      <Breadcrumbs links={[{ name: "Academics" }]} />

      <div style={contentArea}>
        <h1 style={headingStyle}>Academics</h1>

        <ul style={listStyle}>
          {listItems.map((item, index) => (
            <li key={index} style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <Link
                to={item.path}
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// --- STYLES (Admissions page se match kar diye hain) ---
const pageWrapper = {
  width: "100%",
  minHeight: "80vh",
  backgroundColor: "#fff",
};

const contentArea = {
  padding: "40px 20px", // Side extra space khatam kar di
  width: "100%",
};

const headingStyle = {
  fontSize: "30px",
  color: "#333",
  borderBottom: "1px solid #eee",
  paddingBottom: "10px",
  marginBottom: "25px",
  fontWeight: "500",
  width: "100%",
};

const listStyle = { listStyle: "none", padding: 0 };

const listItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
  borderBottom: "1px solid #f0f0f0",
  paddingBottom: "12px",
};

const bulletStyle = {
  color: "#1a237e",
  fontSize: "22px",
  marginRight: "12px",
};

const linkStyle = {
  color: "#1a237e",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500",
  transition: "0.3s",
};

export default AcademicsMain;
