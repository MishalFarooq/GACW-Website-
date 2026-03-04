import React from "react";
import { Link } from "react-router-dom";
// Breadcrumbs import path bilkul sahi hai
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const AdmissionsPage = () => {
  const admissionLinks = [
    { name: "Forms and Prospectus", path: "/admissions/forms" },
    { name: "Application Process", path: "/admissions/process" },
    { name: "Rules and Regulations", path: "/admissions/rules" },
    { name: "Fee Structure", path: "/admissions/fee" },
    { name: "Eligibility Criteria", path: "/admissions/eligibility" },
    { name: "Apply Online", path: "/admissions/apply" },
  ];

  return (
    <div style={pageWrapper}>
      {/* FIX: 'pageName' ki jagah 'links' array bheja hai.
         Yahan 'Home' nahi likha kyunki Breadcrumbs.jsx mein wo pehle se hai.
      */}
      <Breadcrumbs links={[{ name: "Admissions" }]} />

      <div style={contentArea}>
        <h1 style={headingStyle}>Admissions</h1>

        <ul style={listStyle}>
          {admissionLinks.map((item, index) => (
            <li key={index} style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <Link
                to={item.path}
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// --- STYLES (Wahi rahenge) ---
const pageWrapper = {
  width: "100%",
  minHeight: "80vh",
  backgroundColor: "#fff",
};

const contentArea = {
  padding: "40px 20px",
  width: "100%",
};

const headingStyle = {
  fontSize: "30px",
  color: "#333",
  borderBottom: "1px solid #eee",
  paddingBottom: "10px",
  marginBottom: "25px",
  fontWeight: "500",
  width: "100%",
};

const listStyle = { listStyle: "none", padding: 0 };

const listItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
};

const bulletStyle = { color: "#1a237e", fontSize: "22px", marginRight: "12px" };

const linkStyle = {
  color: "#1a237e",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500",
  transition: "0.3s",
};

export default AdmissionsPage;
