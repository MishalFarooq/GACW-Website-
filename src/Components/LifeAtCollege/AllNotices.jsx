import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const AllNotices = ({ notices }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 8;

  // Pagination Logic
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices
    ? notices.slice(indexOfFirstNotice, indexOfLastNotice)
    : [];
  const totalPages = Math.ceil((notices?.length || 0) / noticesPerPage);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* 1. M.A.O Style Breadcrumb Bar - FIXED DOUBLE HOME */}
      <div
        style={{
          backgroundColor: "#1a237e",
          padding: "12px 5%",
          color: "white",
        }}
      >
        <Breadcrumbs
          links={[
            // { name: "Home", path: "/" },  <-- IS LINE KO DELETE KAR DIYA TAAKE DOUBLE HOME NA AAYE
            { name: "Life at College", path: "/life-at-college" },
            { name: "Notice Board" },
          ]}
        />
      </div>

      <div
        style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px" }}
      >
        <h1
          style={{
            fontSize: "28px",
            color: "#1a237e",
            fontWeight: "700",
            marginBottom: "30px",
            borderBottom: "2px solid #f0f0f0",
            paddingBottom: "15px",
          }}
        >
          Notice Board
        </h1>

        <div style={{ backgroundColor: "white" }}>
          {currentNotices.length > 0 ? (
            currentNotices.map((notice, index) => (
              <div
                key={notice.id || index}
                className="notice-item-row" // CSS Class for hover
                style={{
                  padding: "15px 10px",
                  borderBottom: "1px solid #f0f0f0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  transition: "0.2s",
                }}
              >
                <span
                  style={{ color: "#000", fontWeight: "700", fontSize: "14px" }}
                >
                  {notice.date || "Oct 05, 2025"}
                </span>

                <a
                  href={notice.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", width: "fit-content" }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      color: "#1a237e",
                      fontWeight: "500",
                      borderBottom: "1px dotted #1a237e",
                      paddingBottom: "2px",
                      display: "inline-block",
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

        {/* 3. Pagination */}
        {totalPages > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "5px",
              marginTop: "40px",
              paddingBottom: "60px",
            }}
          >
            <button
              onClick={() => setCurrentPage(1)}
              style={pageBtnStyle}
              disabled={currentPage === 1}
            >
              « First
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                style={{
                  ...pageBtnStyle,
                  backgroundColor:
                    currentPage === i + 1 ? "#1a237e" : "#f8f9fa",
                  color: currentPage === i + 1 ? "#ffffff" : "#1a237e",
                }}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              style={pageBtnStyle}
              disabled={currentPage === totalPages}
            >
              Next »
            </button>
          </div>
        )}
      </div>

      {/* Adding Hover Effect CSS */}
      <style>{`
        .notice-item-row:hover {
          background-color: #fcfcfc;
          padding-left: 15px !important;
        }
      `}</style>
    </div>
  );
};

const pageBtnStyle = {
  padding: "8px 14px",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: "500",
  border: "1px solid #ddd",
  transition: "0.2s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default AllNotices;
