import React from "react";
// Breadcrumbs import
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const OurStaff = () => {
  const staffData = [
    {
      name: "Mrs. Farina Waqar",
      qualification: "M.A",
      subject: "English",
      designation: "Associate Professor",
    },
    {
      name: "Mrs. Saira Akhtar",
      qualification: "M.Sc",
      subject: "Maths",
      designation: "Associate Professor",
    },
    {
      name: "Ms. Nosheen",
      qualification: "M.Phil",
      subject: "Persian",
      designation: "Associate Professor",
    },
    {
      name: "Mrs. Rehana Anjum",
      qualification: "M.Phil",
      subject: "Islamiat",
      designation: "Associate Professor",
    },
    {
      name: "Ms. Shahida Ashiq",
      qualification: "M.A",
      subject: "Education",
      designation: "Associate Professor",
    },
    {
      name: "Mrs. Munazzah Ihtisham",
      qualification: "M.Sc",
      subject: "H-Eco",
      designation: "Associate Professor",
    },
    {
      name: "Mrs. Fouzia Jamshaid",
      qualification: "M.A",
      subject: "H&P Edu",
      designation: "Associate Professor",
    },
    {
      name: "Mrs. Ayesha Abdul Khaliq",
      qualification: "M.Phil",
      subject: "Islamiat",
      designation: "Associate Professor",
    },
    {
      name: "Mrs. Sumeera Shaheen",
      qualification: "M.Sc",
      subject: "Physics",
      designation: "Associate Professor",
    },
    {
      name: "Mrs. Ansa Zenab",
      qualification: "M.S",
      subject: "Computer Science",
      designation: "A/P",
    },
    {
      name: "Mrs. Nadira Noori",
      qualification: "M.A",
      subject: "Punjabi",
      designation: "A/P",
    },
    {
      name: "Mrs. Tahira Rauf",
      qualification: "M.A",
      subject: "Urdu",
      designation: "A/P",
    },
    {
      name: "Mrs. Attika Azhar",
      qualification: "M.A",
      subject: "English",
      designation: "A/P",
    },
    {
      name: "Mrs. Noumana Yaseen Chughtai",
      qualification: "M.A",
      subject: "English",
      designation: "A/P",
    },
    {
      name: "Mrs. Masooma Kanwal Rizvi",
      qualification: "M.Phil",
      subject: "History",
      designation: "A/P",
    },
    {
      name: "Rubina Gulnaz",
      qualification: "M.A",
      subject: "Economics",
      designation: "A/P",
    },
    {
      name: "Mrs. Gulnaz Rafique",
      qualification: "M.Phil",
      subject: "Statistics",
      designation: "A/P",
    },
    {
      name: "Mrs. Darakshan Jabeen",
      qualification: "M.Sc",
      subject: "Psychology",
      designation: "A/P",
    },
    {
      name: "Mrs. Gul e Zahra",
      qualification: "M.A",
      subject: "Library Science",
      designation: "Senior Librarian",
    },
    {
      name: "Mrs. Saba Siddique",
      qualification: "M.Sc",
      subject: "Psychology",
      designation: "A/P",
    },
    {
      name: "Mrs. Faiza Azhar",
      qualification: "M.Phil",
      subject: "Chemistry",
      designation: "A/P",
    },
    {
      name: "Mrs. Sana Ijaz",
      qualification: "M.Phil",
      subject: "Maths",
      designation: "A/P",
    },
    {
      name: "Mrs. Maria Masood",
      qualification: "M.Phil",
      subject: "Zoology",
      designation: "A/P",
    },
    {
      name: "Mrs. Saman Javed",
      qualification: "M.A",
      subject: "Fine Arts",
      designation: "A/P",
    },
    {
      name: "Ms. Munazza Ashraf",
      qualification: "M.Phil",
      subject: "Zoology",
      designation: "Lecturer",
    },
    {
      name: "Ms. Fizza Saleem",
      qualification: "M.Phil",
      subject: "Journalism",
      designation: "Lecturer",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
      }}
    >
      {/* Breadcrumbs Section */}
      <Breadcrumbs
        links={[{ name: "About Us", path: "/about" }, { name: "Our Staff" }]}
      />

      <div style={{ padding: "40px 5%" }}>
        <h1
          style={{
            color: "#1a237e",
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "32px",
          }}
        >
          Our Teaching Staff
        </h1>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
          Government Associate College for (W) Chung,Lahore.
        </p>

        <div
          style={{
            overflowX: "auto",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            borderRadius: "10px",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr style={{ backgroundColor: "#1a237e", color: "white" }}>
                <th style={thStyle}>Sr. No</th>
                <th style={thStyle}>Name of Officer</th>
                <th style={thStyle}>Qualification</th>
                <th style={thStyle}>Subject</th>
                <th style={thStyle}>Designation</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map((staff, index) => (
                <tr
                  key={index}
                  style={
                    index % 2 === 0
                      ? { backgroundColor: "#ffffff" }
                      : { backgroundColor: "#f8f9fa" }
                  }
                >
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={{ ...tdStyle, fontWeight: "bold", color: "#333" }}>
                    {staff.name}
                  </td>
                  <td style={tdStyle}>{staff.qualification}</td>
                  <td style={tdStyle}>{staff.subject}</td>
                  <td style={tdStyle}>{staff.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: "white",
  minWidth: "800px",
};

const thStyle = {
  padding: "15px 20px",
  textAlign: "left",
  fontSize: "16px",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const tdStyle = {
  padding: "12px 20px",
  borderBottom: "1px solid #eee",
  fontSize: "15px",
  color: "#444",
};

export default OurStaff;
