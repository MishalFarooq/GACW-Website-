import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const AcademicsMain = () => {
  const items = [
    { name: "Programs", path: "/academics/programs", desc: "Explore degree programs offered by the college." },
    { name: "Faculty", path: "/academics/faculty", desc: "Meet our qualified and experienced faculty members." },
    { name: "Class Schedule", path: "/academics/class-schedule", desc: "View regular class schedules for students." },
    { name: "Timetable", path: "/academics/timetable", desc: "Access the official academic timetable." },
    { name: "Exam Schedule", path: "/academics/exams", desc: "Check examination dates and schedules." },
    { name: "Results", path: "/academics/results", desc: "View examination results and academic records." },
  ];

  return (
    <div style={wrapper}>
      <Breadcrumbs links={[{ name: "Academics" }]} />

      {/* Header */}
      <section style={heroSection}>
        <h1 style={heroTitle}>Academics</h1>
        <div style={divider}></div>
        <p style={heroSubtitle}>
          Academic programs, schedules, faculty, and examination information
        </p>
      </section>

      {/* Content */}
      <div style={container}>
        <div style={grid}>
          {items.map((item, index) => (
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

const heroSection = {
  background: "#1a237e",
  color: "white",
  textAlign: "center",
  padding: "70px 20px",
};

const heroTitle = {
  fontSize: "38px",
  fontWeight: "800",
};

const heroSubtitle = {
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
  marginBottom: "5px",
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

export default AcademicsMain;