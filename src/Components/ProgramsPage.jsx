import React from "react";
import { BookOpen, GraduationCap, CheckCircle } from "lucide-react";

const ProgramsPage = () => {
  const interPrograms = [
    "F.Sc (Pre-Medical)",
    "F.Sc (Pre-Engineering)",
    "ICS (Computer Science)",
    "I.Com (Commerce)",
    "F.A (Humanities)",
  ];

  const graduationPrograms = [
    "BS English (4 Years)",
    "BS Psychology (4 Years)",
    "BS Information Technology",
    "ADP Arts (2 Years)",
    "ADP Science (2 Years)",
  ];

  return (
    <div style={pageContainer}>
      <h2 style={headingStyle}>Our Academic Programs</h2>
      <p style={{ color: "#666", marginBottom: "40px" }}>
        GACW Chung offers a wide range of programs designed to empower women
        through quality education.
      </p>

      <div style={gridContainer}>
        {/* Intermediate Section */}
        <div style={cardStyle}>
          <div style={iconHeader}>
            <BookOpen size={30} color="#1a237e" />
            <h3 style={{ margin: 0, color: "#1a237e" }}>Intermediate</h3>
          </div>
          <hr style={divider} />
          <ul style={listStyle}>
            {interPrograms.map((p, i) => (
              <li key={i} style={listItem}>
                <CheckCircle size={16} color="#ffd54f" /> {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Graduation Section */}
        <div style={cardStyle}>
          <div style={iconHeader}>
            <GraduationCap size={30} color="#1a237e" />
            <h3 style={{ margin: 0, color: "#1a237e" }}>ADP / BS Programs</h3>
          </div>
          <hr style={divider} />
          <ul style={listStyle}>
            {graduationPrograms.map((p, i) => (
              <li key={i} style={listItem}>
                <CheckCircle size={16} color="#ffd54f" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- STYLES ---
const pageContainer = {
  padding: "120px 40px",
  minHeight: "100vh",
  maxWidth: "1100px",
  margin: "0 auto",
  textAlign: "center",
};

const headingStyle = {
  color: "#1a237e",
  textTransform: "uppercase",
  borderBottom: "3px solid #ffd54f",
  display: "inline-block",
  paddingBottom: "10px",
  marginBottom: "10px",
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
  marginTop: "20px",
};

const cardStyle = {
  background: "#fff",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  border: "1px solid #f0f0f0",
  transition: "transform 0.3s ease",
};

const iconHeader = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  marginBottom: "15px",
};

const divider = {
  border: "none",
  borderTop: "1px solid #eee",
  margin: "20px 0",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  textAlign: "left",
};

const listItem = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "10px 0",
  fontSize: "15px",
  color: "#444",
  borderBottom: "1px style dashed #f9f9f9",
};

export default ProgramsPage;
