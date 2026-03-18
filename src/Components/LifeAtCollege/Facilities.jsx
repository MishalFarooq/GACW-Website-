import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import {
  BookOpen,
  Monitor,
  Moon,
  PlusSquare,
  Bus,
  Coffee,
  Droplets,
} from "lucide-react";

const Facilities = () => {
  const facilitiesData = [
    {
      title: "Library",
      icon: <BookOpen size={30} />,
      desc: "A well-stocked library with academic and reference books. Students can borrow books using their library cards and access a quiet reading room for study.",
    },
    {
      title: "Computer Lab",
      icon: <Monitor size={30} />,
      desc: "Modern computer laboratory for teaching computer skills, research work, and digital learning activities.",
    },
    {
      title: "Masjid",
      icon: <Moon size={30} />,
      desc: "A beautiful masjid inside the campus allowing students and staff to perform daily prayers conveniently.",
    },
    {
      title: "Dispensary",
      icon: <PlusSquare size={30} />,
      desc: "A basic health facility with first-aid equipment. An MBBS doctor visits periodically for consultation.",
    },
    {
      title: "Transportation",
      icon: <Bus size={30} />,
      desc: "Transport facility available on selected routes for students. Passes are issued by the Transport Office.",
    },
    {
      title: "Canteen",
      icon: <Coffee size={30} />,
      desc: "Hygienic and fresh food available at affordable prices for students, teachers, and staff.",
    },
    {
      title: "Water Filtration",
      icon: <Droplets size={30} />,
      desc: "Water filtration plants installed on campus to provide clean and safe drinking water.",
    },
  ];

  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "Life at College", path: "/life-at-college" },
          { name: "Facilities" },
        ]}
      />

      {/* HEADER */}
      <section style={hero}>
        <h1 style={heroTitle}>Campus Facilities</h1>
        <div style={divider}></div>
        <p style={heroText}>
          Our college provides modern facilities to support academic learning
          and student well-being.
        </p>
      </section>

      <div style={container}>
        <div style={grid}>
          {facilitiesData.map((item, index) => (
            <div key={index} style={card}>
              <div style={iconBox}>{item.icon}</div>
              <h3 style={title}>{item.title}</h3>
              <p style={desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------- STYLES ---------- */

const wrapper = {
  width: "100%",
  minHeight: "100vh",
  background: "#f9f9f9",
};

const hero = {
  background: "#1a237e",
  color: "white",
  textAlign: "center",
  padding: "70px 20px",
};

const heroTitle = {
  fontSize: "36px",
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
  gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
  gap: "25px",
};

const card = {
  background: "#fff",
  padding: "25px",
  borderRadius: "10px",
  border: "1px solid #eee",
  boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
};

const iconBox = {
  width: "55px",
  height: "55px",
  background: "#f0f2ff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#1a237e",
  marginBottom: "15px",
};

const title = {
  fontSize: "18px",
  color: "#1a237e",
  marginBottom: "8px",
};

const desc = {
  fontSize: "14px",
  color: "#555",
  lineHeight: "1.6",
};

export default Facilities;