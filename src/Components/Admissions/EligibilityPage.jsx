import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const EligibilityCriteria = () => {
  const departments = [
    "Applied Psychology",
    "Botany",
    "Chemistry",
    "Computer Science",
    "Economics",
    "Education",
    "English Language and Literature",
    "Fine Arts",
    "Islamic Studies",
    "Physics",
    "Zoology",
  ];

  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "Admissions", path: "/admissions" },
          { name: "Eligibility Criteria" },
        ]}
      />

      {/* HEADER */}
      <section style={hero}>
        <h1 style={heroTitle}>Eligibility Criteria</h1>
        <div style={divider}></div>
        <p style={heroText}>
          Admission requirements for Intermediate and Associate Degree Programs.
        </p>
      </section>

      <div style={container}>
        {/* INTERMEDIATE */}
        <div style={section}>
          <h2 style={sectionTitle}>
            <GraduationCap size={22} /> Intermediate Program
          </h2>

          <p style={text}>
            Students who have <strong>passed the Matriculation Examination</strong>{" "}
            without any supply in any subject are eligible to apply for
            admission to the Intermediate programs offered by the college.
          </p>
        </div>

        {/* ADP */}
        <div style={section}>
          <h2 style={sectionTitle}>
            <BookOpen size={22} /> Associate Degree Program (ADP)
          </h2>

          <p style={infoText}>
            Admissions to ADP classes are conducted according to the schedule
            announced in national newspapers and official college notices.
            Each department may have its own subject requirements.
          </p>

          <div style={grid}>
            {departments.map((dept, index) => (
              <div key={index} style={deptCard}>
                Department of {dept}
              </div>
            ))}
          </div>
        </div>

        {/* NOTE */}
        <div style={noteBox}>
          <strong>Note:</strong> Final eligibility depends on the marks obtained
          in relevant subjects according to the Punjab Government merit policy.
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
  padding: "25px",
  border: "1px solid #eee",
  borderRadius: "8px",
};

const sectionTitle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#1a237e",
  marginBottom: "15px",
};

const text = {
  fontSize: "16px",
  color: "#444",
  lineHeight: "1.7",
};

const infoText = {
  fontSize: "15px",
  color: "#666",
  marginBottom: "20px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "12px",
};

const deptCard = {
  padding: "14px",
  border: "1px solid #eee",
  borderLeft: "4px solid #1a237e",
  borderRadius: "6px",
  background: "#f8f9ff",
  fontSize: "14px",
};

const noteBox = {
  marginTop: "30px",
  padding: "20px",
  background: "#f0f2ff",
  borderLeft: "5px solid #1a237e",
  borderRadius: "6px",
  fontSize: "14px",
  color: "#444",
};

export default EligibilityCriteria;