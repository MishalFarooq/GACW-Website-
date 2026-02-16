import React, { useState } from "react";

const AllNotices = ({ notices }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 8;

  // Pagination Logic
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);
  const totalPages = Math.ceil(notices.length / noticesPerPage);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Header Section - Modern Black Theme */}
      <div
        style={{
          backgroundColor: "#000000",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", margin: 0, letterSpacing: "1px" }}>
          NOTICE BOARD
        </h1>
        <p
          style={{
            opacity: 0.7,
            marginTop: "10px",
            fontSize: "14px",
            textTransform: "uppercase",
          }}
        >
          Govt. Associate College for Women, Chung
        </p>
      </div>

      <div
        style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 20px" }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "0px", // Professional square look
            border: "1px solid #eee",
            boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
          }}
        >
          {/* Notice List Container */}
          {currentNotices.length > 0 ? (
            currentNotices.map((notice, index) => (
              <div
                key={notice.id}
                style={{
                  padding: "25px",
                  borderBottom:
                    index === currentNotices.length - 1
                      ? "none"
                      : "1px solid #f0f0f0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    color: "#666",
                    fontWeight: "600",
                    fontSize: "12px",
                    textTransform: "uppercase",
                  }}
                >
                  {notice.date || "October 03, 2025"}
                </span>

                {/* Black & White Link Section */}
                <a
                  href={notice.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    width: "fit-content",
                    display: "block",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "19px",
                      color: "#000000",
                      fontWeight: "500",
                      cursor: "pointer",
                      borderBottom: "1px solid #000000", // Constant Underline
                      paddingBottom: "2px",
                      display: "inline-block",
                      transition: "0.3s all ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#888888";
                      e.target.style.borderBottomColor = "#888888";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "#000000";
                      e.target.style.borderBottomColor = "#000000";
                    }}
                  >
                    {notice.title}
                  </h3>
                </a>
              </div>
            ))
          ) : (
            <p style={{ padding: "40px", textAlign: "center", color: "#999" }}>
              No notices found.
            </p>
          )}
        </div>

        {/* Pagination Section */}
        {totalPages > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginTop: "40px",
              paddingBottom: "60px",
            }}
          >
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              style={pageArrowStyle}
              disabled={currentPage === 1}
            >
              PREV
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                style={{
                  ...pageNumStyle,
                  backgroundColor:
                    currentPage === i + 1 ? "#000000" : "transparent",
                  color: currentPage === i + 1 ? "#ffffff" : "#000000",
                  border: "1px solid #000000",
                }}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              style={pageArrowStyle}
              disabled={currentPage === totalPages}
            >
              NEXT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const pageNumStyle = {
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "600",
  transition: "0.3s",
};

const pageArrowStyle = {
  background: "none",
  border: "1px solid rgb(25, 94, 199)",
  padding: "8px 15px",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: "bold",
  letterSpacing: "1px",
  color: "#000000",
  textTransform: "uppercase",
};

export default AllNotices;
