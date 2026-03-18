import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  const galleryData = {
    "Science Exhibition": [
      "/Science exhibition.jpg",
      "/Science exhibition2.jpg",
      "/Science exhibition3.jpg",
    ],

    Funfair: [
      "/fun.jpeg",
      "/fun1.jpeg",
      "/funfair5.jpeg",
    ],

    "Sports Day": [
      "/SportsDay1.jpeg",
      "/SportsDay2.jpeg",
      "/SportsDay3.jpeg",
      "/SportsDay4.jpeg",
    ],

    PTM: [
      "/PTM.jpeg",
      "/PTM1.jpeg",
      "/PTM2.jpeg",
    ],

    Convocation: [
      "/Convocation.jpeg",
    ],
  };

  const categories = Object.keys(galleryData);

  return (
    <div style={wrapper}>
      <Breadcrumbs
        links={[
          { name: "Life at College", path: "/life-at-college" },
          { name: "Gallery" },
        ]}
      />

      {!selectedCategory ? (
        <>
          <h1 style={title}>Gallery</h1>

          <div style={categoryGrid}>
            {categories.map((cat, index) => (
              <div
                key={index}
                style={categoryCard}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div style={header}>
            <h2>{selectedCategory}</h2>

            <button
              style={backBtn}
              onClick={() => setSelectedCategory(null)}
            >
              ← Back
            </button>
          </div>

          <div style={galleryGrid}>
            {galleryData[selectedCategory].map((img, index) => (
              <div
                key={index}
                style={galleryCard}
                onClick={() => setPreviewImg(img)}
              >
                <img
                  src={img}
                  alt={selectedCategory}
                  style={galleryImage}
                  loading="lazy"
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/400x300?text=Image+Coming+Soon")
                  }
                />

                <div style={overlay}>
                  {selectedCategory}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Image Preview */}
      {previewImg && (
        <div style={modal} onClick={() => setPreviewImg(null)}>
          <img src={previewImg} alt="preview" style={modalImage} />
        </div>
      )}
    </div>
  );
};

/* STYLES */

const wrapper = {
  padding: "40px 20px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const title = {
  fontSize: "36px",
  textAlign: "center",
  marginBottom: "40px",
  color: "#1a237e",
};

const categoryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
};

const categoryCard = {
  padding: "25px",
  textAlign: "center",
  background: "#f8faff",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
  borderLeft: "4px solid #1a237e",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "30px",
};

const backBtn = {
  padding: "8px 16px",
  background: "#1a237e",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const galleryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
  gap: "20px",
};

const galleryCard = {
  position: "relative",
  overflow: "hidden",
  borderRadius: "10px",
  cursor: "pointer",
};

const galleryImage = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  display: "block",
};

const overlay = {
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  background: "rgba(0,0,0,0.5)",
  color: "#fff",
  padding: "8px",
  fontSize: "14px",
  textAlign: "center",
};

const modal = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
};

const modalImage = {
  maxWidth: "90%",
  maxHeight: "90%",
};

export default Gallery;