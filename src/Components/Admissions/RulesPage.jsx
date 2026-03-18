import React from "react";
import { ShieldAlert, ClipboardList, UserCheck, AlertTriangle } from "lucide-react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const RulesPage = () => {
  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "Admissions", path: "/admissions" },
          { name: "Rules & Regulations" },
        ]}
      />

      {/* HEADER */}
      <section style={hero}>
        <h1 style={heroTitle}>Rules & Regulations</h1>
        <div style={divider}></div>
        <p style={heroText}>
          Students must follow college discipline and regulations to maintain
          academic excellence and a safe learning environment.
        </p>
      </section>

      <div style={container}>
        {/* Attendance */}
        <div style={section}>
          <h2 style={sectionTitle}>
            <ClipboardList size={22} /> Attendance
          </h2>

          <ul style={list}>
            <li>Minimum <strong>75% attendance</strong> required for exams.</li>
            <li>Maximum of <strong>5 days leave</strong> allowed per month.</li>
            <li>
              Absence for <strong>10 consecutive days</strong> may lead to name
              removal from college rolls.
            </li>
          </ul>
        </div>

        {/* Discipline */}
        <div style={section}>
          <h2 style={sectionTitle}>
            <ShieldAlert size={22} /> Discipline & Fines
          </h2>

          <div style={tableWrapper}>
            <table style={table}>
              <thead>
                <tr style={tableHead}>
                  <th style={th}>Violation</th>
                  <th style={th}>Fine</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={td}>Incomplete Uniform</td>
                  <td style={td}>Rs.100</td>
                </tr>
                <tr>
                  <td style={td}>Without Uniform</td>
                  <td style={td}>Rs.150</td>
                </tr>
                <tr>
                  <td style={td}>Discipline Breach</td>
                  <td style={td}>Rs.200 - Rs.1000</td>
                </tr>
                <tr>
                  <td style={td}>Mobile / Camera / Tape Recorder</td>
                  <td style={td}>Rs.1000 + Confiscation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={note}>
            Confiscated items will only be returned after a written request from
            parents.
          </p>
        </div>

        {/* Leave */}
        <div style={section}>
          <h2 style={sectionTitle}>
            <UserCheck size={22} /> Leave Application
          </h2>

          <div style={grid}>
            <div style={card}>Up to 5 days → Subject Teacher</div>
            <div style={card}>Up to 15 days → Leave Incharge</div>
            <div style={card}>Long leave → Vice Principal</div>
            <div style={card}>Illness (6+ days) → Medical Certificate</div>
          </div>

          <p style={info}>
            Infectious disease cases require an immunity certificate before
            rejoining.
          </p>
        </div>

        {/* Uniform */}
        <div style={section}>
          <h2 style={sectionTitle}>Uniform Specifications</h2>

          <div style={grid}>
            <div style={card}>
              White wash-n-wear shirt, knee length, full sleeves, coat collar,
              white dupatta.
            </div>

            <div style={card}>
              <strong>1st Shift:</strong> Checked patti inside border/slits.
            </div>

            <div style={card}>
              <strong>2nd Shift:</strong> Checked patti outside slits.
            </div>

            <div style={card}>
              Black shoes/joggers with black socks. Open slippers not allowed.
            </div>
          </div>

          <div style={warning}>
            <AlertTriangle size={18} />
            Make-up and jewelry are strictly prohibited. Abayas must be kept in
            the designated room.
          </div>
        </div>

        {/* ID Card */}
        <div style={section}>
          <h2 style={sectionTitle}>College Identity Card</h2>

          <p style={text}>
            Every student must wear her ID card during college hours. In case of
            loss, a duplicate card will be issued after payment of a double fee.
          </p>
        </div>

        {/* Parent Meeting */}
        <div style={meetingBox}>
          Parent-Teacher meetings are held twice each year after December Tests
          and Promotion Exams.
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

const list = {
  paddingLeft: "20px",
  lineHeight: "1.8",
  color: "#444",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: "12px",
};

const card = {
  padding: "15px",
  background: "#f8f9ff",
  borderLeft: "4px solid #1a237e",
  borderRadius: "6px",
};

const tableWrapper = { overflowX: "auto" };

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const tableHead = {
  background: "#f4f6ff",
};

const th = {
  padding: "12px",
  border: "1px solid #eee",
  color: "#1a237e",
};

const td = {
  padding: "12px",
  border: "1px solid #eee",
};

const note = {
  marginTop: "10px",
  fontSize: "13px",
  color: "#777",
};

const info = {
  marginTop: "10px",
  fontSize: "13px",
  color: "#555",
};

const text = {
  color: "#444",
  lineHeight: "1.6",
};

const warning = {
  marginTop: "15px",
  padding: "12px",
  background: "#fff5f5",
  borderLeft: "5px solid #e53e3e",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#c53030",
};

const meetingBox = {
  padding: "20px",
  background: "#e8eaf6",
  color: "#1a237e",
  fontWeight: "600",
  borderRadius: "6px",
};

export default RulesPage;