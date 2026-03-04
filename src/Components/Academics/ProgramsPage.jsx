import React, { useState } from "react";
// Breadcrumbs import add kiya
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Programs = () => {
  const [view, setView] = useState("main");

  // Breadcrumbs component common rakha hai taake har view (Main, Inter, ADP) mein nazar aaye
  const programBreadcrumbs = (
    <Breadcrumbs
      links={[{ name: "Academics", path: "/academics" }, { name: "Programs" }]}
    />
  );

  // Main Category View
  if (view === "main") {
    return (
      <div style={{ backgroundColor: "#fff", minHeight: "80vh" }}>
        {programBreadcrumbs}
        <div
          style={{
            padding: "60px 20px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "30px",
              borderBottom: "3px solid #000",
              display: "inline-block",
              marginBottom: "50px",
              fontWeight: "bold",
            }}
          >
            ACADEMIC PROGRAMS
          </h1>
          <div
            style={{
              display: "flex",
              gap: "30px",
              justifyContent: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <div onClick={() => setView("inter")} style={cardStyle}>
              <div style={{ fontSize: "50px" }}>🎓</div>
              <h2 style={{ marginTop: "15px", fontSize: "22px" }}>
                INTERMEDIATE
              </h2>
              <p style={{ color: "#666" }}>F.A / F.Sc / ICS / I.Com</p>
            </div>
            <div onClick={() => setView("adp")} style={cardStyle}>
              <div style={{ fontSize: "50px" }}>📜</div>
              <h2 style={{ marginTop: "15px", fontSize: "22px" }}>ADP</h2>
              <p style={{ color: "#666" }}>Associate Degree Programs</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Intermediate View
  if (view === "inter") {
    return (
      <div style={{ backgroundColor: "#fff", minHeight: "80vh" }}>
        {programBreadcrumbs}
        <div style={containerStyle}>
          <button onClick={() => setView("main")} style={backBtn}>
            ← Back
          </button>
          <h2 style={headerStyle}>INTERMEDIATE</h2>
          <ul style={listStyle}>
            <li>› F.Sc (Pre-Medical)</li>
            <li>› F.Sc (Pre-Engineering)</li>
            <li>› I.C.S (Computer Science)</li>
            <li>› I.Com (Commerce)</li>
            <li>› F.A (Arts & Humanities)</li>
          </ul>
        </div>
      </div>
    );
  }

  // ADP View
  if (view === "adp") {
    return (
      <div style={{ backgroundColor: "#fff", minHeight: "80vh" }}>
        {programBreadcrumbs}
        <div style={containerStyle}>
          <button onClick={() => setView("main")} style={backBtn}>
            ← Back
          </button>
          <h2 style={headerStyle}>ADP DEPARTMENTS</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            <ul style={listStyle}>
              <li>› English</li>
              <li>› Psychology</li>
              <li>› Education</li>
              <li>› Journalism</li>
              <li>› Political Science</li>
              <li>› Economics</li>
              <li>› Islamiat</li>
            </ul>
            <ul style={listStyle}>
              <li>› Physics</li>
              <li>› Mathematics</li>
              <li>› Chemistry</li>
              <li>› Botany</li>
              <li>› Zoology</li>
              <li>› Statistics</li>
              <li>› Fine Arts</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

// Styles (Aapke original styles barkarar hain)
const cardStyle = {
  flex: 1,
  padding: "40px",
  border: "1px solid #000",
  cursor: "pointer",
  transition: "0.3s",
};
const containerStyle = { padding: "40px", maxWidth: "800px", margin: "0 auto" };
const backBtn = {
  marginBottom: "20px",
  cursor: "pointer",
  padding: "8px 15px",
  background: "#000",
  color: "#fff",
  border: "none",
};
const headerStyle = {
  borderLeft: "5px solid #000",
  paddingLeft: "15px",
  marginBottom: "30px",
  fontWeight: "bold",
};
const listStyle = {
  listStyle: "none",
  padding: 0,
  fontSize: "18px",
  lineHeight: "2",
};

export default Programs;
