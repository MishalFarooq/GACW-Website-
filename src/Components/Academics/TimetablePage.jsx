import React from "react";
import { FileText, Download } from "lucide-react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import timetableFile from "../../assets/timetable.pdf";

const TimetablePage = () => {
  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "Academics", path: "/academics" },
          { name: "Timetable" },
        ]}
      />

      {/* Header */}
      <section style={hero}>
        <h1 style={heroTitle}>College Timetable</h1>
        <div style={divider}></div>
        <p style={heroText}>
          Government Associate College for Women, Chung — Academic Year 2025-26
        </p>
      </section>

      {/* Content */}
      <div style={container}>
        <div style={card}>
          <div style={iconBox}>
            <FileText size={36} color="#1a237e" />
          </div>

          <div style={fileInfo}>
            <h3 style={fileTitle}>College Timetable 2025-26</h3>
            <p style={fileDesc}>
              Download the official timetable in PDF format.
            </p>
          </div>

          <div style={actions}>
            <a
              href={timetableFile}
              target="_blank"
              rel="noopener noreferrer"
              style={viewBtn}
            >
              View PDF
            </a>

            <a
              href={timetableFile}
              download="GACW_CHUNG_Timetable.pdf"
              style={downloadBtn}
            >
              <Download size={16} />
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- STYLES ---------- */

const wrapper = {
  width: "100%",
  minHeight: "100vh",
  background: "#fff",
};

const hero = {
  background: "#1a237e",
  color: "white",
  textAlign: "center",
  padding: "70px 20px",
};

const heroTitle = {
  fontSize: "38px",
  fontWeight: "800",
};

const heroText = {
  marginTop: "10px",
  opacity: "0.9",
};

const divider = {
  width: "60px",
  height: "4px",
  background: "white",
  margin: "18px auto",
};

const container = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "60px 20px",
};

const card = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "30px",
  border: "1px solid #eee",
  borderRadius: "12px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  flexWrap: "wrap",
};

const iconBox = {
  background: "#f8faff",
  padding: "18px",
  borderRadius: "10px",
};

const fileInfo = {
  flex: "1",
};

const fileTitle = {
  color: "#1a237e",
  marginBottom: "5px",
};

const fileDesc = {
  color: "#666",
  fontSize: "15px",
};

const actions = {
  display: "flex",
  gap: "10px",
};

const viewBtn = {
  padding: "10px 18px",
  background: "#f1f1f1",
  color: "#333",
  textDecoration: "none",
  borderRadius: "6px",
  fontSize: "14px",
};

const downloadBtn = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  padding: "10px 18px",
  background: "#1a237e",
  color: "white",
  textDecoration: "none",
  borderRadius: "6px",
  fontSize: "14px",
};

export default TimetablePage;