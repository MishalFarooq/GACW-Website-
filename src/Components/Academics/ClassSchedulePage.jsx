import React from "react";
import { Clock } from "lucide-react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const ClassSchedulePage = () => {
  const schedule = [
    { period: "1st Period", time: "08:30 AM - 09:15 AM" },
    { period: "2nd Period", time: "09:15 AM - 10:00 AM" },
    { period: "3rd Period", time: "10:00 AM - 10:45 AM" },
    { period: "Break Time", time: "10:45 AM - 11:15 AM", break: true },
    { period: "4th Period", time: "11:15 AM - 12:00 PM" },
    { period: "5th Period", time: "12:00 PM - 12:45 PM" },
    { period: "6th Period", time: "12:45 PM - 01:30 PM" },
    { period: "7th Period", time: "01:30 PM - 02:00 PM" },
  ];

  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "Academics", path: "/academics" },
          { name: "Class Schedule" },
        ]}
      />

      {/* HEADER */}
      <section style={hero}>
        <h1 style={heroTitle}>Class Schedule</h1>
        <div style={divider}></div>
        <p style={heroSubtitle}>Morning Session (08:30 AM – 02:00 PM)</p>
      </section>

      <div style={container}>
        <div style={tableWrapper}>
          <table style={table}>
            <thead>
              <tr style={headerRow}>
                <th style={th}>Period</th>
                <th style={th}>Time</th>
              </tr>
            </thead>

            <tbody>
              {schedule.map((item, index) => (
                <tr
                  key={index}
                  style={
                    item.break
                      ? breakRow
                      : index % 2
                      ? altRow
                      : normalRow
                  }
                >
                  <td style={td}>
                    <div style={periodCell}>
                      {item.break && <Clock size={16} />}
                      {item.period}
                    </div>
                  </td>

                  <td style={timeCell}>{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
  padding: "60px 20px",
};

const heroTitle = {
  fontSize: "36px",
  fontWeight: "800",
};

const heroSubtitle = {
  marginTop: "8px",
  opacity: "0.9",
};

const divider = {
  width: "60px",
  height: "4px",
  background: "white",
  margin: "18px auto",
};

const container = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "60px 20px",
};

const tableWrapper = {
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const headerRow = {
  background: "#1a237e",
  color: "white",
};

const th = {
  padding: "16px",
  textAlign: "left",
  fontSize: "14px",
  letterSpacing: "1px",
  textTransform: "uppercase",
};

const td = {
  padding: "14px 18px",
  borderBottom: "1px solid #eee",
};

const periodCell = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const timeCell = {
  color: "#1a237e",
  fontWeight: "600",
};

const normalRow = {
  background: "#fff",
};

const altRow = {
  background: "#f8faff",
};

const breakRow = {
  background: "#f4f4f4",
  fontWeight: "700",
};

export default ClassSchedulePage;