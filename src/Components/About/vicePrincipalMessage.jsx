import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const VicePrincipalMessage = () => {
  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "About Us", path: "/about" },
          { name: "Vice Principal's Message" }
        ]}
      />

      {/* HERO HEADER */}
      <section style={heroSection}>
        <div style={heroContainer}>
          <h1 style={heroTitle}>Vice Principal's Message</h1>
          <p style={heroSubtitle}>
            Government Associate College for Women, Chung
          </p>
          <div style={divider}></div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div style={container}>
        <div style={contentWrapper}>

          {/* LEFT SIDE */}
          <div style={profileSection}>
            <div style={photoBox}>
              <img
                src="/vice-principal.jpeg"
                alt="Vice Principal"
                style={profileImage}
              />
            </div>

            <div style={profileInfo}>
              <h2 style={profileName}>Dr. Fozia Tabassum Cheema</h2>
              <p style={designation}>Vice Principal</p>
              <p style={department}>
                Associate Professor (Health & Physical Education)
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div style={messageSection}>
            <h2 style={messageHeading}>Message</h2>

            <p style={paragraph}>
              It is an honor to serve as Vice Principal of Government
              Associate College for Women, Chung. Our institution is
              dedicated to fostering academic excellence and providing
              students with opportunities to grow intellectually and
              morally.
            </p>

            <p style={paragraph}>
              We strive to maintain a supportive learning environment
              where students are encouraged to develop confidence,
              leadership, and a strong sense of responsibility.
              Our faculty works tirelessly to guide students toward
              achieving their educational and professional goals.
            </p>

            <p style={paragraph}>
              Education plays a crucial role in shaping the future of
              our society. Through dedication, discipline, and teamwork,
              we aim to empower our students to become capable,
              responsible, and successful individuals.
            </p>

            <div style={signatureBox}>
              <p style={signatureName}>Dr. Fozia Tabassum Cheema</p>
              <p style={signatureTitle}>
                Vice Principal, Government Associate College for Women, Chung
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

/* STYLES */

const wrapper = {
  width: "100%",
  background: "#fff",
  minHeight: "100vh"
};

const heroSection = {
  background: "#1a237e",
  color: "white",
  padding: "70px 20px"
};

const heroContainer = {
  maxWidth: "1200px",
  margin: "0 auto"
};

const heroTitle = {
  fontSize: "42px",
  fontWeight: "800",
  marginBottom: "10px"
};

const heroSubtitle = {
  fontSize: "18px",
  opacity: "0.9"
};

const divider = {
  width: "60px",
  height: "4px",
  background: "white",
  marginTop: "20px"
};

const container = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "60px 20px"
};

const contentWrapper = {
  display: "flex",
  flexWrap: "wrap",
  gap: "50px",
  alignItems: "flex-start"
};

const profileSection = {
  flex: "0 0 320px"
};

const photoBox = {
  width: "100%",
  height: "380px",
  borderRadius: "12px",
  border: "1px solid #eee",
  overflow: "hidden"
};

const profileImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover"
};

const profileInfo = {
  marginTop: "20px"
};

const profileName = {
  color: "#1a237e",
  marginBottom: "5px"
};

const designation = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#444"
};

const department = {
  color: "#777"
};

const messageSection = {
  flex: "1",
  minWidth: "320px"
};

const messageHeading = {
  color: "#1a237e",
  fontSize: "28px",
  marginBottom: "20px",
  borderBottom: "2px solid #eee",
  paddingBottom: "10px"
};

const paragraph = {
  fontSize: "17px",
  lineHeight: "1.9",
  color: "#444",
  marginBottom: "18px",
  textAlign: "justify"
};

const signatureBox = {
  marginTop: "40px",
  borderTop: "1px solid #eee",
  paddingTop: "20px"
};

const signatureName = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#1a237e",
  marginBottom: "3px"
};

const signatureTitle = {
  color: "#666"
};

export default VicePrincipalMessage;