import React from "react";
// Sahi path: Admissions folder se bahar nikal kar Breadcrumbs folder mein jana hai
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const ScholarshipPage = () => {
  return (
    <div style={pageWrapper}>
      {/* Clickable Breadcrumbs yahan set hain */}
      <Breadcrumbs
        links={[
          { name: "Admissions", path: "/admissions" },
          { name: "Financial Assistance" },
        ]}
      />

      <div style={contentArea}>
        <h1 style={headingStyle}>Financial Assistance</h1>

        <p style={textStyle}>
          College offers PEEF and Mora scholarships for deserving students.
        </p>

        {/* Extra info for better look */}
        <div style={infoBoxStyle}>
          <h3 style={{ color: "#1a237e", marginBottom: "10px" }}>
            Available Scholarships:
          </h3>
          <ul style={{ paddingLeft: "20px", color: "#444" }}>
            <li>PEEF (Punjab Education Endowment Fund)</li>
            <li>Mora Scholarship</li>
            <li>Religious Minority Scholarship</li>
          </ul>
        </div>
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

const contentArea = {
  padding: "40px 20px",
};

const headingStyle = {
  fontSize: "32px",
  color: "#1a237e",
  borderBottom: "1px solid #eee",
  paddingBottom: "15px",
  marginBottom: "20px",
  fontWeight: "600",
};

const textStyle = {
  fontSize: "18px",
  color: "#444",
  lineHeight: "1.6",
};

const infoBoxStyle = {
  marginTop: "30px",
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderLeft: "5px solid #1a237e",
  borderRadius: "4px",
};

export default ScholarshipPage;
