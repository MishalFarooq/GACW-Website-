import React from "react";
// Breadcrumbs import kiya
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const VisionMission = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "0",
        margin: "0",
        backgroundColor: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* Breadcrumbs Section */}
      <Breadcrumbs
        links={[
          { name: "About Us", path: "/about" },
          { name: "Vision & Mission" },
        ]}
      />

      {/* Header Section - Modern Dark Blue */}
      <div
        style={{
          backgroundColor: "#1a237e",
          color: "white",
          padding: "80px 5%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "42px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Vision & Mission
        </h1>
        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#fff",
            margin: "20px auto",
          }}
        ></div>
      </div>

      {/* Vision Section - Minimalist */}
      <div style={{ width: "100%", padding: "80px 5%", textAlign: "center" }}>
        <h2
          style={{ color: "#1a237e", fontSize: "32px", marginBottom: "20px" }}
        >
          Our Vision
        </h2>
        <p
          style={{
            fontSize: "24px",
            lineHeight: "1.6",
            color: "#555",
            maxWidth: "900px",
            margin: "0 auto",
            fontStyle: "italic",
            fontWeight: "300",
          }}
        >
          "To be a premier institution of learning that empowers women through
          holistic education, fostering a generation of confident and
          intellectually vibrant individuals."
        </p>
      </div>

      {/* Mission Section - Pyary Cards Design */}
      <div
        style={{ width: "100%", padding: "40px 0", backgroundColor: "#fdfdfd" }}
      >
        <h2
          style={{
            color: "#1a237e",
            fontSize: "32px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Our Mission
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            width: "100%",
            gap: "20px",
            padding: "0 20px",
          }}
        >
          {/* Card 1 */}
          <div style={pyaraCardStyle}>
            <div style={iconCircle}>01</div>
            <h3 style={cardHeading}>Academic Excellence</h3>
            <p style={cardText}>
              Providing high-quality education that encourages critical thinking
              and lifelong learning.
            </p>
          </div>

          {/* Card 2 */}
          <div style={pyaraCardStyle}>
            <div style={iconCircle}>02</div>
            <h3 style={cardHeading}>Character Building</h3>
            <p style={cardText}>
              Instilling strong moral and Islamic values to grow responsible
              citizens.
            </p>
          </div>

          {/* Card 3 */}
          <div style={pyaraCardStyle}>
            <div style={iconCircle}>03</div>
            <h3 style={cardHeading}>Empowerment</h3>
            <p style={cardText}>
              Equipping young women with skills and confidence for their
              professional careers.
            </p>
          </div>

          {/* Card 4 */}
          <div style={pyaraCardStyle}>
            <div style={iconCircle}>04</div>
            <h3 style={cardHeading}>Social Responsibility</h3>
            <p style={cardText}>
              Encouraging students to contribute positively to the development
              of the nation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Styles (Unchanged) ---
const pyaraCardStyle = {
  backgroundColor: "#fff",
  padding: "40px 30px",
  borderRadius: "15px",
  textAlign: "center",
  border: "1px solid #eee",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  transition: "transform 0.3s ease",
  cursor: "default",
};

const iconCircle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "#f0f2f5",
  color: "#1a237e",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 20px",
  fontWeight: "bold",
  fontSize: "18px",
  border: "1px solid #1a237e",
};

const cardHeading = {
  color: "#1a237e",
  fontSize: "22px",
  marginBottom: "15px",
};

const cardText = {
  color: "#666",
  lineHeight: "1.6",
  fontSize: "16px",
};

export default VisionMission;
