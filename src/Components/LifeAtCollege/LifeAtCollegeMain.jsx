import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const LifeAtCollegeMain = () => {
  const listItems = [
    { name: "Facilities", path: "/life-at-college/facilities" },
    { name: "Events", path: "/life-at-college/events" },
    { name: "Notice Board", path: "/life-at-college/all-notices" },
    { name: "Gallery", path: "/life-at-college/gallery" },
  ];

  return (
    <div style={pageWrapper}>
      {/* Blue background aur container khatam - Simple Clean Breadcrumb */}
      <div style={breadcrumbRow}>
        <Link to="/" style={breadcrumbLink}>
          Home
        </Link>{" "}
        / <span style={breadcrumbCurrent}>Life at College</span>
      </div>

      <div style={contentArea}>
        <h1 style={headingStyle}>Life at College</h1>

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

// --- STYLES (Padding aur Containers khatam) ---

const pageWrapper = {
  width: "100%",
  backgroundColor: "#fff",
  padding: "0 5%", // Sirf sides se minimal alignment
};

const breadcrumbRow = {
  fontSize: "13px",
  color: "#333",
  padding: "10px 0", // Minimum padding
  borderBottom: "1px solid #f0f0f0", // Patli line Gallery page ki tarah
  textAlign: "left",
};

const breadcrumbLink = {
  textDecoration: "none",
  color: "#000",
  fontWeight: "500",
};

const breadcrumbCurrent = {
  color: "#333",
  marginLeft: "5px",
};

const contentArea = {
  padding: "20px 0", // Top padding kam kar di, side padding zero
  width: "100%",
  textAlign: "left",
};

const headingStyle = {
  fontSize: "30px",
  color: "#0d1137", // Navy Blue color jaisa Gallery page par hai
  margin: "0 0 20px 0",
  fontWeight: "700",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
};

const listItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "5px", // Spacing kam kar di
  paddingBottom: "5px",
  width: "fit-content",
};

const bulletStyle = {
  color: "#0056b3", // Gallery ki tarah blue bullet
  fontSize: "18px",
  marginRight: "10px",
};

const linkStyle = {
  color: "#0056b3", // Gallery links ki tarah Blue
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: "500",
};

export default LifeAtCollegeMain;
