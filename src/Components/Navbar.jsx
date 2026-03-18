import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const aboutOptions = [
    { name: "Why Us", path: "/about/why-us" },
    { name: "History", path: "/about/history" },
    { name: "Vision", path: "/about/vision-mission" },
    { name: "Principal's Message", path: "/about/principal-message" },
    { name: "Vice Principal's Message", path: "/about/vice-principal-message" },
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

  const lifeOptions = [
    { name: "Facilities", path: "/life-at-college/facilities" },
    { name: "Events", path: "/life-at-college/events" },
    { name: "Notice Board", path: "/life-at-college/all-notices" },
    { name: "Gallery", path: "/life-at-college/gallery" },
  ];

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo-section">
        <img src={logo} alt="logo" className="logo" />

        <div className="brand">
          <span className="brand-title">GACW CHUNG</span>
          <span className="brand-sub">GOVT. ASSOCIATE COLLEGE (W) CHUNG, LAHORE</span>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Navigation */}
      <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeAll}>
          HOME
        </Link>

        {/* ABOUT */}
        <div className="dropdown">
          <div
            className="dropdown-title"
            onClick={() => toggleDropdown("about")}
          >
            ABOUT US <ChevronDown size={14} />
          </div>

          {activeDropdown === "about" && (
            <div className="dropdown-menu">
              {aboutOptions.map((item) => (
                <Link key={item.name} to={item.path} onClick={closeAll}>
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* ACADEMICS */}
        <div className="dropdown">
          <div
            className="dropdown-title"
            onClick={() => toggleDropdown("academics")}
          >
            ACADEMICS <ChevronDown size={14} />
          </div>

          {activeDropdown === "academics" && (
            <div className="dropdown-menu">
              {academicsOptions.map((item) => (
                <Link key={item.name} to={item.path} onClick={closeAll}>
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* ADMISSIONS */}
        <div className="dropdown">
          <div
            className="dropdown-title"
            onClick={() => toggleDropdown("admissions")}
          >
            ADMISSIONS <ChevronDown size={14} />
          </div>

          {activeDropdown === "admissions" && (
            <div className="dropdown-menu">
              {admissionOptions.map((item) => (
                <Link key={item.name} to={item.path} onClick={closeAll}>
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* LIFE AT COLLEGE */}
        <div className="dropdown">
          <div
            className="dropdown-title"
            onClick={() => toggleDropdown("life")}
          >
            LIFE AT COLLEGE <ChevronDown size={14} />
          </div>

          {activeDropdown === "life" && (
            <div className="dropdown-menu">
              {lifeOptions.map((item) => (
                <Link key={item.name} to={item.path} onClick={closeAll}>
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          className="contact-btn"
        >
          CONTACT US
        </button>

        {/* <Link to="/admin" onClick={closeAll}>
          ADMIN LOGIN
        </Link> */}

      </div>
    </nav>
  );
};

export default Navbar;