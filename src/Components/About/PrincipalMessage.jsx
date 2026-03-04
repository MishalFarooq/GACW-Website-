import React from "react";
// Breadcrumbs import
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const PrincipalMessage = () => {
  return (
    // width: 100% taake page kone tak phail jaye
    <div
      style={{
        width: "100%",
        padding: "0",
        backgroundColor: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* Breadcrumbs Section - Header se upar */}
      <Breadcrumbs
        links={[
          { name: "About Us", path: "/about" },
          { name: "Principal's Message" },
        ]}
      />

      {/* Top Header Section: Blue Bar jo poori screen le rahi hai */}
      <div
        style={{
          backgroundColor: "#1a237e",
          color: "white",
          padding: "50px 5%",
          width: "100%",
          textAlign: "left",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "38px", fontWeight: "bold" }}>
          Principal's Message
        </h1>
        <p style={{ marginTop: "10px", fontSize: "18px", opacity: "0.9" }}>
          Government Associate College for Women, Chung
        </p>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "50px 5%",
          gap: "40px",
          width: "100%",
        }}
      >
        {/* Left: Photo and Quick Info */}
        <div style={{ flex: "0 0 300px" }}>
          <div
            style={{
              width: "100%",
              height: "400px",
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              border: "2px solid #eee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden", // Photo ko border radius mein rakhne ke liye
            }}
          >
            {/* Jab aapke paas photo ho, toh yahan img tag laga sakte hain */}
            <span style={{ color: "#999" }}>[Principal Photo]</span>
          </div>

          <div style={{ marginTop: "20px" }}>
            <h2 style={{ color: "#1a237e", marginBottom: "5px" }}>
              Dr. Rehana Anjum
            </h2>
            <p style={{ color: "#555", fontSize: "18px", fontWeight: "500" }}>
              Associate Professor (Islamiyat)
            </p>
          </div>
        </div>

        {/* Right: Detailed Message */}
        <div style={{ flex: "1", minWidth: "400px" }}>
          <h2
            style={{
              color: "#1a237e",
              borderBottom: "2px solid #f0f0f0",
              paddingBottom: "15px",
              marginBottom: "20px",
            }}
          >
            Welcome to our Institution
          </h2>

          <div
            style={{
              lineHeight: "2",
              fontSize: "19px",
              color: "#333",
              textAlign: "justify",
            }}
          >
            <p>
              "Welcome to Government Associate College for Women, Chung. It is
              my honor to lead an institution that is dedicated to the
              empowerment of young women through education and character
              building."
            </p>

            <p>
              "As an Associate Professor of Islamiyat, I believe that true
              education is a blend of modern knowledge and strong moral values.
              At GACW Chung, we provide a safe and encouraging environment where
              every student can discover her hidden potential and prepare for a
              successful future."
            </p>

            <p>
              "Our faculty is committed to academic excellence, and we ensure
              that our students are well-prepared to face the challenges of the
              world with confidence and grace. I invite you to join us in this
              noble journey of learning."
            </p>

            <div
              style={{
                marginTop: "50px",
                borderTop: "1px solid #eee",
                paddingTop: "20px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#1a237e",
                  margin: 0,
                }}
              >
                Dr. Rehana Anjum
              </p>
              <p style={{ margin: 0, color: "#666" }}>
                Principal, GACW Chung, Lahore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
