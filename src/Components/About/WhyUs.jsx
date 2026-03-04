import React from "react";
// Breadcrumbs import
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const WhyUs = () => {
  const features = [
    {
      title: "Quality Education",
      description:
        "We provide high-standard academic programs tailored to empower women in various fields.",
    },
    {
      title: "Expert Faculty",
      description:
        "Our teachers are highly qualified and dedicated to student success and character building.",
    },
    {
      title: "Safe Environment",
      description:
        "A secure and supportive campus atmosphere specifically designed for female students.",
    },
    {
      title: "Modern Facilities",
      description:
        "Well-equipped labs, a rich library, and digital resources to enhance the learning experience.",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#fff",
        minHeight: "80vh",
      }}
    >
      {/* Breadcrumbs Section */}
      <Breadcrumbs
        links={[{ name: "About Us", path: "/about" }, { name: "Why Us" }]}
      />

      <div
        style={{
          padding: "60px 10%",
        }}
      >
        <h1
          style={{
            color: "#1a237e",
            borderBottom: "2px solid #1a237e",
            display: "inline-block",
            marginBottom: "30px",
          }}
        >
          Why Choose GACW Chung?
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "40px",
          }}
        >
          Government Associate College for Women, Chung is committed to
          excellence. We don't just teach; we prepare our students for a bright
          and successful future.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {features.map((item, index) => (
            <div key={index} style={cardStyle}>
              <h3 style={{ color: "#1a237e", marginBottom: "10px" }}>
                {item.title}
              </h3>
              <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.5" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  padding: "25px",
  backgroundColor: "#f8f9fa",
  borderRadius: "10px",
  borderLeft: "5px solid #1a237e",
  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
};

export default WhyUs;
