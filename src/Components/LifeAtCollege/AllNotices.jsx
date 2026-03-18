import React, { useState, useMemo } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const AllNotices = ({ notices = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 8;

  const totalPages = Math.ceil(notices.length / noticesPerPage);

  const currentNotices = useMemo(() => {
    const start = (currentPage - 1) * noticesPerPage;
    const end = start + noticesPerPage;
    return notices.slice(start, end);
  }, [currentPage, notices]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={wrapper}>
      {/* Breadcrumb */}
      <div style={breadcrumbBar}>
        <Breadcrumbs
          links={[
            { name: "Life at College", path: "/life-at-college" },
            { name: "Notice Board" },
          ]}
        />
      </div>

      <div style={container}>
        <h1 style={title}>Notice Board</h1>

        <div style={noticeList}>
          {currentNotices.length > 0 ? (
            currentNotices.map((notice, index) => (
              <div key={notice.id || index} className="notice-row" style={row}>
                <span style={date}>
                  {notice.date || "Oct 05, 2025"}
                </span>

                <a
                  href={notice.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={link}
                >
                  {notice.title}
                </a>
              </div>
            ))
          ) : (
            <div style={emptyBox}>No notices available.</div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={pagination}>
            <button
              style={pageBtn}
              disabled={currentPage === 1}
              onClick={() => goToPage(1)}
            >
              « First
            </button>

            <button
              style={pageBtn}
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  style={{
                    ...pageBtn,
                    background: currentPage === page ? "#1a237e" : "#f8f9fa",
                    color: currentPage === page ? "#fff" : "#1a237e",
                  }}
                >
                  {page}
                </button>
              );
            })}

            <button
              style={pageBtn}
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>

      <style>{`
        .notice-row:hover {
          background:#fafafa;
          padding-left:18px !important;
        }
      `}</style>
    </div>
  );
};

/* ---------- STYLES ---------- */

const wrapper = {
  minHeight: "100vh",
  background: "#ffffff",
};

const breadcrumbBar = {
  background: "#1a237e",
  padding: "12px 5%",
  color: "#fff",
};

const container = {
  maxWidth: "1100px",
  margin: "40px auto",
  padding: "0 20px",
};

const title = {
  fontSize: "28px",
  color: "#1a237e",
  fontWeight: "700",
  marginBottom: "30px",
  borderBottom: "2px solid #f0f0f0",
  paddingBottom: "15px",
};

const noticeList = {
  background: "#fff",
};

const row = {
  padding: "16px 10px",
  borderBottom: "1px solid #f0f0f0",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  transition: "0.2s",
};

const date = {
  fontSize: "13px",
  fontWeight: "700",
  color: "#000",
};

const link = {
  fontSize: "16px",
  color: "#1a237e",
  textDecoration: "none",
  borderBottom: "1px dotted #1a237e",
  width: "fit-content",
};

const emptyBox = {
  padding: "40px",
  textAlign: "center",
  color: "#999",
};

const pagination = {
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
  marginTop: "40px",
};

const pageBtn = {
  padding: "8px 14px",
  cursor: "pointer",
  fontSize: "13px",
  border: "1px solid #ddd",
  background: "#f8f9fa",
  color: "#1a237e",
};

export default AllNotices;