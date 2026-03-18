import React from "react";
import { Link } from "react-router-dom";
import { Building2, Calendar, Bell, Image } from "lucide-react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const LifeAtCollegeMain = () => {
  const items = [
    {
      name: "Facilities",
      path: "/life-at-college/facilities",
      icon: <Building2 size={26} />,
      desc: "Explore campus facilities and student services.",
    },
    {
      name: "Events",
      path: "/life-at-college/events",
      icon: <Calendar size={26} />,
      desc: "View upcoming and past college events.",
    },
    {
      name: "Notice Board",
      path: "/life-at-college/all-notices",
      icon: <Bell size={26} />,
      desc: "Latest announcements and official notices.",
    },
    {
      name: "Gallery",
      path: "/life-at-college/gallery",
      icon: <Image size={26} />,
      desc: "Photos from activities and college life.",
    },
  ];

  return (
    <div style={wrapper}>
      <Breadcrumbs links={[{ name: "Life at College" }]} />

      {/* Header */}
      <section style={hero}>
        <h1 style={heroTitle}>Life at College</h1>
        <div style={divider}></div>
        <p style={heroText}>
          Discover campus life, events, facilities, and activities that enrich
          student experience.
        </p>
      </section>

      <div style={container}>
        <div style={grid}>
          {items.map((item, index) => (
            <Link key={index} to={item.path} style={card}>
              <div style={iconBox}>{item.icon}</div>
              <h3 style={cardTitle}>{item.name}</h3>
              <p style={cardDesc}>{item.desc}</p>
              <span style={cardLink}>Explore →</span>
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

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "20px",
};

const card = {
  background: "#fff",
  padding: "30px",
  borderRadius: "12px",
  borderTop: "4px solid #1a237e",
  textDecoration: "none",
  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  transition: "0.3s",
};

const iconBox = {
  color: "#1a237e",
};

const cardTitle = {
  fontSize: "18px",
  color: "#1a237e",
  margin: 0,
};

const cardDesc = {
  fontSize: "14px",
  color: "#666",
  lineHeight: "1.6",
};

const cardLink = {
  marginTop: "10px",
  color: "#1a237e",
  fontWeight: "600",
  fontSize: "14px",
};

export default LifeAtCollegeMain;