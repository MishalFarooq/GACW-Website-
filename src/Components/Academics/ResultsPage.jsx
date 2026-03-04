import React from "react";
// Breadcrumbs import add kiya
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const ResultsPage = () => {
  const biseLahoreResult = "https://result.biselahore.com/";
  const puResultLink = "https://pu.edu.pk/home/results/";

  return (
    <div style={pageWrapper}>
      {/* Breadcrumbs: Home / Academics / Results */}
      <Breadcrumbs
        links={[{ name: "Academics", path: "/academics" }, { name: "Results" }]}
      />

      <div style={contentArea}>
        <h1 style={headingStyle}>RESULTS</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* 1. Intermediate Section */}
          <div style={rowStyle}>
            <span style={textStyle}>
              › Intermediate Programs |
              <a
                href={biseLahoreResult}
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                {" "}
                Get Result{" "}
              </a>
              (Board of Intermediate and Secondary Education Lahore)
            </span>
          </div>

          {/* 2. ADP Section */}
          <div style={rowStyle}>
            <span style={textStyle}>
              › ADP (Associate Degree Program) |
              <a
                href={puResultLink}
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                {" "}
                Get Result{" "}
              </a>
              (University of the Punjab)
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "15px",
            backgroundColor: "#e8eaf6",
            borderLeft: "4px solid #1a237e",
            fontSize: "14px",
            color: "#333",
          }}
        >
          <strong>Note:</strong> Students are advised to keep their Roll Numbers
          ready before clicking on "Get Result".
        </div>
      </div>
    </div>
  );
};

// --- STYLES (Matching Admissions/About Consistency) ---

const pageWrapper = {
  width: "100%",
  minHeight: "80vh",
  backgroundColor: "#ffffff",
};

const contentArea = {
  padding: "40px 20px", // Side extra space khatam
  width: "100%",
};

const headingStyle = {
  fontSize: "32px",
  fontWeight: "bold",
  borderBottom: "3px solid #1a237e",
  display: "inline-block",
  marginBottom: "50px",
  color: "#1a237e",
};

const rowStyle = {
  padding: "15px 0",
  borderBottom: "1px solid #eee",
};

const textStyle = {
  fontSize: "18px",
  color: "#333",
  lineHeight: "1.6",
};

const linkStyle = {
  color: "#1a237e",
  textDecoration: "underline",
  fontWeight: "bold",
  margin: "0 8px",
  cursor: "pointer",
};

export default ResultsPage;
