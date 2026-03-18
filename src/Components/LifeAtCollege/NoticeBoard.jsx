import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const NoticeBoard = ({ notices = [] }) => {
  const [startIndex, setStartIndex] = useState(0);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const visibleCount = 2;

  const nextSlide = () => {
    if (startIndex + visibleCount < notices.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  const handleNoticeClick = (fileUrl) => {
    if (fileUrl) window.open(fileUrl, "_blank");
  };

  return (
    <div style={wrapper}>
      {!isHomePage && (
        <div style={breadcrumbWrapper}>
          <Breadcrumbs
            links={[
              { name: "Life At College", path: "/life-at-college" },
              { name: "Notice Board" },
            ]}
          />
        </div>
      )}

      <div style={container}>
        <div style={layout}>
          {/* Left Panel */}
          <div style={sidePanel}>
            <h2 style={panelTitle}>Notice Board</h2>

            <Link to="/life-at-college/all-notices" style={viewMore}>
              VIEW MORE →
            </Link>
          </div>

          {/* Notices */}
          <div style={sliderArea}>
            <div style={cardsWrapper}>
              {notices.length === 0 && (
                <div style={emptyState}>No notices available.</div>
              )}

              {notices
                .slice(startIndex, startIndex + visibleCount)
                .map((n) => (
                  <div
                    key={n.id}
                    onClick={() => handleNoticeClick(n.fileUrl)}
                    className="notice-card"
                    style={card}
                  >
                    <span style={date}>{n.date || "Updating..."}</span>

                    <h4 style={title}>{n.title}</h4>

                    <span style={viewBtn}>VIEW DETAILS →</span>
                  </div>
                ))}
            </div>

            {/* Navigation */}
            {notices.length > visibleCount && (
              <div style={navContainer}>
                <button
                  onClick={prevSlide}
                  style={navBtn}
                  disabled={startIndex === 0}
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={nextSlide}
                  style={navBtn}
                  disabled={startIndex + visibleCount >= notices.length}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .notice-card:hover {
          background:#2e7d32;
          color:white;
          transform:translateY(-4px);
        }
      `}</style>
    </div>
  );
};

/* ---------- STYLES ---------- */

const wrapper = {
  background: "#f0f2f5",
  paddingBottom: "30px",
};

const breadcrumbWrapper = {
  background: "#fff",
  borderBottom: "1px solid #ddd",
};

const container = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "25px",
};

const layout = {
  display: "flex",
  gap: "15px",
  flexWrap: "wrap",
};

const sidePanel = {
  background: "#1a237e",
  color: "white",
  padding: "25px",
  borderRadius: "8px",
  width: "220px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const panelTitle = {
  fontSize: "22px",
  margin: 0,
  fontWeight: "800",
};

const viewMore = {
  marginTop: "15px",
  fontSize: "14px",
  color: "#ffd54f",
  textDecoration: "none",
  fontWeight: "bold",
};

const sliderArea = {
  flex: 1,
  display: "flex",
  gap: "10px",
  alignItems: "center",
};

const cardsWrapper = {
  display: "flex",
  gap: "12px",
  flex: 1,
};

const card = {
  flex: "0 0 calc(50% - 6px)",
  background: "#fff",
  padding: "18px",
  borderRadius: "8px",
  borderBottom: "4px solid #1a237e",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  minHeight: "150px",
  transition: "0.25s",
};

const date = {
  fontSize: "11px",
  color: "#d32f2f",
  fontWeight: "bold",
};

const title = {
  fontSize: "14px",
  color: "#333",
  margin: "10px 0",
  flex: 1,
};

const viewBtn = {
  fontSize: "12px",
  color: "#1a237e",
  fontWeight: "bold",
};

const navContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const navBtn = {
  background: "#1a237e",
  color: "#fff",
  border: "none",
  padding: "8px",
  borderRadius: "4px",
  cursor: "pointer",
};

const emptyState = {
  padding: "20px",
  color: "#777",
};

export default NoticeBoard;