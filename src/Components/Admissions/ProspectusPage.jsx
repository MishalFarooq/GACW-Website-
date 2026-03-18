import React from "react";
import { FileText } from "lucide-react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import prospectusPDF from "../../assets/ProspectustFinal.pdf";

const ProspectusPage = () => {
  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "Admissions", path: "/admissions" },
          { name: "Forms & Prospectus" },
        ]}
      />

      {/* Header */}
      <section style={hero}>
        <h1 style={heroTitle}>Forms & Prospectus</h1>
        <div style={divider}></div>
        <p style={heroText}>
          Download admission prospectus and application forms for academic
          programs.
        </p>
      </section>

      {/* Content */}
      <div style={container}>
        <div style={grid}>

          {/* Intermediate Prospectus */}
          <div style={card}>
            <FileText size={34} color="#1a237e" />

            <h3 style={cardTitle}>Intermediate Prospectus 2025-26</h3>

            <p style={cardDesc}>
              Prospectus for F.Sc, ICS, FA and I.Com admission programs.
            </p>

            <a href={prospectusPDF} download style={downloadBtn}>
              Download Prospectus
            </a>
          </div>

          {/* ADP Prospectus */}
          <div style={card}>
            <FileText size={34} color="#1a237e" />

            <h3 style={cardTitle}>ADP Prospectus 2025-26</h3>

            <p style={cardDesc}>
              Prospectus for Associate Degree Programs offered by the college.
            </p>

            <a href={prospectusPDF} download style={downloadBtn}>
              Download Prospectus
            </a>
          </div>

        </div>

        {/* Note */}
        <div style={noteBox}>
          <strong>Note:</strong> Prospectus can be downloaded directly from the
          buttons above.
        </div>
      </div>
    </div>
  );
};

/* ---------------- STYLES ---------------- */

const wrapper = {
  width: "100%",
  minHeight: "100vh",
  background: "#fff",
};

const hero = {
  background: "#1a237e",
  color: "white",
  textAlign: "center",
  padding: "70px 20px",
};

const heroTitle = {
  fontSize: "38px",
  fontWeight: "800",
};

const heroText = {
  marginTop: "10px",
  opacity: "0.9",
};

const divider = {
  width: "60px",
  height: "4px",
  background: "white",
  margin: "18px auto",
};

const container = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "60px 20px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "30px",
};

const card = {
  padding: "35px 30px",
  border: "1px solid #eee",
  borderRadius: "14px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: "220px",
  background: "#fff",
  transition: "0.3s",
};

const cardTitle = {
  color: "#1a237e",
  marginTop: "12px",
  marginBottom: "6px",
  fontWeight: "700",
  fontSize: "18px",
};

const cardDesc = {
  color: "#666",
  fontSize: "15px",
  lineHeight: "1.6",
  maxWidth: "320px",
};

const downloadBtn = {
  display: "inline-block",
  marginTop: "20px",
  padding: "11px 24px",
  background: "#1a237e",
  color: "#fff",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "600",
};

const noteBox = {
  marginTop: "40px",
  padding: "18px",
  background: "#f8faff",
  borderLeft: "5px solid #1a237e",
  borderRadius: "6px",
  color: "#444",
};

export default ProspectusPage;