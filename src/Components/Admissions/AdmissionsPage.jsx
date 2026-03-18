import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const AdmissionsPage = () => {
  const admissionLinks = [
    { name: "Forms & Prospectus", path: "/admissions/forms", desc: "Download admission forms and prospectus." },
    { name: "Application Process", path: "/admissions/process", desc: "Step-by-step guide for admission." },
    { name: "Rules & Regulations", path: "/admissions/rules", desc: "Important admission policies." },
    { name: "Fee Structure", path: "/admissions/fee", desc: "Complete details of academic fees." },
    { name: "Eligibility Criteria", path: "/admissions/eligibility", desc: "Check admission requirements." },
    { name: "Apply Online", path: "/admissions/apply", desc: "Submit your admission application." },
  ];

  return (
    <div style={wrapper}>
      <Breadcrumbs links={[{ name: "Admissions" }]} />

      {/* HEADER */}
      <section style={hero}>
        <h1 style={heroTitle}>Admissions</h1>
        <div style={divider}></div>
        <p style={heroText}>
          Begin your academic journey at Government Associate College for Women, Chung.
        </p>
      </section>

      {/* CONTENT */}
      <div style={container}>
        <div style={grid}>
          {admissionLinks.map((item, index) => (
            <Link key={index} to={item.path} style={card}>
              <h3 style={cardTitle}>{item.name}</h3>
              <p style={cardDesc}>{item.desc}</p>
              <span style={cardLink}>View Details →</span>
            </Link>
          ))}
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

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "25px",
};

const card = {
  background: "#fff",
  padding: "30px",
  borderRadius: "12px",
  borderTop: "4px solid #1a237e",
  textDecoration: "none",
  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  transition: "0.3s",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const cardTitle = {
  color: "#1a237e",
  fontSize: "20px",
};

const cardDesc = {
  color: "#666",
  fontSize: "15px",
  lineHeight: "1.6",
};

const cardLink = {
  marginTop: "10px",
  color: "#1a237e",
  fontWeight: "600",
  fontSize: "14px",
};

export default AdmissionsPage;