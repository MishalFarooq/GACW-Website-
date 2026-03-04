import React from "react";
// Breadcrumbs import
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const RulesRegulations = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* Breadcrumbs Section */}
      <Breadcrumbs
        links={[
          { name: "About Us", path: "/about" },
          { name: "Rules & Regulations" },
        ]}
      />

      <div
        style={{
          padding: "40px 10%",
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
          Rules & Regulations
        </h1>

        {/* Mandatory Rules Section (Must-follow) */}
        <div
          style={{
            backgroundColor: "#fff4f4",
            padding: "20px",
            borderRadius: "8px",
            borderLeft: "5px solid #d32f2f",
            marginBottom: "30px",
          }}
        >
          <h3 style={{ color: "#d32f2f", marginTop: 0 }}>
            Mandatory Requirements:
          </h3>
          <ul style={{ ...listStyle, fontWeight: "bold", color: "#b71c1c" }}>
            <li>
              Students MUST follow the college uniform code. They will not be
              allowed to enter without uniform.
            </li>
            <li>75% attendance is MANDATORY for appearing in exams.</li>
            <li>Mobile phones are STRICTLY PROHIBITED during class hours.</li>
          </ul>
        </div>

        <p style={{ fontSize: "17px", color: "#444", marginBottom: "20px" }}>
          Students are required to observe strict discipline in the college. Any
          activity disturbing the college discipline will not be tolerated.
        </p>

        <h3 style={{ color: "#1a237e" }}>Behavioral Rules:</h3>
        <ul style={listStyle}>
          <li>Regularity and Punctuality in all classes.</li>
          <li>Good manners, civil language, and uprightness.</li>
          <li>
            Upholding of Islamic values and respect for teachers and staff.
          </li>
          <li>Silence in the corridors during lectures.</li>
          <li>Cleanliness: Avoid throwing litter and scribbling on walls.</li>
          <li>
            Any action damaging college prestige or property will be strictly
            dealt with.
          </li>
        </ul>

        <h3 style={{ color: "#1a237e", marginTop: "30px" }}>
          Campus Policies:
        </h3>
        <ul style={listStyle}>
          <li>Visitors are not allowed in the college premises.</li>
          <li>
            In case of emergency, a student can only leave with the Principal's
            permission. Parents/real brothers must verify their identity with an
            ID Card.
          </li>
          <li>
            Use of car-park as a leisure spot or celebrating birthdays in
            college is strictly prohibited.
          </li>
          <li>Students are not allowed to bring cameras or video cameras.</li>
        </ul>

        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            borderLeft: "5px solid #1a237e",
          }}
        >
          <p style={{ fontSize: "15px", fontStyle: "italic", color: "#555" }}>
            The College Disciplinary committee has the power to inspect and
            review any action. The Principal is empowered to impose fines, issue
            warnings, or expel students accordingly.
          </p>
        </div>
      </div>
    </div>
  );
};

const listStyle = {
  lineHeight: "2.2",
  fontSize: "16px",
  marginTop: "10px",
  color: "#333",
  listStyleType: "square",
  paddingLeft: "20px",
};

export default RulesRegulations;
