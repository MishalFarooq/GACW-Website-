import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NoticeBoard = ({ notices }) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex + 3 < notices.length) setStartIndex(startIndex + 1);
  };

  const prevSlide = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  // Click handle karne ka function
  const handleNoticeClick = (fileUrl) => {
    if (fileUrl) {
      window.open(fileUrl, "_blank"); // Naye tab mein file khul jayegi
    } else {
      alert("No document attached to this notice.");
    }
  };

  return (
    <div style={{ padding: "20px 40px", backgroundColor: "#f0f2f5" }}>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "stretch",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Side: Notice Board Header */}
        <div
          style={{
            backgroundColor: "#1a237e",
            color: "white",
            padding: "20px",
            width: "220px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ fontSize: "22px", fontWeight: "900", margin: 0 }}>
            Notice Board
          </h2>
          <Link
            to="/all-notices"
            style={{
              color: "#ffd54f",
              textDecoration: "none",
              fontSize: "14px",
              marginTop: "15px",
              fontWeight: "bold",
            }}
          >
            VIEW MORE →
          </Link>
        </div>

        {/* Right Side: Simple Slider */}
        <div
          style={{
            flex: 1,
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            overflow: "hidden",
          }}
        >
          {/* Cards Container */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              flex: 1,
              transition: "0.5s",
            }}
          >
            {notices.slice(startIndex, startIndex + 3).map((n) => (
              <div
                key={n.id}
                onClick={() => handleNoticeClick(n.fileUrl)} // Click logic added
                className="notice-card-hover" // CSS class for hover
                style={{
                  flex: "1",
                  background: "white",
                  padding: "15px",
                  borderRadius: "8px",
                  borderBottom: "4px solid #1a237e",
                  height: "140px",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "0.3s ease",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    color: "#d32f2f", // Date color red like MAO college
                    fontWeight: "bold",
                  }}
                >
                  {n.date || "Updating..."}{" "}
                  {/* Fallback text agar date na ho */}
                </span>
                <h4
                  className="card-title"
                  style={{
                    fontSize: "13px",
                    color: "#333",
                    margin: "10px 0",
                    flex: 1,
                    overflow: "hidden",
                    fontWeight: "bold",
                  }}
                >
                  {n.title}
                </h4>
                <span
                  className="view-btn"
                  style={{
                    fontSize: "11px",
                    color: "#1a237e",
                    fontWeight: "bold",
                  }}
                >
                  VIEW DETAILS —
                </span>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <button
              onClick={prevSlide}
              style={navBtnStyle}
              disabled={startIndex === 0}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              style={navBtnStyle}
              disabled={startIndex + 3 >= notices.length}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Inline Styles for Green Hover Effect */}
      <style>{`
        .notice-card-hover:hover {
          background-color: #2e7d32 !important; /* MAO College Green */
          border-bottom: 4px solid #ffd54f !important;
        }
        .notice-card-hover:hover .card-title,
        .notice-card-hover:hover .view-btn,
        .notice-card-hover:hover span {
          color: white !important;
        }
      `}</style>
    </div>
  );
};

const navBtnStyle = {
  backgroundColor: "#1a237e",
  color: "white",
  border: "none",
  padding: "8px",
  cursor: "pointer",
  borderRadius: "4px",
  opacity: "0.8",
};

export default NoticeBoard;
