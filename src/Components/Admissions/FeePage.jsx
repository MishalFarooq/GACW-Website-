import React from "react";
import { CreditCard } from "lucide-react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const FeePage = () => {
  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "Admissions", path: "/admissions" },
          { name: "Fee Structure" },
        ]}
      />

      {/* Header */}
      <section style={hero}>
        <h1 style={heroTitle}>Fee Structure</h1>
        <div style={divider}></div>
        <p style={heroText}>
          Details of admission and academic fees for Intermediate and BS
          programs.
        </p>
      </section>

      <div style={container}>
        {/* BS Program */}
        <section style={section}>
          <h2 style={sectionTitle}>
            <CreditCard size={20} /> ADP Degree Program
          </h2>
          <p style={note}>(One-time payment for the entire program)</p>

          <div style={tableWrapper}>
            <table style={table}>
              <thead>
                <tr style={tableHead}>
                  <th style={th}>Details</th>
                  <th style={th}>Amount (Rs.)</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={td}>Admission Fee</td>
                  <td style={td}>175</td>
                </tr>
                <tr>
                  <td style={td}>Tuition Fee</td>
                  <td style={td}>360</td>
                </tr>
                <tr>
                  <td style={td}>General + Examination + Sports Fund</td>
                  <td style={td}>340</td>
                </tr>
                <tr>
                  <td style={td}>Medical / Red Crescent Fund</td>
                  <td style={td}>60</td>
                </tr>
                <tr>
                  <td style={td}>Registration / Affiliation / Exam Fee</td>
                  <td style={td}>2560</td>
                </tr>
                <tr>
                  <td style={td}>Welfare + ID Card Fund</td>
                  <td style={td}>100</td>
                </tr>
                <tr>
                  <td style={td}>Library Security (Refundable)</td>
                  <td style={td}>300</td>
                </tr>
                <tr>
                  <td style={td}>Computer Security (Refundable)</td>
                  <td style={td}>500</td>
                </tr>

                <tr style={totalRow}>
                  <td style={td}><strong>Total Approximate</strong></td>
                  <td style={td}><strong>4,400</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Intermediate */}
        <section style={section}>
          <h2 style={sectionTitle}>Intermediate (F.A / F.Sc / ICS / I.Com)</h2>

          <div style={tableWrapper}>
            <table style={table}>
              <thead>
                <tr style={tableHead}>
                  <th style={th}>Title of Account</th>
                  <th style={th}>Amount (Rs.)</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={td}>Admission Fee</td>
                  <td style={td}>65 / 80</td>
                </tr>
                <tr>
                  <td style={td}>Tuition Fee</td>
                  <td style={td}>600</td>
                </tr>
                <tr>
                  <td style={td}>General + Sports + Examination Fund</td>
                  <td style={td}>410</td>
                </tr>
                <tr>
                  <td style={td}>Registration + Processing + Affiliation</td>
                  <td style={td}>1435</td>
                </tr>
                <tr>
                  <td style={td}>Library Security</td>
                  <td style={td}>500</td>
                </tr>
                <tr>
                  <td style={td}>2nd Shift Additional Charges</td>
                  <td style={td}>3600</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Notes */}
        <div style={noteBox}>
          <h3 style={noteTitle}>Important Notes</h3>

          <ul style={list}>
            <li>Transport facility available at Rs.500 per month.</li>
            <li>
              Security deposits can be claimed within two academic years after
              completion.
            </li>
            <li>
              Government and University merit scholarships are applicable.
            </li>
            <li>
              Hafiza-e-Quran students receive full fee concession during
              F.A/F.Sc sessions.
            </li>
          </ul>
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
};

const sectionTitle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#1a237e",
  marginBottom: "10px",
};

const note = {
  fontSize: "13px",
  color: "#777",
};

const tableWrapper = {
  overflowX: "auto",
  marginTop: "15px",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const tableHead = {
  background: "#1a237e",
  color: "#fff",
};

const th = {
  padding: "12px",
  border: "1px solid #1a237e",
};

const td = {
  padding: "10px",
  border: "1px solid #eee",
};

const totalRow = {
  background: "#f7f7f7",
};

const noteBox = {
  marginTop: "40px",
  padding: "20px",
  background: "#f0f2ff",
  borderLeft: "5px solid #1a237e",
  borderRadius: "6px",
};

const noteTitle = {
  marginBottom: "10px",
  color: "#1a237e",
};

const list = {
  paddingLeft: "20px",
  lineHeight: "1.8",
};

export default FeePage;