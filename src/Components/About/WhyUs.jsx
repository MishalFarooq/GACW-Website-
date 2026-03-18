import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const WhyUs = () => {
  const features = [
    {
      title: "Academic Excellence",
      description:
        "Our college provides a strong academic foundation through well-structured programs in arts and sciences. Students are guided to develop critical thinking, analytical skills, and academic confidence."
    },
    {
      title: "Highly Qualified Faculty",
      description:
        "Our experienced and dedicated teachers play a vital role in shaping students’ intellectual growth and personal development through mentorship and quality instruction."
    },
    {
      title: "Safe & Supportive Environment",
      description:
        "We provide a disciplined and secure campus environment designed specifically for women, ensuring students can focus on learning and personal growth."
    },
    {
      title: "Modern Learning Facilities",
      description:
        "The college offers well-equipped laboratories, a comprehensive library, and modern learning resources that support both academic and research activities."
    },
    {
      title: "Character Building & Leadership",
      description:
        "We encourage students to participate in academic societies, cultural activities, and leadership programs that help build confidence and professional skills."
    },
    {
      title: "Opportunities for Growth",
      description:
        "Through seminars, workshops, academic competitions, and extracurricular activities, students gain exposure that prepares them for higher education and future careers."
    }
  ];

  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[{ name: "About Us", path: "/about" }, { name: "Why Us" }]}
      />

      {/* Header */}
      <section style={heroSection}>
        <h1 style={heroTitle}>Why Choose GACW Chung</h1>
        <div style={divider}></div>
        <p style={heroText}>
          Government Associate College for Women, Chung is dedicated to
          providing quality education and empowering young women to become
          confident, capable, and responsible members of society.
        </p>
      </section>

      {/* Content */}
      <div style={container}>
        <p style={introText}>
          Choosing the right college is one of the most important decisions in
          a student’s life. At Government Associate College for Women, Chung,
          we strive to create an educational environment that nurtures
          academic excellence, personal development, and ethical values.
          Our institution focuses on building strong foundations that prepare
          students for higher education and professional success.
        </p>

        <div style={grid}>
          {features.map((item, index) => (
            <div key={index} style={card}>
              <h3 style={cardTitle}>{item.title}</h3>
              <p style={cardText}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- STYLES ---------------- */

const wrapper = {
  width: "100%",
  background: "#fff",
  minHeight: "80vh"
};

const heroSection = {
  textAlign: "center",
  padding: "70px 20px",
  background: "#f8faff"
};

const heroTitle = {
  fontSize: "38px",
  color: "#1a237e",
  fontWeight: "700"
};

const heroText = {
  maxWidth: "800px",
  margin: "15px auto",
  fontSize: "17px",
  color: "#555",
  lineHeight: "1.8"
};

const divider = {
  width: "70px",
  height: "4px",
  background: "#1a237e",
  margin: "18px auto"
};

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "60px 20px"
};

const introText = {
  fontSize: "17px",
  color: "#444",
  lineHeight: "1.8",
  marginBottom: "40px",
  textAlign: "center"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "25px"
};

const card = {
  background: "#fff",
  padding: "28px",
  borderRadius: "12px",
  borderTop: "4px solid #1a237e",
  boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
  transition: "0.3s"
};

const cardTitle = {
  color: "#1a237e",
  marginBottom: "12px",
  fontSize: "19px",
  fontWeight: "700"
};

const cardText = {
  color: "#666",
  fontSize: "15px",
  lineHeight: "1.7"
};

export default WhyUs;