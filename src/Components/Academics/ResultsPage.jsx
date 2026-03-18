import React from "react";
import { ExternalLink } from "lucide-react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const ResultsPage = () => {
  const biseLahoreResult = "https://result.biselahore.com/";
  const puResultLink = "https://pu.edu.pk/home/results/";

  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[{ name: "Academics", path: "/academics" }, { name: "Results" }]}
      />

      {/* HEADER */}
      <section style={hero}>
        <h1 style={heroTitle}>Academic Results</h1>
        <div style={divider}></div>
        <p style={heroText}>
          Access official examination results for Intermediate and ADP programs.
        </p>
      </section>

      <div style={container}>
        <div style={grid}>
          {/* Intermediate */}
          <div style={card}>
            <h2 style={cardTitle}>Intermediate Programs</h2>

            <p style={cardDesc}>
              Results for F.Sc, ICS, FA, and I.Com programs are published by
              the Board of Intermediate and Secondary Education Lahore.
            </p>

            <a
              href={biseLahoreResult}
              target="_blank"
              rel="noreferrer"
              style={btn}
            >
              Check Result
              <ExternalLink size={16} />
            </a>

            <p style={smallText}>
              Board of Intermediate and Secondary Education (BISE) Lahore
            </p>
          </div>

          {/* ADP */}
          <div style={card}>
            <h2 style={cardTitle}>ADP Programs</h2>

            <p style={cardDesc}>
              Associate Degree Program results are announced by the
              University of the Punjab through its official result portal.
            </p>

            <a
              href={puResultLink}
              target="_blank"
              rel="noreferrer"
              style={btn}
            >
              Check Result
              <ExternalLink size={16} />
            </a>

            <p style={smallText}>University of the Punjab</p>
          </div>
        </div>

        {/* NOTE */}
        <div style={noteBox}>
          <strong>Note:</strong> Students should keep their Roll Number ready
          before accessing the result portals.
        </div>
      </div>
    </div>
  );
};

/* ---------- STYLES ---------- */

const wrapper = {
  width: "100%",
  minHeight: "100vh",
  background: "#fff"
};

const hero = {
  background: "#1a237e",
  color: "white",
  textAlign: "center",
  padding: "70px 20px"
};

const heroTitle = {
  fontSize: "38px",
  fontWeight: "800"
};

const heroText = {
  marginTop: "10px",
  opacity: "0.9"
};

const divider = {
  width: "60px",
  height: "4px",
  background: "white",
  margin: "18px auto"
};

const container = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "60px 20px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "30px"
};

const card = {
  padding: "30px",
  border: "1px solid #eee",
  borderRadius: "12px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
  textAlign: "center"
};

const cardTitle = {
  color: "#1a237e",
  marginBottom: "10px"
};

const cardDesc = {
  color: "#555",
  marginBottom: "20px",
  lineHeight: "1.6"
};

const btn = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "10px 18px",
  background: "#1a237e",
  color: "white",
  textDecoration: "none",
  borderRadius: "6px",
  fontWeight: "600"
};

const smallText = {
  marginTop: "10px",
  color: "#777",
  fontSize: "14px"
};

const noteBox = {
  marginTop: "40px",
  padding: "18px",
  background: "#f8faff",
  borderLeft: "5px solid #1a237e",
  borderRadius: "6px",
  color: "#444"
};

export default ResultsPage;