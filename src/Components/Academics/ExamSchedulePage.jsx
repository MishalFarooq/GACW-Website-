import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const ExamSchedulePage = () => {
  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "Academics", path: "/academics" },
          { name: "Exam Schedule" },
        ]}
      />

      {/* Header */}
      <section style={hero}>
        <h1 style={heroTitle}>Examination Schedule</h1>
        <div style={divider}></div>
        <p style={heroText}>
          Academic examination guidelines for Intermediate and ADP programs.
        </p>
      </section>

      <div style={container}>
        <p style={introText}>
          Students must appear in all college examinations for proper internal
          assessment. These assessments are required for eligibility when
          submitting admission forms to the Board of Intermediate and Secondary
          Education (BISE) Lahore and the University of the Punjab.
        </p>

        {/* Intermediate Section */}
        <section style={section}>
          <h2 style={sectionTitle}>Intermediate (1st Year & 2nd Year)</h2>

          <div style={cardGrid}>
            <div style={card}>
              <h3 style={cardTitle}>Mid-Term Examination</h3>
              <p style={cardText}>
                Conducted at the end of <strong>December</strong>. Students are
                evaluated through class tests and mid-term examinations to
                assess academic progress.
              </p>
            </div>

            <div style={card}>
              <h3 style={cardTitle}>Pre-Board Examination</h3>
              <p style={cardText}>
                Conducted in <strong>March</strong> after completion of the
                course syllabus. Participation is compulsory for eligibility to
                appear in BISE board examinations.
              </p>
            </div>
          </div>
        </section>

        {/* ADP Section */}
        <section style={section}>
          <h2 style={sectionTitle}>
            ADP (Associate Degree Program) – Two Year Program
          </h2>

          <div style={cardGrid}>
            <div style={card}>
              <h3 style={cardTitle}>Semester Examinations</h3>
              <p style={cardText}>
                ADP follows the <strong>University of the Punjab</strong>{" "}
                semester system. Each academic year consists of two semesters:
                Fall and Spring.
              </p>
            </div>

            <div style={card}>
              <h3 style={cardTitle}>Final Examination</h3>
              <p style={cardText}>
                Final examinations are conducted by the{" "}
                <strong>University of the Punjab</strong>. Official date sheets
                and schedules are issued by the Controller of Examinations,
                University of the Punjab.
              </p>
            </div>
          </div>
        </section>
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
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "60px 20px",
};

const introText = {
  background: "#f8faff",
  padding: "20px",
  borderRadius: "10px",
  lineHeight: "1.7",
  color: "#444",
  marginBottom: "40px",
  borderLeft: "5px solid #1a237e",
};

const section = {
  marginBottom: "50px",
};

const sectionTitle = {
  color: "#1a237e",
  marginBottom: "25px",
  fontSize: "26px",
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "25px",
};

const card = {
  background: "#fff",
  border: "1px solid #eee",
  borderRadius: "12px",
  padding: "25px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
};

const cardTitle = {
  color: "#b22222",
  marginBottom: "10px",
};

const cardText = {
  color: "#555",
  lineHeight: "1.6",
};

export default ExamSchedulePage;