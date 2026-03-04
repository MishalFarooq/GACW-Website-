import React from "react";
// Folder 'Breadcrumbs' aur file 'Breadcrumbs.jsx' ke mutabiq import
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const EligibilityCriteria = () => {
  const departments = [
    "Applied Psychology",
    "Botany",
    "Chemistry",
    "Computer Science",
    "Economics",
    "Education",
    "English Language and Literature",
    "Fine Arts",
    "Islamic Studies",
    "Physics",
    "Zoology",
  ];

  return (
    <div style={pageWrapper}>
      {/* Dynamic links array pass kiya hai navigation ke liye */}
      <Breadcrumbs
        links={[
          { name: "Admissions", path: "/admissions" },
          { name: "Eligibility Criteria" },
        ]}
      />

      <div style={contentArea}>
        <div style={headerTextWrapper}>
          <p style={subLabel}>ADMISSION ELIGIBILITY</p>
          <h1 style={headingStyle}>Eligibility Criteria</h1>
        </div>

        {/* --- Intermediate Section --- */}
        <div style={simpleSection}>
          <h2 style={simpleSubHeading}>Intermediate Program</h2>
          <p style={mainText}>
            The student who have{" "}
            <span style={highlight}>
              cleared the matriculation examination without having supply
            </span>{" "}
            in any of the subject is eligible to take admission in the college.
          </p>
        </div>

        <hr style={divider} />

        {/* --- ADP Program Section --- */}
        <div style={simpleSection}>
          <h2 style={simpleSubHeading}>Associate Degree Program (ADP)</h2>
          <p style={infoNote}>
            Admission to ADP classes is made according to the schedule
            advertised in leading newspapers. Every department has its own
            specific eligibility criteria:
          </p>

          <div style={simpleListGrid}>
            {departments.map((dept, index) => (
              <div key={index} style={simpleListItem}>
                <span style={bullet}>•</span>
                <span style={deptNameText}>Department of {dept}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={simpleFooterNote}>
          <strong>Note:</strong> Final eligibility is subject to the marks
          obtained in relevant subjects as per the Punjab Government Merit
          Policy.
        </div>
      </div>
    </div>
  );
};

// --- STYLES (Full Width) ---
const pageWrapper = {
  width: "100%",
  backgroundColor: "#fff",
  margin: 0,
};

const contentArea = {
  padding: "40px 20px",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
};

const headerTextWrapper = {
  marginBottom: "30px",
};

const subLabel = { fontSize: "12px", color: "#1a237e", fontWeight: "700" };

const headingStyle = {
  fontSize: "32px",
  color: "#333",
  fontWeight: "600",
  marginTop: "5px",
};

const simpleSection = {
  marginBottom: "40px",
  width: "100%",
};

const simpleSubHeading = {
  fontSize: "22px",
  color: "#1a237e",
  marginBottom: "15px",
  fontWeight: "600",
};

const mainText = {
  fontSize: "16px",
  color: "#444",
  lineHeight: "1.6",
  margin: 0,
};

const highlight = {
  fontWeight: "600",
  color: "#000",
};

const infoNote = {
  fontSize: "15px",
  color: "#666",
  marginBottom: "20px",
};

const simpleListGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "10px",
};

const simpleListItem = {
  display: "flex",
  alignItems: "center",
  padding: "8px 0",
};

const bullet = {
  color: "#1a237e",
  marginRight: "10px",
  fontSize: "20px",
};

const deptNameText = { fontSize: "15px", color: "#444" };

const divider = {
  border: 0,
  borderTop: "1px solid #eee",
  margin: "30px 0",
};

const simpleFooterNote = {
  marginTop: "20px",
  padding: "15px 0",
  borderTop: "2px solid #1a237e",
  color: "#555",
  fontSize: "14px",
};

export default EligibilityCriteria;
