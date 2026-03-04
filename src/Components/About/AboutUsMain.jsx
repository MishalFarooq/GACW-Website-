import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const AboutUsMain = () => {
  const links = [
    { title: "Why Us", path: "/about/why-us" },
    { title: "History", path: "/about/history" },
    { title: "Vision & Mission", path: "/about/vision-mission" },
    { title: "Principal's Message", path: "/about/principal-message" },
    { title: "Our Staff", path: "/about/staff" },
    { title: "Rules and Regulations", path: "/about/rules" },
  ];

  return (
    <div style={pageWrapper}>
      {/* Home / About Us Breadcrumb */}
      <Breadcrumbs links={[{ name: "About Us" }]} />

      <div style={contentArea}>
        <h1 style={headingStyle}>About Us</h1>

        <ul style={listStyle}>
          {links.map((link, index) => (
            <li key={index} style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <Link
                to={link.path}
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// --- STYLES (Exactly matching Admissions Page) ---

const pageWrapper = {
  width: "100%",
  minHeight: "80vh",
  backgroundColor: "#fff",
};

const contentArea = {
  padding: "40px 20px", // Side spacing extra khatam, exactly like admissions
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

const listStyle = {
  listStyle: "none",
  padding: 0,
};

const listItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
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

export default AboutUsMain;
