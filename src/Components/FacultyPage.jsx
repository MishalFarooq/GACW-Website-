import React from "react";
import { Users, Mail } from "lucide-react";

const FacultyPage = () => {
  const staff = [
    {
      name: "Prof. Dr. Sarah Khan",
      dept: "Principal",
      email: "principal@gacwchung.edu.pk",
    },
    {
      name: "Ms. Amna Batool",
      dept: "Computer Science",
      email: "amna.cs@gacwchung.edu.pk",
    },
    {
      name: "Ms. Sadia Rehman",
      dept: "English Department",
      email: "sadia.eng@gacwchung.edu.pk",
    },
  ];

  return (
    <div style={pageContainer}>
      <h2 style={headingStyle}>Our Distinguished Faculty</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {staff.map((s, i) => (
          <div key={i} style={cardStyle}>
            <div style={avatarStyle}>
              <Users size={40} color="#1a237e" />
            </div>
            <h3 style={{ margin: "10px 0 5px 0", color: "#1a237e" }}>
              {s.name}
            </h3>
            <p style={{ color: "#666", fontSize: "14px", fontWeight: "600" }}>
              {s.dept}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                justifyContent: "center",
                marginTop: "10px",
                color: "#888",
                fontSize: "12px",
              }}
            >
              <Mail size={14} /> {s.email}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyPage;
