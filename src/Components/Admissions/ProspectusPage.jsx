import React from "react";
import { Link } from "react-router-dom";
// Sahi path set kiya: folder se bahar nikal kar Breadcrumbs folder mein jana hai
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const ProspectusPage = () => {
  return (
    <div style={pageWrapper}>
      {/* Sahi array format mein links pass kiye */}
      <Breadcrumbs
        links={[
          { name: "Admissions", path: "/admissions" },
          { name: "Forms and Prospectus" },
        ]}
      />

      <div style={contentArea}>
        <h1 style={headingStyle}>Forms and Prospectus</h1>

        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span style={bulletStyle}>•</span>
            <a href="#!" style={linkStyle} onClick={(e) => e.preventDefault()}>
              Intermediate Prospectus 2025-26 (Coming Soon)
            </a>
          </li>

          <li style={listItemStyle}>
            <span style={bulletStyle}>•</span>
            <a href="#!" style={linkStyle} onClick={(e) => e.preventDefault()}>
              ADP Prospectus 2025-26 (Coming Soon)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// --- STYLES ---
const pageWrapper = {
  width: "100%",
  minHeight: "80vh",
  backgroundColor: "#fff",
};

const contentArea = { padding: "40px 10%" };
const headingStyle = {
  fontSize: "30px",
  color: "#333",
  borderBottom: "1px solid #eee",
  paddingBottom: "15px",
  marginBottom: "25px",
};
const listStyle = { listStyle: "none", padding: 0 };
const listItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
};
const bulletStyle = { color: "#1a237e", fontSize: "20px", marginRight: "10px" };
const linkStyle = {
  color: "#1a237e",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500",
  cursor: "pointer",
};

export default ProspectusPage;
