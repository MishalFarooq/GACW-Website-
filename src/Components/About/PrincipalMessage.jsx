import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const PrincipalMessage = () => {
  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "About Us", path: "/about" },
          { name: "Principal's Message" }
        ]}
      />

      {/* HERO HEADER */}
      <section style={heroSection}>
        <div style={heroContainer}>
          <h1 style={heroTitle}>Principal's Message</h1>
          <p style={heroSubtitle}>
            Government Associate College for Women, Chung
          </p>
          <div style={divider}></div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div style={container}>
        <div style={contentWrapper}>

          {/* LEFT SIDE – PHOTO + INFO */}
          <div style={profileSection}>
            <div style={photoBox}>
              <img
                src="/principle.jpeg"
                alt="Principal Dr. Rehana Anjum"
                style={principalImage}
              />
            </div>

            <div style={profileInfo}>
              <h2 style={principalName}>Dr. Rehana Anjum</h2>
              <p style={designation}>Principal</p>
              <p style={department}>
                Associate Professor (Islamiyat)
              </p>
            </div>
          </div>

          {/* RIGHT SIDE – MESSAGE */}
          <div style={messageSection}>
            <h2 style={messageHeading}>Welcome Message</h2>

            <p style={paragraph}>
              It is my privilege to welcome you to Government Associate
              College for Women, Chung. Our institution is committed to
              providing a nurturing academic environment where young women
              are empowered through knowledge, discipline, and ethical values.
            </p>

            <p style={paragraph}>
              At GACW Chung, we believe that education is not only about
              acquiring knowledge but also about developing character,
              confidence, and leadership qualities. Our dedicated faculty
              strives to guide students in achieving academic excellence
              while encouraging creativity, critical thinking, and personal
              growth.
            </p>

            <p style={paragraph}>
              As an educator and Associate Professor of Islamiyat, I strongly
              believe that true education is the harmony of modern knowledge
              and strong moral values. We aim to prepare our students not
              only for higher education but also to become responsible and
              productive members of society.
            </p>

            <p style={paragraph}>
              I warmly invite students and parents to become part of this
              institution and join us in the journey of learning,
              self-discovery, and success.
            </p>

            <div style={signatureBox}>
              <p style={signatureName}>Dr. Rehana Anjum</p>
              <p style={signatureTitle}>
                Principal, Government Associate College for Women, Chung
              </p>
            </div>
          </div>

        </div>
      </div>
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

/* MAIN */

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

/* PROFILE */

const profileSection = {
  flex: "0 0 320px"
};

const photoBox = {
  width: "100%",
  height: "380px",
  background: "#f5f5f5",
  borderRadius: "12px",
  border: "1px solid #eee",
  overflow: "hidden"
};

const principalImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover"
};

const profileInfo = {
  marginTop: "20px"
};

const principalName = {
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

/* MESSAGE */

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

export default PrincipalMessage;