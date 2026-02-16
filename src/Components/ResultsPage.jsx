import React from "react";
import { Download, FileText } from "lucide-react";

const ResultsPage = () => {
  const results = [
    { title: "Intermediate Part-II Annual 2025", date: "Jan 10, 2026" },
    { title: "ADP Semester-III Results", date: "Dec 15, 2025" },
    { title: "1st Year Send-up Result", date: "Nov 05, 2025" },
  ];

  return (
    <div style={pageContainer}>
      <h2 style={headingStyle}>Examination Results</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        {results.map((res, i) => (
          <div key={i} style={resultRow}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <FileText color="#1a237e" />
              <div>
                <span style={{ fontWeight: "600", display: "block" }}>
                  {res.title}
                </span>
                <small style={{ color: "#888" }}>Published: {res.date}</small>
              </div>
            </div>
            <button style={downloadBtn}>
              <Download size={16} /> DOWNLOAD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- YE STYLES LAZMI HONA CHAHIYEN (Warna Error Ayega) ---
const pageContainer = {
  padding: "120px 40px",
  minHeight: "100vh",
  maxWidth: "1000px",
  margin: "0 auto",
};
const headingStyle = {
  color: "#1a237e",
  textTransform: "uppercase",
  borderLeft: "5px solid #ffd54f",
  paddingLeft: "15px",
  fontSize: "24px",
};
const resultRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  background: "white",
  borderRadius: "10px",
  border: "1px solid #eee",
  boxShadow: "0 2px 5px rgba(0,0,0,0.02)",
};
const downloadBtn = {
  backgroundColor: "#1a237e",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "12px",
  fontWeight: "bold",
};

export default ResultsPage;
