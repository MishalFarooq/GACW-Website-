import React from "react";
// Folder 'Breadcrumbs' aur file 'Breadcrumbs.jsx' ke mutabiq import
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const AppProcessPage = () => {
  return (
    <div style={pageWrapper}>
      {/* Breadcrumbs component ko context ke sath update kiya */}
      <Breadcrumbs
        links={[
          { name: "Admissions", path: "/admissions" },
          { name: "Application Process" },
        ]}
      />

      <div style={contentArea}>
        <div style={headerTextWrapper}>
          <p style={subLabel}>WHAT WE OFFER</p>
          <h1 style={headingStyle}>Application Process</h1>
        </div>

        {/* --- Intermediate Section --- */}
        <div style={sectionBox}>
          <h2 style={subHeadingStyle}>Intermediate Program</h2>

          <h3 style={titleStyle}>Selection Criteria</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span> Submit separate admission forms
              for Science, Arts, General Science, I.C.S, and I.Com.
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span> Admission Quota on the basis of
              Sports is only available for F.A.
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span> 2% quota for physical
              disability (Certificate required).
            </li>
          </ul>

          <h3 style={titleStyle}>Required Documents</h3>
          <div style={docGrid}>
            <div style={docCard}>Matric Result Card (2 Photocopies)</div>
            <div style={docCard}>4 Photos (Blue Background)</div>
            <div style={docCard}>Character Certificate (2 Copies)</div>
            <div style={docCard}>Father/Guardian CNIC (1 Copy)</div>
          </div>
        </div>

        {/* --- ADP Section --- */}
        <div style={sectionBox}>
          <h2 style={{ ...subHeadingStyle, color: "#d32f2f" }}>ADP Program</h2>
          <p style={infoText}>
            Admission to ADP classes is made according to the schedule
            advertised in leading newspapers.
          </p>

          <h3 style={titleStyle}>Selection Criteria</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span> F.A., F.Sc., A-Level / Senior
              Cambridge students are eligible to apply.
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span> Minimum 60% marks required; Age
              must be under 22 years.
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span> English Literature & Fine Arts
              candidates must pass an aptitude test.
            </li>
          </ul>

          <h3 style={titleStyle}>Requirement After Application</h3>
          <div style={docGrid}>
            <div style={docCard}>Student B-Form (4 Copies)</div>
            <div style={docCard}>Matric Certificate (4 Copies)</div>
            <div style={docCard}>F.A. / F.Sc. Result Card (4 Copies)</div>
            <div style={docCard}>Student ID Card (4 Copies)</div>
          </div>
        </div>

        <div style={noteBox}>
          <strong>Note:</strong> All departments are responsible for admissions.
          Any clerical mistake may lead to cancellation.
        </div>
      </div>
    </div>
  );
};

// --- STYLES (No changes needed, keeping your design) ---
const pageWrapper = {
  width: "100%",
  margin: 0,
  padding: 0,
  backgroundColor: "#fff",
};
const contentArea = {
  padding: "40px 20px",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
};
const headerTextWrapper = {
  marginBottom: "30px",
  borderBottom: "1px solid #eee",
  paddingBottom: "15px",
};
const subLabel = {
  fontSize: "12px",
  color: "#333",
  fontWeight: "700",
  margin: 0,
};
const headingStyle = {
  fontSize: "36px",
  color: "#1a237e",
  fontWeight: "600",
  marginTop: "5px",
};
const sectionBox = {
  marginBottom: "40px",
  padding: "25px",
  border: "1px solid #f0f0f0",
  borderRadius: "2px",
  backgroundColor: "#fff",
};
const subHeadingStyle = {
  fontSize: "24px",
  color: "#1a237e",
  marginBottom: "20px",
  borderBottom: "2px solid #f0f0f0",
  paddingBottom: "10px",
  fontWeight: "600",
};
const titleStyle = {
  fontSize: "18px",
  color: "#444",
  fontWeight: "600",
  marginTop: "20px",
  marginBottom: "15px",
};
const listStyle = { listStyle: "none", padding: 0 };
const listItemStyle = {
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "12px",
  color: "#444",
  fontSize: "15px",
  lineHeight: "1.6",
};
const bulletStyle = {
  color: "#1a237e",
  fontWeight: "bold",
  marginRight: "12px",
};
const docGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "12px",
  marginTop: "15px",
};
const docCard = {
  padding: "15px",
  backgroundColor: "#fcfcfc",
  fontSize: "14px",
  border: "1px solid #eee",
  borderLeft: "5px solid #1a237e",
  color: "#333",
};
const infoText = { fontStyle: "italic", color: "#666", marginBottom: "20px" };
const noteBox = {
  padding: "25px",
  backgroundColor: "#fff8e1",
  color: "#856404",
  border: "1px solid #ffe082",
  borderRadius: "2px",
  fontSize: "14px",
};

export default AppProcessPage;
