import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const AppProcessPage = () => {
  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "Admissions", path: "/admissions" },
          { name: "Application Process" },
        ]}
      />

      {/* Header */}
      <section style={hero}>
        <h1 style={heroTitle}>Application Process</h1>
        <div style={divider}></div>
        <p style={heroText}>
          Follow the steps below to apply for Intermediate and ADP programs at
          Government Associate College for Women, Chung.
        </p>
      </section>

      <div style={container}>
        {/* INTERMEDIATE */}
        <section style={section}>
          <h2 style={sectionTitle}>Intermediate Programs</h2>

          <h3 style={subTitle}>Selection Criteria</h3>
          <ul style={list}>
            <li>Separate admission forms must be submitted for each program.</li>
            <li>
              Sports quota admissions are available only for the F.A. program.
            </li>
            <li>
              A 2% quota is reserved for students with physical disabilities
              (official certificate required).
            </li>
          </ul>

          <h3 style={subTitle}>Required Documents</h3>
          <div style={grid}>
            <div style={docCard}>Matric Result Card (2 Copies)</div>
            <div style={docCard}>4 Passport Size Photos (Blue Background)</div>
            <div style={docCard}>Character Certificate (2 Copies)</div>
            <div style={docCard}>Father/Guardian CNIC (1 Copy)</div>
          </div>
        </section>

        {/* ADP */}
        <section style={section}>
          <h2 style={{ ...sectionTitle, color: "#b22222" }}>
            ADP (Associate Degree Program)
          </h2>

          <p style={infoText}>
            Admissions for ADP programs are conducted according to schedules
            announced in national newspapers and the official college notice
            board.
          </p>

          <h3 style={subTitle}>Selection Criteria</h3>
          <ul style={list}>
            <li>F.A., F.Sc., A-Level or Senior Cambridge students may apply.</li>
            <li>Minimum 60% marks required; age limit is under 22 years.</li>
            <li>
              English Literature and Fine Arts applicants must pass an aptitude
              test.
            </li>
          </ul>

          <h3 style={subTitle}>Required After Application</h3>
          <div style={grid}>
            <div style={docCard}>Student B-Form (4 Copies)</div>
            <div style={docCard}>Matric Certificate (4 Copies)</div>
            <div style={docCard}>F.A. / F.Sc Result Card (4 Copies)</div>
            <div style={docCard}>Student ID Card (4 Copies)</div>
          </div>
        </section>

        {/* NOTE */}
        <div style={noteBox}>
          <strong>Important Note:</strong> All departments are responsible for
          verifying admission documents. Any incorrect information or clerical
          mistake may result in cancellation of admission.
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
  marginBottom: "50px",
  padding: "25px",
  border: "1px solid #eee",
  borderRadius: "8px",
};

const sectionTitle = {
  fontSize: "24px",
  color: "#1a237e",
  marginBottom: "20px",
};

const subTitle = {
  fontSize: "18px",
  marginBottom: "10px",
  marginTop: "20px",
  color: "#444",
};

const list = {
  paddingLeft: "20px",
  lineHeight: "1.8",
  color: "#444",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "12px",
  marginTop: "15px",
};

const docCard = {
  padding: "14px",
  background: "#f8faff",
  borderLeft: "4px solid #1a237e",
  borderRadius: "6px",
  fontSize: "14px",
};

const infoText = {
  fontStyle: "italic",
  color: "#666",
};

const noteBox = {
  marginTop: "40px",
  padding: "20px",
  background: "#fff8e1",
  borderLeft: "5px solid #f0ad4e",
  borderRadius: "6px",
  color: "#856404",
};

export default AppProcessPage;