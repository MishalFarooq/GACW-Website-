import React from "react";
// Sahi path: Folder se bahar nikal kar (..) Breadcrumbs folder mein jana hai
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const RulesPage = () => {
  return (
    <div style={pageWrapper}>
      {/* Breadcrumbs component ko sahi data pass kiya */}
      <Breadcrumbs
        links={[
          { name: "Admissions", path: "/admissions" },
          { name: "Rules and Regulations" },
        ]}
      />

      <div style={contentArea}>
        <div style={headerTextWrapper}>
          <p style={subLabel}>COLLEGE POLICIES</p>
          <h1 style={headingStyle}>Rules and Regulations</h1>
        </div>

        {/* 1. Attendance Section */}
        <div style={sectionBox}>
          <h2 style={subHeadingStyle}>Attendance</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span> Attendance must be at least{" "}
              <strong>75%</strong> for promotion and Board examination.
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span> Maximum of 5 days leave is
              allowed per month.
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span> If absent for 10 days
              continuously, the name will be struck off. Re-admission is subject
              to rules.
            </li>
          </ul>
        </div>

        {/* 2. Discipline & Fines Section */}
        <div style={sectionBox}>
          <h2 style={subHeadingStyle}>Discipline & Fines</h2>
          <div style={tableWrapper}>
            <table style={fineTable}>
              <thead>
                <tr style={tableHeader}>
                  <th style={thStyle}>Category / Discipline Breach</th>
                  <th style={thStyle}>Fine Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Incomplete uniform</td>
                  <td style={tdStyle}>Rs. 100</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Without uniform</td>
                  <td style={tdStyle}>Rs. 150</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Breach of discipline</td>
                  <td style={tdStyle}>Rs. 200 - Rs. 1000</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Mobile / Camera / Tape Recorder</td>
                  <td style={tdStyle}>Rs. 1000 + Confiscation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={noteText}>
            Note: Confiscated items will only be returned on a written request
            from parents.
          </p>
        </div>

        {/* 3. Leave Application */}
        <div style={sectionBox}>
          <h2 style={subHeadingStyle}>Leave Application</h2>
          <div style={docGrid}>
            <div style={docCard}>Up to 5 days: Subject Teacher</div>
            <div style={docCard}>Up to 15 days: Leave Incharge</div>
            <div style={docCard}>Longer periods: Vice Principal</div>
            <div style={docCard}>Illness (6+ days): Medical Certificate</div>
          </div>
          <p style={infoText}>
            * Infectious disease cases require an immunity certificate before
            rejoining.
          </p>
        </div>

        {/* 4. Uniform Details */}
        <div style={sectionBox}>
          <h2 style={subHeadingStyle}>Uniform Specifications</h2>
          <div style={uniformGrid}>
            <div style={uniformItem}>
              <strong>Standard:</strong> White wash-n-wear, knee-length shirt,
              full sleeves, coat collar, and white dupatta.
            </div>
            <div style={uniformItem}>
              <strong>1st Shift:</strong> 1.5” checked patti inside the
              border/slits.
            </div>
            <div style={uniformItem}>
              <strong>2nd Shift:</strong> 1.5” checked patti outside on the
              slits.
            </div>
            <div style={uniformItem}>
              <strong>Footwear:</strong> Black shoes/joggers with black socks.
              Open slippers are not allowed.
            </div>
          </div>
          <div style={warningBox}>
            Make-up and jewelry are strictly prohibited. Abayas must be kept in
            the designated room.
          </div>
        </div>

        {/* 5. Identity Card */}
        <div style={sectionBox}>
          <h2 style={subHeadingStyle}>College Identity Card</h2>
          <p style={standardText}>
            Every student must wear her ID Card during college hours. In case of
            loss, a duplicate will be issued with a double fee.
          </p>
        </div>

        {/* 6. Parent Teacher Meeting */}
        <div style={lastSection}>
          <strong>Parent Teacher Meetings:</strong> Held twice a year (after
          December Tests and Promotion Exams).
        </div>
      </div>
    </div>
  );
};

// --- STYLES (Provided by you) ---
const pageWrapper = { width: "100%", backgroundColor: "#fff" };
const contentArea = { padding: "40px 20px", width: "100%" };
const headerTextWrapper = {
  marginBottom: "30px",
  borderBottom: "1px solid #eee",
  paddingBottom: "15px",
};
const subLabel = { fontSize: "12px", color: "#333", fontWeight: "700" };
const headingStyle = {
  fontSize: "36px",
  color: "#1a237e",
  fontWeight: "600",
  marginTop: "5px",
};
const sectionBox = {
  marginBottom: "35px",
  padding: "25px",
  border: "1px solid #f0f0f0",
  borderRadius: "2px",
};
const subHeadingStyle = {
  fontSize: "22px",
  color: "#1a237e",
  marginBottom: "15px",
  borderBottom: "2px solid #f0f0f0",
  paddingBottom: "8px",
  fontWeight: "600",
};
const listStyle = { listStyle: "none", padding: 0 };
const listItemStyle = {
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "10px",
  color: "#444",
  lineHeight: "1.6",
};
const bulletStyle = {
  color: "#1a237e",
  fontWeight: "bold",
  marginRight: "12px",
};
const tableWrapper = { overflowX: "auto", marginTop: "15px" };
const fineTable = {
  width: "100%",
  borderCollapse: "collapse",
  textAlign: "left",
};
const tableHeader = { backgroundColor: "#f8f9fa" };
const thStyle = { padding: "12px", border: "1px solid #eee", color: "#1a237e" };
const tdStyle = { padding: "12px", border: "1px solid #eee", color: "#555" };
const docGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "10px",
  marginTop: "15px",
};
const docCard = {
  padding: "15px",
  backgroundColor: "#f8f9ff",
  borderLeft: "5px solid #1a237e",
  fontSize: "14px",
};
const uniformGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "15px",
  marginTop: "15px",
};
const uniformItem = {
  padding: "15px",
  border: "1px solid #eee",
  fontSize: "14px",
  color: "#444",
};
const warningBox = {
  marginTop: "15px",
  padding: "15px",
  backgroundColor: "#fff5f5",
  color: "#c53030",
  borderLeft: "5px solid #c53030",
  fontSize: "14px",
};
const noteText = {
  fontSize: "13px",
  color: "#888",
  marginTop: "10px",
  fontStyle: "italic",
};
const infoText = { fontSize: "13px", color: "#666", marginTop: "10px" };
const standardText = { color: "#444", lineHeight: "1.6" };
const lastSection = {
  padding: "20px",
  backgroundColor: "#e8eaf6",
  color: "#1a237e",
  fontWeight: "600",
  borderRadius: "2px",
};

export default RulesPage;
