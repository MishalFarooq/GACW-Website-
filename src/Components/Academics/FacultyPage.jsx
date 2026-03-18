import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const FacultyPage = () => {
  const [selectedDept, setSelectedDept] = useState(null);

  /* Departments from image */
  const departments = [
    "Psychology",
    "History",
    "Education",
    "Islamiat",
    "Zoology",
    "Economics",
    "Computer Science"
  ];

  const allTeachers = [
    { name:"Mrs. Darakshan Jabeen", dept:"Psychology", desig:"Assistant Professor", qual:"M.Sc" },
    { name:"Mrs. Saba Siddique", dept:"Psychology", desig:"Assistant Professor", qual:"M.Phil" },

    { name:"Mrs. Masooma Kanwal Rizvi", dept:"History", desig:"Assistant Professor", qual:"M.Phil" },

    { name:"Ms. Shahida Ashiq", dept:"Education", desig:"Assistant Professor", qual:"M.A" },

    { name:"Mrs. Ayesha Abdul Khaliq", dept:"Islamiat", desig:"Associate Professor", qual:"M.Phil" },

    { name:"Mrs. Maria Masood", dept:"Zoology", desig:"Assistant Professor", qual:"M.Phil" },
    { name:"Ms. Munazza Ashraf", dept:"Zoology", desig:"Lecturer", qual:"M.Phil" },

    { name:"Rubina Gulnaz", dept:"Economics", desig:"Assistant Professor", qual:"M.Phil" },

    { name:"Mrs. Ansa Zenib", dept:"Computer Science", desig:"Assistant Professor", qual:"MS" }
  ];

  const filteredTeachers = allTeachers.filter(
    t => t.dept === selectedDept
  );

  return (
    <div style={wrapper}>

      <Breadcrumbs
        links={[
          { name: "Academics", path: "/academics" },
          { name: "Faculty" }
        ]}
      />

      {/* HEADER */}
      <section style={hero}>
        <h1 style={heroTitle}>Faculty & Departments</h1>
        <div style={divider}></div>
      </section>

      <div style={container}>

        {!selectedDept ? (
          <>
            <h2 style={sectionTitle}>Departments</h2>

            <div style={deptGrid}>
              {departments.map(dept => (
                <div
                  key={dept}
                  style={deptCard}
                  onClick={() => setSelectedDept(dept)}
                >
                  Department of {dept}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <button
              style={backBtn}
              onClick={() => setSelectedDept(null)}
            >
              ← Back to Departments
            </button>

            <h2 style={sectionTitle}>
              Department of {selectedDept}
            </h2>

            <div style={teacherGrid}>

              {filteredTeachers.map((teacher,index)=>(
                <div key={index} style={teacherCard}>

                  <h3 style={teacherName}>
                    {teacher.name}
                  </h3>

                  <div style={teacherInfo}>
                    <div>
                      <strong>Qualification:</strong> {teacher.qual}
                    </div>

                    <div>
                      <strong>Designation:</strong> {teacher.desig}
                    </div>

                    <div>
                      <strong>Department:</strong> {teacher.dept}
                    </div>
                  </div>

                </div>
              ))}

              {filteredTeachers.length === 0 && (
                <p style={{color:"#666"}}>
                  Information will be updated soon.
                </p>
              )}

            </div>
          </>
        )}

      </div>
    </div>
  );
};

/* STYLES */

const wrapper = {
  width: "100%",
  background: "#fff",
  minHeight: "100vh"
};

const hero = {
  background: "#1a237e",
  color: "white",
  textAlign: "center",
  padding: "60px 20px"
};

const heroTitle = {
  fontSize: "36px",
  fontWeight: "800"
};

const divider = {
  width: "60px",
  height: "4px",
  background: "white",
  margin: "18px auto"
};

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "60px 20px"
};

const sectionTitle = {
  color: "#1a237e",
  marginBottom: "30px",
  fontSize: "26px"
};

const deptGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: "20px"
};

const deptCard = {
  padding: "20px",
  background: "#f8faff",
  borderLeft: "4px solid #1a237e",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "500",
  transition:"0.3s"
};

const teacherGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "20px"
};

const teacherCard = {
  padding: "22px",
  border: "1px solid #eee",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
};

const teacherName = {
  color: "#1a237e",
  marginBottom: "12px"
};

const teacherInfo = {
  lineHeight: "1.8",
  color: "#444"
};

const backBtn = {
  marginBottom: "25px",
  padding: "10px 18px",
  border: "none",
  background: "#1a237e",
  color: "white",
  borderRadius: "6px",
  cursor: "pointer"
};

export default FacultyPage;