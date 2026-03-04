import React, { useState } from "react";
// Breadcrumbs import add kiya
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const FacultyPage = () => {
  const [selectedDept, setSelectedDept] = useState(null);

  // Departments List
  const departments = [
    "English",
    "Maths",
    "Persian",
    "Islamiat",
    "Education",
    "H-Eco",
    "H&P Edu",
    "Physics",
    "Computer Science",
    "Punjabi",
    "Urdu",
    "History",
    "Economics",
    "Statistics",
    "Psychology",
    "Library Science",
    "Chemistry",
    "Zoology",
    "Fine Arts",
    "Journalism",
  ];

  // All 26 Teachers Data
  const allTeachers = [
    {
      name: "Mrs. Farina Waqar",
      dept: "English",
      desig: "Associate Professor",
      qual: "M.A",
    },
    {
      name: "Mrs. Saira Akhtar",
      dept: "Maths",
      desig: "Associate Professor",
      qual: "M.Sc",
    },
    {
      name: "Ms. Nosheen",
      dept: "Persian",
      desig: "Associate Professor",
      qual: "M.Phil",
    },
    {
      name: "Mrs. Rehana Anjum",
      dept: "Islamiat",
      desig: "Associate Professor",
      qual: "M.Phil",
    },
    {
      name: "Ms. Shahida Ashiq",
      dept: "Education",
      desig: "Associate Professor",
      qual: "M.A",
    },
    {
      name: "Mrs. Munazzah Ihtisham",
      dept: "H-Eco",
      desig: "Associate Professor",
      qual: "M.Sc",
    },
    {
      name: "Mrs. Fouzia Jamshaid",
      dept: "H&P Edu",
      desig: "Associate Professor",
      qual: "M.A",
    },
    {
      name: "Mrs. Ayesha Abdul Khaliq",
      dept: "Islamiat",
      desig: "Associate Professor",
      qual: "M.Phil",
    },
    {
      name: "Mrs. Sumeera Shaheen",
      dept: "Physics",
      desig: "Associate Professor",
      qual: "M.Sc",
    },
    {
      name: "Mrs. Ansa Zenib",
      dept: "Computer Science",
      desig: "Assistant Professor",
      qual: "MS",
    },
    {
      name: "Mrs. Nadira Noori",
      dept: "Punjabi",
      desig: "Assistant Professor",
      qual: "M.A",
    },
    {
      name: "Mrs. Tahira Rauf",
      dept: "Urdu",
      desig: "Assistant Professor",
      qual: "M.A",
    },
    {
      name: "Mrs. Attika Azhar",
      dept: "English",
      desig: "Assistant Professor",
      qual: "M.A",
    },
    {
      name: "Mrs. Noumana Yaseen Chughtai",
      dept: "English",
      desig: "Assistant Professor",
      qual: "M.A",
    },
    {
      name: "Mrs. Masooma Kanwal Rizvi",
      dept: "History",
      desig: "Assistant Professor",
      qual: "M.Phil",
    },
    {
      name: "Rubina Gulnaz",
      dept: "Economics",
      desig: "Assistant Professor",
      qual: "M.Phil",
    },
    {
      name: "Mrs. Gulnaz Rafique",
      dept: "Statistics",
      desig: "Assistant Professor",
      qual: "M.Phil",
    },
    {
      name: "Mrs. Darakshan Jabeen",
      dept: "Psychology",
      desig: "Assistant Professor",
      qual: "M.Sc",
    },
    {
      name: "Mrs. Gul e Zahra",
      dept: "Library Science",
      desig: "Senior Librarian",
      qual: "MS",
    },
    {
      name: "Mrs. Saba Siddique",
      dept: "Psychology",
      desig: "Assistant Professor",
      qual: "M.Sc",
    },
    {
      name: "Mrs. Faiza Azhar",
      dept: "Chemistry",
      desig: "Assistant Professor",
      qual: "M.Phil",
    },
    {
      name: "Mrs. Sana Ijaz",
      dept: "Maths",
      desig: "Assistant Professor",
      qual: "M.Phil",
    },
    {
      name: "Mrs. Maria Masood",
      dept: "Zoology",
      desig: "Assistant Professor",
      qual: "M.Phil",
    },
    {
      name: "Mrs. Saman Javed",
      dept: "Fine Arts",
      desig: "Assistant Professor",
      qual: "M.A",
    },
    {
      name: "Ms. Munazza Ashraf",
      dept: "Zoology",
      desig: "Lecturer",
      qual: "M.Phil",
    },
    {
      name: "Ms. Fizza Saleem",
      dept: "Journalism",
      desig: "Lecturer",
      qual: "M.Phil",
    },
  ];

  const filteredTeachers = allTeachers.filter((t) => t.dept === selectedDept);

  // Common Breadcrumbs Logic
  const facultyBreadcrumbs = (
    <Breadcrumbs
      links={[{ name: "Academics", path: "/academics" }, { name: "Faculty" }]}
    />
  );

  return (
    <div style={pageWrapper}>
      {facultyBreadcrumbs}

      <div style={contentArea}>
        {!selectedDept ? (
          <>
            <h2 style={headingStyle}>DEPARTMENTS</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {departments.map((dept) => (
                <li
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  style={deptListItemStyle}
                >
                  › Department of {dept}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <button onClick={() => setSelectedDept(null)} style={backBtnStyle}>
              ← Back to Departments
            </button>
            <h2 style={deptHeadingStyle}>Department of {selectedDept}</h2>

            {filteredTeachers.map((teacher, index) => (
              <div key={index} style={teacherCardStyle}>
                <h3 style={teacherNameStyle}>{teacher.name}</h3>
                <div style={teacherInfoGrid}>
                  <strong>Higher Qualification:</strong>{" "}
                  <span>{teacher.qual}</span>
                  <strong>Designation:</strong> <span>{teacher.desig}</span>
                  <strong>Department:</strong> <span>{teacher.dept}</span>
                </div>
              </div>
            ))}

            {filteredTeachers.length === 0 && (
              <p style={{ color: "#666" }}>Information will be updated soon.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// --- Standard Styles (Matching Admissions/About Consistency) ---
const pageWrapper = {
  width: "100%",
  minHeight: "80vh",
  backgroundColor: "#fff",
};
const contentArea = { padding: "40px 20px", width: "100%" };
const headingStyle = {
  borderBottom: "2px solid #1a237e",
  color: "#1a237e",
  paddingBottom: "10px",
  marginBottom: "30px",
  fontSize: "28px",
};

const deptListItemStyle = {
  padding: "15px",
  borderBottom: "1px solid #eee",
  cursor: "pointer",
  color: "#1a237e",
  fontSize: "18px",
  fontWeight: "500",
  transition: "0.2s",
};

const backBtnStyle = {
  marginBottom: "20px",
  cursor: "pointer",
  padding: "10px 20px",
  background: "#1a237e",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
};

const deptHeadingStyle = {
  marginBottom: "30px",
  textTransform: "uppercase",
  borderLeft: "5px solid #1a237e",
  paddingLeft: "15px",
  color: "#1a237e",
};

const teacherCardStyle = {
  marginBottom: "30px",
  padding: "20px",
  border: "1px solid #eee",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
};

const teacherNameStyle = {
  color: "#d32f2f",
  margin: "0 0 15px 0",
  fontSize: "22px",
};
const teacherInfoGrid = {
  display: "grid",
  gridTemplateColumns: "160px 1fr",
  gap: "5px",
  fontSize: "16px",
};

export default FacultyPage;
