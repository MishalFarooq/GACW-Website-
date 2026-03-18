import React from "react";
import { ExternalLink, CheckCircle } from "lucide-react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const ApplyOnlinePage = () => {
  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "Admissions", path: "/admissions" },
          { name: "Apply Online" },
        ]}
      />

      {/* HEADER */}
      <section style={hero}>
        <h1 style={heroTitle}>Apply Online</h1>
        <div style={divider}></div>
        <p style={heroText}>
          Follow the steps below to submit your admission application through
          the Online College Admission System (OCAS).
        </p>
      </section>

      <div style={container}>
        {/* STEPS */}
        <div style={section}>
          <h2 style={sectionTitle}>Application Steps</h2>

          <div style={stepsGrid}>
            <div style={stepCard}>
              <span style={stepNumber}>1</span>
              <p style={stepText}>
                Visit{" "}
                <a
                  href="http://www.ocas.punjab.gov.pk"
                  target="_blank"
                  rel="noreferrer"
                  style={link}
                >
                  www.ocas.punjab.gov.pk <ExternalLink size={14} />
                </a>{" "}
                and enter your Matric Roll Number with your Board.
              </p>
            </div>

            <div style={stepCard}>
              <span style={stepNumber}>2</span>
              <p style={stepText}>
                Select your preferred college and program and print the
                Application Processing Fee slip.
              </p>
            </div>

            <div style={stepCard}>
              <span style={stepNumber}>3</span>
              <p style={stepText}>
                Deposit the processing fee (Rs. 25) in any branch of Bank of
                Punjab.
              </p>
            </div>
          </div>
        </div>

        {/* COLLEGE CODE */}
        <div style={codeBox}>
          <strong>Online College Code:</strong>
          <span style={code}>352258</span>
        </div>

        {/* GUIDELINES */}
        <div style={section}>
          <h2 style={sectionTitle}>Application Guidelines</h2>

          <ul style={guidelines}>
            <li><CheckCircle size={16}/> Apply from any internet-enabled device.</li>
            <li><CheckCircle size={16}/> Multiple applications can be submitted for different colleges.</li>
            <li><CheckCircle size={16}/> Only one active registration should be maintained.</li>
            <li><CheckCircle size={16}/> Colleges automatically receive your application details.</li>
            <li><CheckCircle size={16}/> Applications can be submitted even before Matric results are announced.</li>
            <li><CheckCircle size={16}/> Matric results are automatically shared with colleges.</li>
            <li><CheckCircle size={16}/> Manual admission process remains available for special cases.</li>
            <li><CheckCircle size={16}/> Federal Board and other provinces applicants apply manually.</li>
          </ul>
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
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "60px 20px",
};

const section = {
  marginBottom: "40px",
};

const sectionTitle = {
  fontSize: "22px",
  color: "#1a237e",
  marginBottom: "20px",
};

const stepsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "20px",
};

const stepCard = {
  display: "flex",
  gap: "15px",
  padding: "18px",
  border: "1px solid #eee",
  borderRadius: "8px",
  background: "#f8f9ff",
};

const stepNumber = {
  width: "35px",
  height: "35px",
  background: "#1a237e",
  color: "#fff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  flexShrink: 0,
};

const stepText = {
  margin: 0,
  fontSize: "15px",
  color: "#444",
};

const link = {
  color: "#1a237e",
  fontWeight: "600",
  textDecoration: "underline",
};

const codeBox = {
  background: "#f0f2ff",
  padding: "20px",
  borderLeft: "5px solid #1a237e",
  margin: "30px 0",
  fontSize: "18px",
};

const code = {
  marginLeft: "10px",
  fontSize: "24px",
  fontWeight: "800",
  color: "#1a237e",
};

const guidelines = {
  listStyle: "none",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

export default ApplyOnlinePage;