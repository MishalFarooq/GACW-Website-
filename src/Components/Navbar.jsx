import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);
  const [isLifeOpen, setIsLifeOpen] = useState(false); // Naya state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const aboutOptions = [
    { name: "Why Us", path: "/about/why-us" },
    { name: "History", path: "/about/history" },
    { name: "Vision", path: "/about/vision-mission" },
    { name: "Principal's Message", path: "/about/principal-message" },
    { name: "Our Staff", path: "/about/staff" },
    { name: "Rules & Regulations", path: "/about/rules" },
  ];

  const academicsOptions = [
    { name: "Programs", path: "/academics/programs" },
    { name: "Faculty", path: "/academics/faculty" },
    { name: "Class Schedule", path: "/academics/class-schedule" },
    { name: "Timetable", path: "/academics/timetable" },
    { name: "Exam Schedule", path: "/academics/exams" },
    { name: "Results", path: "/academics/results" },
  ];

  const admissionOptions = [
    { name: "Forms and Prospectus", path: "/admissions/forms" },
    { name: "Application Process", path: "/admissions/process" },
    { name: "Rules and Regulations", path: "/admissions/rules" },
    { name: "Fee Structure", path: "/admissions/fee" },
    { name: "Eligibility Criteria", path: "/admissions/eligibility" },
    { name: "Apply Online", path: "/admissions/apply" },
  ];

  // LIFE AT COLLEGE OPTIONS
  const lifeAtCollegeOptions = [
    { name: "Facilities", path: "/life-at-college/facilities" },
    { name: "Events", path: "/life-at-college/events" },
    { name: "Notice Board", path: "/life-at-college/notices" },
    { name: "Gallery", path: "/life-at-college/gallery" },
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

      <div
        className="hamburger-icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <div className={`nav-links-wrapper ${isMobileMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          style={linkStyle}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          HOME
        </Link>

        {/* ABOUT US DROP DOWN */}
        <div
          className="dropdown-container"
          onMouseEnter={() => setIsAboutOpen(true)}
          onMouseLeave={() => setIsAboutOpen(false)}
        >
          <Link
            to="/about"
            style={dropdownLinkStyle}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT US <ChevronDown size={14} />
          </Link>
          {isAboutOpen && (
            <div style={dropdownContainerStyle}>
              {aboutOptions.map((opt) => (
                <Link
                  key={opt.name}
                  to={opt.path}
                  style={dropdownItemStyle}
                  onClick={() => {
                    setIsAboutOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {opt.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* ACADEMICS DROP DOWN */}
        <div
          className="dropdown-container"
          onMouseEnter={() => setIsAcademicsOpen(true)}
          onMouseLeave={() => setIsAcademicsOpen(false)}
        >
          <Link
            to="/academics"
            style={dropdownLinkStyle}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ACADEMICS <ChevronDown size={14} />
          </Link>
          {isAcademicsOpen && (
            <div style={dropdownContainerStyle}>
              {academicsOptions.map((opt) => (
                <Link
                  key={opt.name}
                  to={opt.path}
                  style={dropdownItemStyle}
                  onClick={() => {
                    setIsAcademicsOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {opt.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* ADMISSIONS DROP DOWN */}
        <div
          className="dropdown-container"
          onMouseEnter={() => setIsAdmissionsOpen(true)}
          onMouseLeave={() => setIsAdmissionsOpen(false)}
        >
          <Link
            to="/admissions"
            style={dropdownLinkStyle}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ADMISSIONS <ChevronDown size={14} />
          </Link>
          {isAdmissionsOpen && (
            <div style={dropdownContainerStyle}>
              {admissionOptions.map((opt) => (
                <Link
                  key={opt.name}
                  to={opt.path}
                  style={dropdownItemStyle}
                  onClick={() => {
                    setIsAdmissionsOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {opt.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* LIFE AT COLLEGE DROP DOWN */}
        <div
          className="dropdown-container"
          onMouseEnter={() => setIsLifeOpen(true)}
          onMouseLeave={() => setIsLifeOpen(false)}
        >
          <Link
            to="/life-at-college"
            style={dropdownLinkStyle}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            LIFE AT COLLEGE <ChevronDown size={14} />
          </Link>
          {isLifeOpen && (
            <div style={dropdownContainerStyle}>
              {lifeAtCollegeOptions.map((opt) => (
                <Link
                  key={opt.name}
                  to={opt.path}
                  style={dropdownItemStyle}
                  onClick={() => {
                    setIsLifeOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {opt.name}
                </Link>
              ))}
            </div>
          )}
        </div>

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

// --- STYLES ---

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

const dropdownLinkStyle = {
  ...linkStyle,
  display: "flex",
  alignItems: "center",
  gap: "4px",
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
  borderRadius: "2px",
  padding: "5px 0",
  minWidth: "230px",
  display: "flex",
  flexDirection: "column",
  border: "1px solid #ddd",
  zIndex: 1100,
};

const dropdownItemStyle = {
  padding: "12px 20px",
  textDecoration: "none",
  fontSize: "12px",
  fontWeight: "600",
  color: "#333",
  textTransform: "uppercase",
  display: "block",
  borderBottom: "1px solid #f1f1f1",
  transition: "all 0.2s ease",
};

export default Navbar;
