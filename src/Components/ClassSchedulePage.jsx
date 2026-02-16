import React from "react";

const ClassSchedulePage = () => {
  return (
    <div style={pageContainer}>
      <h2 style={headingStyle}>Class Schedule</h2>
      <div style={tableWrapper}>
        <table style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: "#1a237e", color: "white" }}>
              <th style={thStyle}>Section</th>
              <th style={thStyle}>Monday - Thursday</th>
              <th style={thStyle}>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>1st Year (Pre-Med)</td>
              <td style={tdStyle}>08:30 AM - 01:30 PM</td>
              <td style={tdStyle}>08:30 AM - 12:00 PM</td>
            </tr>
            <tr>
              <td style={tdStyle}>2nd Year (ICS)</td>
              <td style={tdStyle}>08:30 AM - 01:30 PM</td>
              <td style={tdStyle}>08:30 AM - 12:00 PM</td>
            </tr>
            <tr>
              <td style={tdStyle}>ADP Programs</td>
              <td style={tdStyle}>09:00 AM - 02:00 PM</td>
              <td style={tdStyle}>09:00 AM - 12:30 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const pageContainer = {
  padding: "120px 40px",
  minHeight: "100vh",
  maxWidth: "1000px",
  margin: "0 auto",
};
const headingStyle = {
  color: "#1a237e",
  textTransform: "uppercase",
  borderLeft: "5px solid #ffd54f",
  paddingLeft: "15px",
  fontSize: "24px",
};
const tableWrapper = {
  marginTop: "30px",
  overflowX: "auto",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  borderRadius: "10px",
};
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  background: "white",
};
const thStyle = { padding: "15px", textAlign: "left", fontSize: "14px" };
const tdStyle = {
  padding: "15px",
  borderBottom: "1px solid #eee",
  fontSize: "14px",
};

export default ClassSchedulePage;
