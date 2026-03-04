import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Miscellaneous aur College Walks nikal di hain
  const categories = [
    "Science Exhibition",
    "Funfair",
    "Sports Day",
    "Seminars",
    "Kashmir Day",
  ];

  const getImagePath = (cat, index) => {
    // 1. Science Exhibition (.jpg)
    if (cat === "Science Exhibition") {
      const suffix = index === 0 ? "" : index;
      return `/Science exhibition${suffix}.jpg`;
    }

    // 2. Sports Day (Exact Name: SportsDay1.jpeg)
    if (cat === "Sports Day") {
      return `/SportsDay${index + 1}.jpeg`;
    }

    // 3. Funfair (Agar aapne name funfair1.jpeg rakha hai)
    if (cat === "Funfair") {
      return `/funfair${index + 1}.jpeg`;
    }

    return `/${cat}.jpg`;
  };

  return (
    <div className="gallery-clean-wrapper">
      <div className="clean-breadcrumb">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>{" "}
        /
        <Link to="/life-at-college" className="breadcrumb-link">
          {" "}
          Life at College
        </Link>{" "}
        /{" "}
        <span
          onClick={() => setSelectedCategory(null)}
          className="breadcrumb-current clickable-text"
        >
          Gallery
        </span>
        {selectedCategory && (
          <span className="active-cat-path"> / {selectedCategory}</span>
        )}
      </div>

      {!selectedCategory ? (
        <div className="list-only-view">
          <h1 className="minimal-title">Gallery</h1>
          <ul className="no-line-list">
            {categories.map((cat, index) => (
              <li key={index} onClick={() => setSelectedCategory(cat)}>
                • {cat}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="grid-only-view">
          <div className="grid-header-minimal">
            <h2 className="cat-title">{selectedCategory}</h2>
            <span
              className="back-text"
              onClick={() => setSelectedCategory(null)}
            >
              ← Back
            </span>
          </div>

          <div className="borderless-grid">
            {[0, 1, 2, 3].map((idx) => (
              <div key={idx} className="borderless-card">
                <img
                  src={getImagePath(selectedCategory, idx)}
                  alt={selectedCategory}
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/400x300?text=Image+Coming+Soon")
                  }
                />
                <div className="dark-label">{selectedCategory}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
