import React from "react";
// Sahi path: Admissions folder se bahar nikal kar Breadcrumbs folder mein jana
import Breadcrumb from "../Breadcrumbs/Breadcrumbs";

const ApplyOnlinePage = () => {
  return (
    <div style={pageWrapper}>
      {/* Yahan humne 'links' array bheja hai taake aapka shared 
          component crash na ho aur proper navigation dikhaye.
      */}
      <Breadcrumb
        links={[
          { name: "Admissions", path: "/admissions" },
          { name: "Apply Online" },
        ]}
      />

      <div style={contentArea}>
        <div style={headerTextWrapper}>
          <p style={subLabel}>ADMISSION PORTAL</p>
          <h1 style={headingStyle}>How to Apply Online?</h1>
        </div>

        {/* --- Main Steps Section --- */}
        <div style={mainStepSection}>
          <h2 style={sectionTitle}>Main Steps:</h2>
          <div style={stepsList}>
            <div style={stepItem}>
              <span style={stepNumber}>1</span>
              <p style={stepText}>
                Visit{" "}
                <a
                  href="http://www.ocas.punjab.gov.pk"
                  target="_blank"
                  rel="noreferrer"
                  style={linkStyle}
                >
                  www.ocas.punjab.gov.pk
                </a>
                , Enter your Matric Roll Number and select your Board.
              </p>
            </div>
            <div style={stepItem}>
              <span style={stepNumber}>2</span>
              <p style={stepText}>
                Select college and program, then print the Application
                Processing Fee Slip.
              </p>
            </div>
            <div style={stepItem}>
              <span style={stepNumber}>3</span>
              <p style={stepText}>
                Deposit Processing Fee (Rs. 25) at any branch of the Bank of
                Punjab (BOP).
              </p>
            </div>
          </div>
        </div>

        {/* --- College Code Highlight --- */}
        <div style={codeHighlightBox}>
          <span style={codeLabel}>Online College Code:</span>
          <span style={codeValue}>352120</span>
        </div>

        {/* --- Guidelines Section --- */}
        <div style={guidelinesSection}>
          <h2 style={sectionTitle}>Guidelines for Online Application</h2>
          <ul style={ulStyle}>
            <li style={liStyle}>
              Apply from any place that has internet access.
            </li>
            <li style={liStyle}>
              Applicants can submit multiple applications (to different
              colleges/programs).
            </li>
            <li style={liStyle}>
              In case of multiple registrations, the student must cancel others
              and continue with only one.
            </li>
            <li style={liStyle}>
              Colleges will receive particulars about applicants automatically.
            </li>
            <li style={liStyle}>
              Facility is available even before Matric results are announced.
            </li>
            <li style={liStyle}>
              Your Matric results will automatically be provided to Colleges
              with your application.
            </li>
            <li style={liStyle}>
              The manual admissions process will remain in place for specific
              cases.
            </li>
            <li style={liStyle}>
              Candidates from Federal Board and boards of other provinces will
              apply via the manual system.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- STYLES ---
const pageWrapper = { width: "100%", backgroundColor: "#fff", margin: 0 };
const contentArea = {
  padding: "40px 20px",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
};
const headerTextWrapper = { marginBottom: "40px" };
const subLabel = { fontSize: "12px", color: "#1a237e", fontWeight: "700" };
const headingStyle = {
  fontSize: "32px",
  color: "#333",
  fontWeight: "600",
  marginTop: "5px",
};
const mainStepSection = { marginBottom: "40px" };
const sectionTitle = {
  fontSize: "22px",
  color: "#1a237e",
  marginBottom: "20px",
  fontWeight: "600",
};
const stepsList = { display: "flex", flexDirection: "column", gap: "15px" };
const stepItem = {
  display: "flex",
  alignItems: "center",
  padding: "15px 0",
  borderBottom: "1px solid #f0f0f0",
};
const stepNumber = {
  width: "35px",
  height: "35px",
  backgroundColor: "#1a237e",
  color: "#fff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "15px",
  fontWeight: "bold",
  flexShrink: 0,
};
const stepText = {
  fontSize: "16px",
  color: "#444",
  margin: 0,
  lineHeight: "1.5",
};
const linkStyle = {
  color: "#1a237e",
  fontWeight: "600",
  textDecoration: "underline",
};
const codeHighlightBox = {
  backgroundColor: "#f0f2ff",
  padding: "20px",
  borderLeft: "5px solid #1a237e",
  margin: "30px 0",
  display: "inline-block",
  minWidth: "300px",
};
const codeLabel = { fontSize: "16px", color: "#1a237e", marginRight: "10px" };
const codeValue = { fontSize: "24px", fontWeight: "800", color: "#1a237e" };
const guidelinesSection = { marginTop: "20px" };
const ulStyle = { paddingLeft: "20px", marginTop: "15px" };
const liStyle = {
  fontSize: "15px",
  color: "#555",
  marginBottom: "12px",
  lineHeight: "1.6",
};

export default ApplyOnlinePage;
