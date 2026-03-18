import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const RulesRegulations = () => {
  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "About Us", path: "/about" },
          { name: "Rules & Regulations" },
        ]}
      />

      {/* HEADER */}
      <section style={heroSection}>
        <h1 style={heroTitle}>Rules & Regulations</h1>
        <div style={divider}></div>
        <p style={heroSubtitle}>
          Government Associate College for Women, Chung, Lahore
        </p>
      </section>

      <div style={container}>
        {/* Mandatory Rules */}
        <div style={mandatoryBox}>
          <h3 style={mandatoryTitle}>Mandatory Requirements</h3>
          <ul style={mandatoryList}>
            <li>
              Students must strictly follow the college uniform policy. Entry
              without proper uniform is not permitted.
            </li>
            <li>
              A minimum of 75% attendance is mandatory for appearing in
              examinations.
            </li>
            <li>
              Mobile phones are strictly prohibited during lectures and within
              academic areas.
            </li>
          </ul>
        </div>

        {/* General Discipline */}
        <section style={section}>
          <h2 style={sectionTitle}>General Discipline</h2>

          <ul style={list}>
            <li>Students must maintain regularity and punctuality.</li>
            <li>Polite behavior and respectful communication are expected.</li>
            <li>Respect for teachers, staff, and fellow students is essential.</li>
            <li>Silence must be observed in corridors during lectures.</li>
            <li>
              Students must maintain cleanliness and avoid littering or
              damaging college property.
            </li>
            <li>
              Any action damaging the reputation or discipline of the college
              will result in strict action.
            </li>
          </ul>
        </section>

        {/* Campus Policies */}
        <section style={section}>
          <h2 style={sectionTitle}>Campus Policies</h2>

          <ul style={list}>
            <li>Visitors are not allowed inside the college premises.</li>

            <li>
              In emergency situations, students may leave only with permission
              from the Principal and verification by parents or guardians.
            </li>

            <li>
              Celebrating birthdays or gatherings in the parking area or campus
              is strictly prohibited.
            </li>

            <li>
              Cameras, video recording devices, or similar equipment are not
              allowed without official permission.
            </li>
          </ul>
        </section>

        {/* Disciplinary Authority */}
        <div style={noticeBox}>
          <p style={noticeText}>
            The College Disciplinary Committee reserves the right to inspect,
            review, and take action in matters related to discipline. The
            Principal may impose warnings, fines, suspension, or expulsion
            depending on the severity of the violation.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ---------- STYLES ---------- */

const wrapper = {
  width: "100%",
  background: "#fff",
  minHeight: "100vh",
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
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "60px 20px",
};

/* Mandatory */

const mandatoryBox = {
  background: "#fff4f4",
  padding: "25px",
  borderRadius: "10px",
  borderLeft: "6px solid #d32f2f",
  marginBottom: "40px",
};

const mandatoryTitle = {
  color: "#c62828",
  marginBottom: "12px",
};

const mandatoryList = {
  listStyle: "square",
  paddingLeft: "20px",
  lineHeight: "2",
  color: "#b71c1c",
  fontWeight: "600",
};

/* Sections */

const section = {
  marginBottom: "40px",
};

const sectionTitle = {
  color: "#1a237e",
  marginBottom: "10px",
  fontSize: "22px",
};

const list = {
  lineHeight: "2",
  color: "#333",
  paddingLeft: "20px",
  listStyle: "square",
};

/* Notice */

const noticeBox = {
  background: "#f8faff",
  padding: "25px",
  borderRadius: "10px",
  borderLeft: "5px solid #1a237e",
};

const noticeText = {
  fontStyle: "italic",
  color: "#555",
  lineHeight: "1.7",
};

export default RulesRegulations;