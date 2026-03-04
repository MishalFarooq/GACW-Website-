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
      icon: <BookOpen size={32} color="#1a237e" />,
      desc: "M.A.O. College Library has a stock of valuable books available to its students. Students are issued a Library Card to borrow books. Books must be returned within 14 days or a fine of Rs. 2/day applies. In case of loss, the book must be replaced or double cost paid. A quiet reading room is attached for students.",
    },
    {
      title: "Computer Lab",
      icon: <Monitor size={32} color="#1a237e" />,
      desc: "The computer lab serves as the center for teaching computer skills by specialist teachers. It is also used for research and creating technology-based projects by various classes.",
    },
    {
      title: "Masjid",
      icon: <Moon size={32} color="#1a237e" />,
      desc: "To facilitate Islamic teachings and the observance of the five obligatory prayers, a beautiful masjid is located inside the campus.",
    },
    {
      title: "Dispensary",
      icon: <PlusSquare size={32} color="#1a237e" />,
      desc: "A well-equipped dispensary is available for first-aid emergencies. An MBBS doctor visits the college periodically for consultation.",
    },
    {
      title: "Transportation",
      icon: <Bus size={32} color="#1a237e" />,
      desc: "Transport facility is available on specific routes. Charges are included in the fee, and passes are issued by the Transport Office at the start of the academic year.",
    },
    {
      title: "Canteen",
      icon: <Coffee size={32} color="#1a237e" />,
      desc: "Fresh and hygienic food is available at subsidized rates for students, teachers, and staff members.",
    },
    {
      title: "Filtration Plant",
      icon: <Droplets size={32} color="#1a237e" />,
      desc: "The water filtration plants provide pure, safe, and reliable drinking water across the campus.",
    },
  ];

  return (
    <div style={pageWrapper}>
      <Breadcrumbs
        links={[
          { name: "Life at College", path: "/life-at-college" },
          { name: "Facilities" },
        ]}
      />

      <div style={contentArea}>
        <h1 style={headingStyle}>Campus Facilities</h1>
        <p style={subTextStyle}>
          We provide a range of modern facilities to ensure a comfortable and
          productive learning environment for our students.
        </p>

        <div style={gridStyle}>
          {facilitiesData.map((item, index) => (
            <div key={index} style={cardStyle} className="facility-card">
              <div style={iconBoxStyle}>{item.icon}</div>
              <h3 style={cardTitleStyle}>{item.title}</h3>
              <p style={cardDescStyle}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- STYLES ---
const pageWrapper = {
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#f9f9f9",
};
const contentArea = {
  padding: "40px 5%",
  maxWidth: "1200px",
  margin: "0 auto",
};
const headingStyle = {
  fontSize: "32px",
  color: "#1a237e",
  fontWeight: "bold",
  marginBottom: "10px",
};
const subTextStyle = {
  fontSize: "16px",
  color: "#666",
  marginBottom: "40px",
  maxWidth: "800px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "25px",
};

const cardStyle = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  border: "1px solid #eee",
  transition: "transform 0.3s ease",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const iconBoxStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#f0f2ff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
};

const cardTitleStyle = {
  fontSize: "20px",
  color: "#333",
  marginBottom: "12px",
  fontWeight: "600",
};
const cardDescStyle = {
  fontSize: "14px",
  color: "#555",
  lineHeight: "1.6",
  margin: 0,
};

export default Facilities;
