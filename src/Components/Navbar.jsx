import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react"; // Menu icons add kiye
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false); // Close menu on click
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const academicsOptions = [
    { name: "Programs", path: "/programs" },
    { name: "Faculty", path: "/faculty" },
    { name: "Timetable", path: "/timetable" },
    { name: "Academic Calendar", path: "/calendar" },
    { name: "Class Schedule", path: "/class-schedule" },
    { name: "Examination Schedule", path: "/exams" },
    { name: "Results", path: "/results" },
  ];

  return (
    <nav className="navbar-main">
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="brand-name">GACW CHUNG</span>
          <span className="brand-sub">GOVT. ASSOCIATE COLLEGE FOR WOMEN</span>
        </div>
      </div>

      {/* Hamburger Icon - Only visible on mobile via CSS */}
      <div
        className="hamburger-icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Nav Links */}
      <div className={`nav-links-wrapper ${isMobileMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          style={linkStyle}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          HOME
        </Link>

        {/* Academics Dropdown */}
        <div
          className="dropdown-container"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            style={{
              ...btnLinkStyle,
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            ACADEMICS <ChevronDown size={14} />
          </button>

          {isDropdownOpen && (
            <div style={dropdownContainerStyle}>
              {academicsOptions.map((opt) => (
                <Link
                  key={opt.name}
                  to={opt.path}
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  style={dropdownItemStyle}
                >
                  {opt.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <button onClick={() => scrollToSection("events")} style={btnLinkStyle}>
          EVENTS
        </button>
        <button onClick={() => scrollToSection("contact")} style={btnLinkStyle}>
          CONTACT US
        </button>
        <Link
          to="/admin"
          style={linkStyle}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          ADMIN LOGIN
        </Link>
      </div>
    </nav>
  );
};

// Existing Styles as Objects
const logoStyle = {
  height: "55px",
  width: "55px",
  objectFit: "contain",
  mixBlendMode: "multiply",
};
const linkStyle = {
  color: "#333",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: "600",
  letterSpacing: "0.5px",
};
const btnLinkStyle = {
  ...linkStyle,
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  textTransform: "uppercase",
};
const dropdownContainerStyle = {
  position: "absolute",
  top: "100%",
  left: "0",
  backgroundColor: "#ffffff",
  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
  borderRadius: "8px",
  padding: "10px 0",
  minWidth: "200px",
  display: "flex",
  flexDirection: "column",
  border: "1px solid #eee",
  zIndex: 1100,
};
const dropdownItemStyle = {
  padding: "10px 20px",
  textDecoration: "none",
  fontSize: "12px",
  fontWeight: "600",
  color: "#333",
  textTransform: "uppercase",
};

export default Navbar;
