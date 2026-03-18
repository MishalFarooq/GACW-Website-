import React from "react";
import buildingImg from "../../assets/college-gate.jpeg";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const History = () => {
  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[{ name: "About Us", path: "/about" }, { name: "History" }]}
      />

      {/* HERO HEADER */}
      <section style={heroSection}>
        <div style={heroOverlay}>
          <h1 style={heroTitle}>Our History</h1>
          <div style={divider}></div>
          <p style={heroSubtitle}>
            A journey dedicated to empowering women through education and
            academic excellence.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div style={container}>
        {/* FOUNDATION SECTION */}
        <section style={foundationSection}>
          <div style={foundationText}>
            <h2 style={sectionHeading}>The Foundation</h2>

            <p style={paragraph}>
              Government Associate College for Women, Chung was established
              with the vision of providing accessible and high-quality
              education to the young women of this region. From its earliest
              days, the institution has focused on creating an environment
              where students can grow intellectually, socially, and morally.
            </p>

            <p style={paragraph}>
              Through dedicated faculty, structured academic programs, and
              a disciplined learning culture, the college has steadily
              evolved into an institution that supports women in achieving
              academic excellence and professional success.
            </p>
          </div>

          <div style={imageContainer}>
            <img
              src={buildingImg}
              alt="College Building"
              style={buildingImage}
            />
          </div>
        </section>

        {/* JOURNEY SECTION */}
        <section style={journeySection}>
          <h2 style={sectionHeadingCenter}>Journey of Excellence</h2>

          <div style={timelineGrid}>
            <div style={card}>
              <h3 style={cardTitle}>Early Years</h3>
              <p style={cardText}>
                The college began with limited classrooms and a small faculty,
                focusing primarily on foundational arts and science subjects to
                establish strong academic standards.
              </p>
            </div>

            <div style={card}>
              <h3 style={cardTitle}>Academic Growth</h3>
              <p style={cardText}>
                Over time the institution expanded its departments, introduced
                modern teaching resources, and improved facilities to meet the
                needs of a growing student body.
              </p>
            </div>

            <div style={card}>
              <h3 style={cardTitle}>Modern Era</h3>
              <p style={cardText}>
                Today the college stands as a respected institution known for
                its disciplined academic environment, experienced faculty, and
                consistent student achievement.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

/* ---------------- STYLES ---------------- */

const wrapper = {
  width: "100%",
  background: "#ffffff",
  minHeight: "100vh",
};

const heroSection = {
  width: "100%",
  background: "#1a237e",
  padding: "90px 5%",
  textAlign: "center",
  color: "white",
};

const heroOverlay = {
  maxWidth: "900px",
  margin: "0 auto",
};

const heroTitle = {
  fontSize: "44px",
  fontWeight: "800",
  letterSpacing: "2px",
  textTransform: "uppercase",
};

const heroSubtitle = {
  marginTop: "10px",
  opacity: "0.9",
  fontSize: "18px",
};

const divider = {
  width: "70px",
  height: "4px",
  background: "white",
  margin: "18px auto",
};

const container = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "70px 20px",
};

/* FOUNDATION */

const foundationSection = {
  display: "flex",
  gap: "50px",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: "80px",
};

const foundationText = {
  flex: 1,
  minWidth: "320px",
};

const imageContainer = {
  flex: 1,
  minWidth: "320px",
};

const buildingImage = {
  width: "100%",
  height: "360px",
  objectFit: "cover",
  borderRadius: "14px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
};

const sectionHeading = {
  fontSize: "32px",
  color: "#1a237e",
  marginBottom: "20px",
  fontWeight: "700",
};

const paragraph = {
  fontSize: "17px",
  lineHeight: "1.8",
  color: "#444",
  marginBottom: "18px",
  textAlign: "justify",
};

/* JOURNEY */

const journeySection = {
  background: "#f8faff",
  padding: "60px 30px",
  borderRadius: "18px",
};

const sectionHeadingCenter = {
  textAlign: "center",
  fontSize: "32px",
  color: "#1a237e",
  marginBottom: "40px",
  fontWeight: "700",
};

const timelineGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
};

const card = {
  background: "#fff",
  padding: "30px",
  borderRadius: "14px",
  borderTop: "5px solid #1a237e",
  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  transition: "0.3s",
};

const cardTitle = {
  color: "#1a237e",
  fontSize: "20px",
  marginBottom: "12px",
  fontWeight: "700",
};

const cardText = {
  color: "#666",
  fontSize: "15px",
  lineHeight: "1.7",
};

export default History;