import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const AboutUsMain = () => {
  const links = [
    { title: "Why Us", path: "/about/why-us" },
    { title: "History", path: "/about/history" },
    { title: "Vision & Mission", path: "/about/vision-mission" },
    { title: "Principal's Message", path: "/about/principal-message" },
    { title: "Our Staff", path: "/about/staff" },
    { title: "Rules & Regulations", path: "/about/rules" },
  ];

  return (
    <div style={wrapper}>
      <Breadcrumbs links={[{ name: "About Us" }]} />

      <div style={container}>
        <h1 style={heading}>About Us</h1>

        <div style={grid}>
          {links.map((item, index) => (
            <Link key={index} to={item.path} style={card}>
              <span style={icon}>›</span>
              <span style={title}>{item.title}</span>
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
  background: "#fff",
  minHeight: "80vh",
};

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "40px 20px",
};

const heading = {
  fontSize: "32px",
  fontWeight: "700",
  color: "#1a237e",
  marginBottom: "30px",
  borderBottom: "2px solid #eee",
  paddingBottom: "10px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
};

const card = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "18px 20px",
  background: "#fff",
  borderRadius: "10px",
  border: "1px solid #eee",
  textDecoration: "none",
  transition: "0.3s",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
};

const icon = {
  fontSize: "22px",
  color: "#1a237e",
  fontWeight: "bold",
};

const title = {
  fontSize: "16px",
  color: "#333",
  fontWeight: "600",
};

export default AboutUsMain;