import React from "react";
// Folder 'Breadcrumbs' aur file 'Breadcrumbs.jsx' ke mutabiq import
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const FeePage = () => {
  return (
    <div style={pageWrapper}>
      {/* Hum ne 'links' array pass kiya hai taake navigation clickable ho */}
      <Breadcrumbs
        links={[
          { name: "Admissions", path: "/admissions" },
          { name: "Fee Structure" },
        ]}
      />

      <div style={contentArea}>
        <div style={headerTextWrapper}>
          <p style={subLabel}>FINANCIAL DETAILS</p>
          <h1 style={headingStyle}>Fee Structure</h1>
        </div>

        {/* --- BS Program Section --- */}
        <div style={sectionWrapper}>
          <h2 style={tableTitle}>BS Four Years Degree Program</h2>
          <p style={tableNote}>(To be paid once for whole program)</p>
          <div style={tableResponsive}>
            <table style={tableStyle}>
              <thead>
                <tr style={theadRow}>
                  <th style={thStyle}>Details</th>
                  <th style={thStyle}>Amount (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Admission Fee</td>
                  <td style={tdStyle}>175/-</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Tuition Fee</td>
                  <td style={tdStyle}>360/-</td>
                </tr>
                <tr>
                  <td style={tdStyle}>General + Examination + Sports Fund</td>
                  <td style={tdStyle}>340/-</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Medical Fund / Red Crescent Fund</td>
                  <td style={tdStyle}>60/-</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Registration / Affiliation / Exam Fee</td>
                  <td style={tdStyle}>2560/-</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Welfare + ID Card Fund</td>
                  <td style={tdStyle}>100/-</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Library Security (Refundable)</td>
                  <td style={tdStyle}>300/-</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Computer Security (Refundable)</td>
                  <td style={tdStyle}>500/-</td>
                </tr>
                <tr style={totalRow}>
                  <td style={tdStyle}>
                    <strong>Total Approximate</strong>
                  </td>
                  <td style={tdStyle}>
                    <strong>4,400/-</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* --- Intermediate Section --- */}
        <div style={sectionWrapper}>
          <h2 style={tableTitle}>Intermediate (F.A / F.Sc / I.Com / ICS)</h2>
          <div style={tableResponsive}>
            <table style={tableStyle}>
              <thead>
                <tr style={theadRow}>
                  <th style={thStyle}>Title of Account</th>
                  <th style={thStyle}>Amount (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Admission Fee</td>
                  <td style={tdStyle}>65 / 80</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Tuition Fee</td>
                  <td style={tdStyle}>600/-</td>
                </tr>
                <tr>
                  <td style={tdStyle}>General + Sports + Examination Fund</td>
                  <td style={tdStyle}>410/-</td>
                </tr>
                <tr>
                  <td style={tdStyle}>
                    Registration + Processing + Affiliation
                  </td>
                  <td style={tdStyle}>1435/-</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Library Security Fund</td>
                  <td style={tdStyle}>500/-</td>
                </tr>
                <tr>
                  <td style={tdStyle}>2nd Shift (Additional Charges)</td>
                  <td style={tdStyle}>3600/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={notesSection}>
          <h3 style={notesTitle}>Important Notes:</h3>
          <ul style={ulStyle}>
            <li>
              Transport fee will be charged @ Rs.500/- p.m. for those availing
              the facility.
            </li>
            <li>
              Security refund can be claimed within two academic years after
              completion.
            </li>
            <li>
              <strong>Scholarships:</strong> All merit scholarships by
              Govt/University are applicable.
            </li>
            <li>
              <strong>Hafiza-e-Quran:</strong> Full fee concession throughout
              the F.A/F.Sc session.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- STYLES ---
const pageWrapper = { width: "100%", backgroundColor: "#fff" };
const contentArea = { padding: "40px 20px" };
const headerTextWrapper = { marginBottom: "40px" };
const subLabel = { fontSize: "12px", color: "#1a237e", fontWeight: "700" };
const headingStyle = {
  fontSize: "32px",
  color: "#333",
  fontWeight: "600",
  marginTop: "5px",
};
const sectionWrapper = { marginBottom: "50px" };
const tableTitle = {
  fontSize: "22px",
  color: "#1a237e",
  marginBottom: "5px",
  fontWeight: "600",
};
const tableNote = { fontSize: "14px", color: "#888", marginBottom: "15px" };
const tableResponsive = { overflowX: "auto", width: "100%" };
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "10px",
  textAlign: "left",
};
const theadRow = { backgroundColor: "#1a237e", color: "#fff" };
const thStyle = {
  padding: "12px 15px",
  fontWeight: "500",
  border: "1px solid #1a237e",
};
const tdStyle = {
  padding: "10px 15px",
  border: "1px solid #eee",
  fontSize: "15px",
  color: "#444",
};
const totalRow = { backgroundColor: "#f9f9f9" };
const notesSection = {
  marginTop: "40px",
  padding: "25px",
  backgroundColor: "#f0f2ff",
  borderRadius: "2px",
  borderLeft: "5px solid #1a237e",
};
const notesTitle = { margin: "0 0 15px 0", color: "#1a237e", fontSize: "18px" };
const ulStyle = {
  paddingLeft: "20px",
  color: "#444",
  lineHeight: "1.8",
  fontSize: "14px",
};

export default FeePage;
