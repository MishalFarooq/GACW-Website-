import React from "react";
import buildingImg from "../../assets/college-gate.jpeg";
// Breadcrumbs import
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const History = () => {
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
      {/* Breadcrumbs Section - Header se pehle */}
      <Breadcrumbs
        links={[{ name: "About Us", path: "/about" }, { name: "History" }]}
      />

      {/* Header Section */}
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
          Our History
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

      {/* Main Content Area */}
      <div style={{ width: "100%", padding: "60px 5%" }}>
        {/* Foundation Section */}
        <div
          style={{
            display: "flex",
            gap: "50px",
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h2
              style={{
                color: "#1a237e",
                fontSize: "32px",
                marginBottom: "20px",
              }}
            >
              The Foundation
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#444",
                textAlign: "justify",
              }}
            >
              Government Associate College for Women, Chung was established with
              the noble vision of providing accessible and quality education to
              the young women of this region. Since its inception, the college
              has served as a beacon of light, empowering students with the
              knowledge and skills necessary to navigate the challenges of the
              modern world.
            </p>
          </div>
          {/* Building Photo Section */}
          <div style={{ flex: "1", minWidth: "300px" }}>
            <img
              src={buildingImg}
              alt="College Building"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        </div>

        {/* Growth & Evolution Cards */}
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "60px 20px",
            borderRadius: "20px",
            width: "100%",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#1a237e",
              marginBottom: "40px",
            }}
          >
            Journey of Excellence
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {/* Phase 1 */}
            <div style={historyCardStyle}>
              <h3 style={{ color: "#1a237e" }}>Early Years</h3>
              <p style={{ color: "#666" }}>
                Started with a few classrooms and a dedicated faculty, focusing
                on basic arts and science subjects to build a strong foundation
                for female education.
              </p>
            </div>

            {/* Phase 2 */}
            <div style={historyCardStyle}>
              <h3 style={{ color: "#1a237e" }}>Academic Growth</h3>
              <p style={{ color: "#666" }}>
                Over the years, the college expanded its curriculum, introducing
                new departments and state-of-the-art facilities to keep up with
                academic standards.
              </p>
            </div>

            {/* Phase 3 */}
            <div style={historyCardStyle}>
              <h3 style={{ color: "#1a237e" }}>Modern Era</h3>
              <p style={{ color: "#666" }}>
                Today, GACW Chung stands as a reputable institution, known for
                its disciplined environment, qualified faculty, and excellent
                academic results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Styles ---
const historyCardStyle = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  borderTop: "5px solid #1a237e",
};

export default History;
