import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const VisionMission = () => {
  const missions = [
    {
      number: "01",
      title: "Academic Excellence",
      description:
        "Deliver quality education through structured academic programs that promote analytical thinking, innovation, and lifelong learning."
    },
    {
      number: "02",
      title: "Character Development",
      description:
        "Instill strong ethical and moral values that shape students into responsible, respectful, and disciplined members of society."
    },
    {
      number: "03",
      title: "Women Empowerment",
      description:
        "Empower young women through knowledge, leadership opportunities, and confidence-building activities that prepare them for professional success."
    },
    {
      number: "04",
      title: "Modern Learning Environment",
      description:
        "Provide modern facilities, digital learning resources, laboratories, and a supportive academic atmosphere."
    },
    {
      number: "05",
      title: "Community Engagement",
      description:
        "Encourage students to actively contribute to society through service, awareness, and leadership initiatives."
    },
    {
      number: "06",
      title: "Future Readiness",
      description:
        "Prepare students for higher education and professional careers by developing communication, leadership, and critical thinking skills."
    }
  ];

  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "About Us", path: "/about" },
          { name: "Vision & Mission" }
        ]}
      />

      {/* HERO HEADER */}
      <section style={heroSection}>
        <h1 style={heroTitle}>Vision & Mission</h1>
        <div style={divider}></div>
        <p style={heroSubtitle}>
          Our commitment to academic excellence, personal development, and the
          empowerment of women through education.
        </p>
      </section>

      {/* VISION SECTION */}
      <section style={visionSection}>
        <h2 style={sectionHeading}>Our Vision</h2>

        <p style={visionText}>
          “To be a leading institution of higher learning dedicated to
          empowering women through quality education, innovation, and
          leadership development. We aim to nurture confident, knowledgeable,
          and socially responsible individuals who contribute positively to
          society and the nation.”
        </p>
      </section>

      {/* MISSION SECTION */}
      <section style={missionSection}>
        <h2 style={sectionHeadingCenter}>Our Mission</h2>

        <div style={grid}>
          {missions.map((item, index) => (
            <div key={index} style={card}>
              <div style={numberCircle}>{item.number}</div>

              <h3 style={cardTitle}>{item.title}</h3>

              <p style={cardText}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ---------------- STYLES ---------------- */

const wrapper = {
  width: "100%",
  background: "#fff",
  minHeight: "100vh"
};

/* HERO */

const heroSection = {
  background: "#1a237e",
  color: "white",
  textAlign: "center",
  padding: "90px 20px"
};

const heroTitle = {
  fontSize: "44px",
  fontWeight: "800",
  letterSpacing: "2px",
  textTransform: "uppercase"
};

const heroSubtitle = {
  marginTop: "10px",
  fontSize: "18px",
  opacity: "0.9",
  maxWidth: "800px",
  marginInline: "auto"
};

const divider = {
  width: "70px",
  height: "4px",
  background: "white",
  margin: "20px auto"
};

/* VISION */

const visionSection = {
  padding: "80px 20px",
  textAlign: "center",
  maxWidth: "900px",
  margin: "0 auto"
};

const sectionHeading = {
  fontSize: "32px",
  color: "#1a237e",
  marginBottom: "20px",
  fontWeight: "700"
};

const visionText = {
  fontSize: "22px",
  lineHeight: "1.7",
  color: "#555",
  fontStyle: "italic"
};

/* MISSION */

const missionSection = {
  background: "#f8faff",
  padding: "70px 20px"
};

const sectionHeadingCenter = {
  textAlign: "center",
  fontSize: "32px",
  color: "#1a237e",
  marginBottom: "50px",
  fontWeight: "700"
};

const grid = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "25px"
};

const card = {
  background: "#fff",
  padding: "35px 28px",
  borderRadius: "14px",
  textAlign: "center",
  borderTop: "4px solid #1a237e",
  boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
  transition: "0.3s"
};

const numberCircle = {
  width: "55px",
  height: "55px",
  borderRadius: "50%",
  border: "2px solid #1a237e",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 18px",
  color: "#1a237e",
  fontWeight: "700",
  fontSize: "18px"
};

const cardTitle = {
  color: "#1a237e",
  fontSize: "20px",
  marginBottom: "12px",
  fontWeight: "700"
};

const cardText = {
  color: "#666",
  fontSize: "15px",
  lineHeight: "1.7"
};

export default VisionMission;