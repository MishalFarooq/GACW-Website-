import React from "react";
// Breadcrumbs import add kiya
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const ExamSchedulePage = () => {
  return (
    <div style={pageWrapper}>
      {/* Breadcrumbs: Home / Academics / Exam Schedule */}
      <Breadcrumbs
        links={[
          { name: "Academics", path: "/academics" },
          { name: "Exam Schedule" },
        ]}
      />

      <div style={contentArea}>
        <h2 style={headingStyle}>Examination Schedule</h2>

        <p style={introText}>
          It is mandatory for the students to appear in the college examination
          for their satisfactory internal assessment and eligibility for the
          admission to be sent to the BISE Lahore and the University of the
          Punjab.
        </p>

        {/* Intermediate Section */}
        <div style={sectionWrapper}>
          <h3 style={subHeadingStyle}>Intermediate (1st Year & 2nd Year)</h3>
          <div style={contentBox}>
            <h4 style={{ color: "#b22222" }}>Mid-Term Examination</h4>
            <p>
              Held in the <strong>end of December</strong>. Students are
              assessed through class tests and mid-terms.
            </p>
          </div>
          <div style={contentBox}>
            <h4 style={{ color: "#b22222" }}>Pre-Board Examination</h4>
            <p>
              Held in <strong>March</strong> at the completion of courses. It is
              compulsory for all students for BISE eligibility.
            </p>
          </div>
        </div>

        {/* ADP Section */}
        <div style={sectionWrapper}>
          <h3 style={subHeadingStyle}>
            ADP (Associate Degree Program) 2-Years
          </h3>
          <div style={contentBox}>
            <h4 style={{ color: "#b22222" }}>Semester Examinations</h4>
            <p>
              ADP follows the <strong>University of the Punjab</strong> semester
              system. Each year has two semesters (Fall & Spring).
            </p>
          </div>
          <div style={contentBox}>
            <h4 style={{ color: "#b22222" }}>Final Examination</h4>
            <p>
              Final exams are conducted by the{" "}
              <strong>University of the Punjab</strong>. Date sheets and
              schedules are issued by the PU Controller Office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Standard Styles (Matching Admissions/About Consistency) ---

const pageWrapper = {
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#fff",
};

const contentArea = {
  padding: "40px 20px", // Side spacing 20px kar di (No extra side space)
  width: "100%",
};

const headingStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  borderLeft: "5px solid #1a237e",
  paddingLeft: "15px",
  color: "#1a237e",
};

const introText = {
  marginTop: "20px",
  fontStyle: "italic",
  color: "#555",
  backgroundColor: "#f9f9f9",
  padding: "15px",
  lineHeight: "1.6",
};

const sectionWrapper = {
  marginTop: "40px",
};

const subHeadingStyle = {
  borderBottom: "1px solid #ddd",
  paddingBottom: "10px",
  fontWeight: "bold",
  color: "#333",
};

const contentBox = {
  marginTop: "15px",
};

export default ExamSchedulePage;
