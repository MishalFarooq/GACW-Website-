import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Programs = () => {
  const [view, setView] = useState("main");

  const breadcrumbs = (
    <Breadcrumbs
      links={[{ name: "Academics", path: "/academics" }, { name: "Programs" }]}
    />
  );

  /* ---------- MAIN VIEW ---------- */

  if (view === "main") {
    return (
      <div style={wrapper}>
        {breadcrumbs}

        <section style={hero}>
          <h1 style={heroTitle}>Academic Programs</h1>
          <div style={divider}></div>
          <p style={heroText}>
            Explore the academic programs offered at Government Associate
            College for Women, Chung.
          </p>
        </section>

        <div style={container}>
          <div style={cardGrid}>
            <div onClick={() => setView("inter")} style={card}>
              <div style={icon}>🎓</div>
              <h2 style={cardTitle}>Intermediate</h2>
              <p style={cardDesc}>F.Sc / ICS / FA / I.Com</p>
            </div>

            <div onClick={() => setView("adp")} style={card}>
              <div style={icon}>📜</div>
              <h2 style={cardTitle}>ADP</h2>
              <p style={cardDesc}>Associate Degree Programs</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- INTERMEDIATE VIEW ---------- */

  if (view === "inter") {
    return (
      <div style={wrapper}>
        {breadcrumbs}

        <div style={container}>
          <button onClick={() => setView("main")} style={backBtn}>
            ← Back to Programs
          </button>

          <h2 style={sectionTitle}>Intermediate Programs</h2>

          <div style={programList}>
            <div style={programItem}>F.Sc (Pre-Medical)</div>
            <div style={programItem}>F.Sc (Pre-Engineering)</div>
            <div style={programItem}>ICS (Computer Science)</div>
            <div style={programItem}>I.Com (Commerce)</div>
            <div style={programItem}>F.A (Arts & Humanities)</div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- ADP VIEW ---------- */

  if (view === "adp") {
    return (
      <div style={wrapper}>
        {breadcrumbs}

        <div style={container}>
          <button onClick={() => setView("main")} style={backBtn}>
            ← Back to Programs
          </button>

          <h2 style={sectionTitle}>Associate Degree Programs (ADP)</h2>

          <div style={grid}>
            <div style={programItem}>English</div>
            <div style={programItem}>Psychology</div>
            <div style={programItem}>Education</div>
            <div style={programItem}>Journalism</div>
            <div style={programItem}>Political Science</div>
            <div style={programItem}>Economics</div>
            <div style={programItem}>Islamiat</div>
            <div style={programItem}>Physics</div>
            <div style={programItem}>Mathematics</div>
            <div style={programItem}>Chemistry</div>
            <div style={programItem}>Botany</div>
            <div style={programItem}>Zoology</div>
            <div style={programItem}>Statistics</div>
            <div style={programItem}>Fine Arts</div>
          </div>
        </div>
      </div>
    );
  }
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
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "60px 20px",
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
  gap: "30px",
};

const card = {
  background: "#fff",
  border: "1px solid #eee",
  padding: "40px",
  borderRadius: "12px",
  textAlign: "center",
  cursor: "pointer",
  boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
  transition: "0.3s",
};

const icon = {
  fontSize: "48px",
};

const cardTitle = {
  marginTop: "15px",
  color: "#1a237e",
};

const cardDesc = {
  color: "#666",
};

const backBtn = {
  padding: "10px 18px",
  border: "none",
  background: "#1a237e",
  color: "white",
  borderRadius: "6px",
  cursor: "pointer",
  marginBottom: "25px",
};

const sectionTitle = {
  color: "#1a237e",
  marginBottom: "25px",
  fontSize: "26px",
};

const programList = {
  display: "grid",
  gap: "12px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "12px",
};

const programItem = {
  padding: "14px 18px",
  background: "#f8faff",
  borderRadius: "8px",
  borderLeft: "4px solid #1a237e",
  fontSize: "16px",
};

export default Programs;