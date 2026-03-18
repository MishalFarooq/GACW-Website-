import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HeroSlider() {
  const slides = [
    {
      img: "/collage1.jpeg",
      title: "GACW CHUNG",
      subtitle: "Nurturing Excellence, Empowering Women",
      btn: "/admissions/apply"
    },
    {
      img: "/collage2.jpeg",
      title: "Admissions Open",
      subtitle: "Join Lahore's Premier Women's College",
      btn: "/admissions/apply"
    },
    {
      img: "/collage3.jpeg",
      title: "Academic Excellence",
      subtitle: "Modern education with strong values",
      btn: "/academics/programs"
    },

  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={sliderSection}>
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            ...slideStyle,
            backgroundImage: `url(${slide.img})`,
            opacity: i === index ? 1 : 0
          }}
        >
          <div style={overlayStyle}>
            <h1 style={titleStyle}>{slide.title}</h1>
            <p style={subtitleStyle}>{slide.subtitle}</p>

            <Link to={slide.btn}>
              <button style={btnStyle}>Apply Now</button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

const sliderSection = {
  position: "relative",
  height: "90vh",
  overflow: "hidden"
};

const slideStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "opacity 1s ease"
};

const overlayStyle = {
  width: "100%",
  height: "100%",
  background: "rgba(10,15,60,0.50)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
  padding: "20px"
};

const titleStyle = {
  fontSize: "clamp(40px,8vw,70px)",
  fontWeight: "900"
};

const subtitleStyle = {
  fontSize: "18px",
  marginTop: "10px",
  maxWidth: "600px"
};

const btnStyle = {
  marginTop: "25px",
  padding: "14px 35px",
  borderRadius: "40px",
  border: "none",
  background: "#4f46e5",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer"
};