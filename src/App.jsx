import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
} from "react-router-dom";
import {
  Users,
  Clock,
  ClipboardList,
  FileCheck,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  FileText,
  ShieldCheck,
  CreditCard,
  CheckCircle,
  LogIn,
  LayoutGrid,
  Image as ImageIcon,
  Calendar,
  Bell,
  Building2,
} from "lucide-react";
import "./App.css";

// --- Components ---
import Navbar from "./Components/Navbar";
import LoginModal from "./Components/LoginModal";
import AdminPanel from "./Components/AdminPanel";
import LifeAtCollegeMain from "./Components/LifeAtCollege/LifeAtCollegeMain";
import Facilities from "./Components/LifeAtCollege/Facilities";
import Gallery from "./Components/LifeAtCollege/Gallery";
import AllNotices from "./Components/LifeAtCollege/AllNotices";
import Events from "./Components/LifeAtCollege/Events";
import AcademicsMain from "./Components/Academics/AcademicsMain";
import ProgramsPage from "./Components/Academics/ProgramsPage";
import FacultyPage from "./Components/Academics/FacultyPage";
import TimetablePage from "./Components/Academics/TimetablePage";
import ClassSchedulePage from "./Components/Academics/ClassSchedulePage";
import ExamSchedulePage from "./Components/Academics/ExamSchedulePage";
import ResultsPage from "./Components/Academics/ResultsPage";
import AboutUsMain from "./Components/About/AboutUsMain";
import History from "./Components/About/History";
import VisionMission from "./Components/About/VisionMission";
import PrincipalMessage from "./Components/About/PrincipalMessage";
import OurStaff from "./Components/About/OurStaff";
import RulesRegulations from "./Components/About/RulesRegulations";
import WhyUs from "./Components/About/WhyUs";
import AdmissionsMain from "./Components/Admissions/AdmissionsPage";
import ProspectusPage from "./Components/Admissions/ProspectusPage";
import AppProcessPage from "./Components/Admissions/AppProcessPage";
import RulesPage from "./Components/Admissions/RulesPage";
import FeePage from "./Components/Admissions/FeePage";
import EligibilityPage from "./Components/Admissions/EligibilityPage";
import ApplyOnlinePage from "./Components/Admissions/ApplyOnlinePage";
import NoticeBoard from "./Components/LifeAtCollege/NoticeBoard";

// Firebase
import { db } from "./firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

// --- Internal Home Gallery Component ---
const HomeGallery = () => {
  const visuals = [
    { id: 1, title: "Science Exhibition", img: "/Science exhibition.jpg" },
    { id: 2, title: "Funfair 2025", img: "/funfair1.jpeg" },
    { id: 3, title: "Sports Day", img: "/Science exhibition1.jpg" },
    { id: 4, title: "Kashmir Day", img: "/kashmir.png" },
  ];

  return (
    <section style={{ padding: "80px 5%", backgroundColor: "#f8faff" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <p style={subHeadingStyle}>VISUALS</p>
        <h2 style={mainHeadingStyle}>College At A Glance</h2>
        <div
          style={{
            width: "40px",
            height: "3px",
            backgroundColor: "#0d1137",
            margin: "15px auto",
          }}
        ></div>
      </div>
      <div className="home-gallery-grid" style={galleryGridStyle}>
        {visuals.map((item) => (
          <div key={item.id} className="home-gallery-card">
            <div
              style={{
                position: "relative",
                height: "220px",
                overflow: "hidden",
                border: "1px solid #eee",
                padding: "4px",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x300?text=Image+Not+Found";
                }}
              />
              <div className="gallery-dark-strip">
                <span>{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link to="/life-at-college/gallery">
          <button className="gallery-view-btn">VIEW ALL GALLERY</button>
        </Link>
      </div>
    </section>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const sliderRef = useRef(null);
  const eventSliderRef = useRef(null);

  useEffect(() => {
    const qN = query(collection(db, "notices"), orderBy("createdAt", "desc"));
    const qE = query(collection(db, "events"), orderBy("createdAt", "desc"));
    const unsubN = onSnapshot(qN, (s) =>
      setNotices(s.docs.map((d) => ({ ...d.data(), id: d.id }))),
    );
    const unsubE = onSnapshot(qE, (s) =>
      setEvents(s.docs.map((d) => ({ ...d.data(), id: d.id }))),
    );
    return () => {
      unsubN();
      unsubE();
    };
  }, []);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = window.innerWidth < 768 ? 220 : 350;
      const scrollTo =
        direction === "left"
          ? ref.current.scrollLeft - scrollAmount
          : ref.current.scrollLeft + scrollAmount;
      ref.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const HomePage = () => (
    <div style={{ backgroundColor: "#fff" }}>
      {/* 1. Hero Section */}
      <section id="home" style={heroSectionStyle}>
        <div style={heroOverlayStyle}>
          <p
            style={{
              letterSpacing: "4px",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            ESTABLISHED 2026
          </p>
          <h1
            className="hero-title"
            style={{ fontSize: "clamp(40px, 8vw, 70px)", fontWeight: "900" }}
          >
            GACW CHUNG
          </h1>
          <p
            className="hero-subtitle"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "18px",
              opacity: "0.9",
            }}
          >
            Nurturing Excellence, Empowering Women. Join Lahore's Premier
            Educational Institution.
          </p>
          <div style={{ marginTop: "30px" }}>
            <Link
              to="/admissions/apply"
              className="hero-btn"
              style={{
                padding: "15px 40px",
                borderRadius: "50px",
                fontWeight: "bold",
              }}
            >
              Apply Online 2025-26
            </Link>
          </div>
        </div>
      </section>

      <NoticeBoard notices={notices} />

      {/* 2. Academics Slider */}
      <section id="academics-home" style={{ padding: "80px 5%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={headerContainer}>
            <div>
              <p style={subHeadingStyle}>ACADEMIC EXCELLENCE</p>
              <h2 style={mainHeadingStyle}>Explore Programs</h2>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => scroll(sliderRef, "left")}
                style={arrowBtnStyle}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll(sliderRef, "right")}
                style={arrowBtnStyle}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          <div ref={sliderRef} className="hide-scrollbar" style={sliderWrapper}>
            <div style={sliderContent}>
              {[
                {
                  to: "/academics/programs",
                  icon: <GraduationCap size={35} />,
                  title: "Degree Programs",
                },
                {
                  to: "/academics/faculty",
                  icon: <Users size={35} />,
                  title: "Expert Faculty",
                },
                {
                  to: "/academics/class-schedule",
                  icon: <Clock size={35} />,
                  title: "Class Timings",
                },
                {
                  to: "/academics/exams",
                  icon: <ClipboardList size={35} />,
                  title: "Exams Portal",
                },
                {
                  to: "/academics/results",
                  icon: <FileCheck size={35} />,
                  title: "Academic Results",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  style={{ textDecoration: "none" }}
                >
                  <div className="uni-slider-card">
                    <div className="uni-slider-icon">{item.icon}</div>
                    <h3
                      style={{
                        fontSize: "18px",
                        color: "#1a237e",
                        fontWeight: "700",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "#777" }}>
                      View details
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Admissions Grid */}
      <section
        id="admissions-home"
        style={{ padding: "80px 5%", backgroundColor: "#f8faff" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={subHeadingStyle}>ADMISSIONS OPEN</p>
            <h2 style={{ ...mainHeadingStyle, fontSize: "40px" }}>
              Begin Your Journey
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px",
            }}
          >
            {[
              {
                to: "/admissions/forms",
                icon: <FileText size={24} />,
                title: "Prospectus",
                desc: "Download handbook.",
              },
              {
                to: "/admissions/process",
                icon: <LayoutGrid size={24} />,
                title: "How to Apply",
                desc: "Admission roadmap.",
              },
              {
                to: "/admissions/rules",
                icon: <ShieldCheck size={24} />,
                title: "Rules & Policy",
                desc: "Guidelines.",
              },
              {
                to: "/admissions/fee",
                icon: <CreditCard size={24} />,
                title: "Fee Structure",
                desc: "Academic costs.",
              },
              {
                to: "/admissions/eligibility",
                icon: <CheckCircle size={24} />,
                title: "Criteria",
                desc: "Check eligibility.",
              },
              {
                to: "/admissions/apply",
                icon: <LogIn size={24} />,
                title: "Application Portal",
                desc: "Apply online.",
              },
            ].map((item, index) => (
              <Link key={index} to={item.to} style={{ textDecoration: "none" }}>
                <div className="uni-grid-card">
                  <div className="uni-grid-icon-box">{item.icon}</div>
                  <div>
                    <h3 style={profCardTitle}>{item.title}</h3>
                    <p style={profCardDesc}>{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Life At College Links (AB YE UPAR HAI) */}
      <section style={{ padding: "80px 5%", backgroundColor: "#fff" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
        >
          <p style={subHeadingStyle}>EXPLORE MORE</p>
          <h2 style={mainHeadingStyle}>Life At College</h2>
          <div
            style={{
              width: "40px",
              height: "3px",
              backgroundColor: "#1a237e",
              margin: "10px auto 40px",
            }}
          ></div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "Facilities",
                icon: <Building2 size={30} />,
                path: "/life-at-college/facilities",
                color: "#3f51b5",
              },
              {
                title: "Events",
                icon: <Calendar size={30} />,
                path: "/life-at-college/events",
                color: "#e91e63",
              },
              {
                title: "Gallery",
                icon: <ImageIcon size={30} />,
                path: "/life-at-college/gallery",
                color: "#4caf50",
              },
              {
                title: "Notice Board",
                icon: <Bell size={30} />,
                path: "/life-at-college/all-notices",
                color: "#ff9800",
              },
            ].map((card, idx) => (
              <Link key={idx} to={card.path} style={{ textDecoration: "none" }}>
                <div className="home-life-card" style={lifeSmallCardStyle}>
                  <div style={{ color: card.color, marginBottom: "12px" }}>
                    {card.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "18px",
                      color: "#1a237e",
                      fontWeight: "700",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#888",
                      marginTop: "5px",
                    }}
                  >
                    Explore Details
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Home Gallery Visuals (AB YE NICHE HAI) */}
      <HomeGallery />

      {/* 6. Upcoming Events Slider */}
      <section
        id="events-home"
        style={{ padding: "80px 5%", backgroundColor: "#fff" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={headerContainer}>
            <div>
              <p style={subHeadingStyle}>LATEST</p>
              <h2 style={mainHeadingStyle}>Upcoming Events</h2>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => scroll(eventSliderRef, "left")}
                style={arrowBtnStyle}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll(eventSliderRef, "right")}
                style={arrowBtnStyle}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          <div
            ref={eventSliderRef}
            className="hide-scrollbar"
            style={{ overflowX: "auto", scrollBehavior: "smooth" }}
          >
            <div style={{ display: "flex", gap: "25px", padding: "10px" }}>
              {events.map((e) => (
                <div
                  key={e.id}
                  className="home-event-card"
                  style={eventCardStyle}
                >
                  <div style={eventCardDateBox}>
                    <Clock size={14} />
                    <span>{e.date}</span>
                  </div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#0f172a",
                    }}
                  >
                    {e.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" style={contactSectionStyle}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
            GOVT. ASSOCIATE COLLEGE FOR WOMEN
          </h2>
          <p style={{ opacity: "0.8" }}>Main Multan Road, Chung, Lahore</p>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            <span>📞 (042) 1234567</span>
            <span>📧 info@gacwchung.edu.pk</span>
          </div>
        </div>
      </footer>
    </div>
  );

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      {isAdmin && (
        <AdminPanel
          notices={notices}
          events={events}
          onClose={() => setIsAdmin(false)}
        />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/*" element={<AboutUsMain />} />
        <Route path="/academics/*" element={<AcademicsMain />} />
        <Route path="/academics/programs" element={<ProgramsPage />} />
        <Route path="/academics/faculty" element={<FacultyPage />} />
        <Route
          path="/academics/class-schedule"
          element={<ClassSchedulePage />}
        />
        <Route path="/academics/exams" element={<ExamSchedulePage />} />
        <Route path="/academics/results" element={<ResultsPage />} />
        <Route path="/admissions/*" element={<AdmissionsMain />} />
        <Route path="/admissions/forms" element={<ProspectusPage />} />
        <Route path="/admissions/process" element={<AppProcessPage />} />
        <Route path="/admissions/rules" element={<RulesPage />} />
        <Route path="/admissions/fee" element={<FeePage />} />
        <Route path="/admissions/eligibility" element={<EligibilityPage />} />
        <Route path="/admissions/apply" element={<ApplyOnlinePage />} />
        <Route path="/life-at-college" element={<LifeAtCollegeMain />} />
        <Route path="/life-at-college/facilities" element={<Facilities />} />
        <Route path="/life-at-college/gallery" element={<Gallery />} />
        <Route
          path="/life-at-college/events"
          element={<Events events={events} />}
        />
        <Route
          path="/life-at-college/all-notices"
          element={<AllNotices notices={notices} />}
        />
        <Route
          path="/admin"
          element={
            isAdmin ? (
              <Navigate to="/" />
            ) : (
              <LoginModal
                isOpen={true}
                onLogin={() => setIsAdmin(true)}
                onClose={() => window.history.back()}
              />
            )
          }
        />
      </Routes>
    </Router>
  );
}

// --- ALL STYLES ---
const galleryGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
  maxWidth: "1200px",
  margin: "0 auto",
};
const lifeSmallCardStyle = {
  backgroundColor: "#fff",
  padding: "30px 20px",
  borderRadius: "15px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  border: "1px solid #eee",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "0.3s ease",
};
const heroSectionStyle = {
  minHeight: "80vh",
  backgroundImage: "url('/hero-bg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};
const heroOverlayStyle = {
  backgroundColor: "rgba(10, 15, 60, 0.75)",
  padding: "40px",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};
const headerContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  marginBottom: "40px",
};
const arrowBtnStyle = {
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  border: "1px solid #ddd",
  backgroundColor: "white",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#1a237e",
};
const subHeadingStyle = {
  color: "#1a237e",
  fontWeight: "bold",
  fontSize: "14px",
  letterSpacing: "2px",
};
const mainHeadingStyle = {
  fontSize: "36px",
  color: "#1a237e",
  margin: "5px 0",
  fontWeight: "800",
};
const sliderWrapper = {
  overflowX: "auto",
  paddingBottom: "25px",
  scrollBehavior: "smooth",
};
const sliderContent = { display: "flex", gap: "25px", padding: "10px" };
const contactSectionStyle = {
  padding: "60px 20px",
  textAlign: "center",
  backgroundColor: "#0d1137",
  color: "white",
};
const profCardTitle = { fontSize: "18px", color: "#1a237e", fontWeight: "700" };
const profCardDesc = { fontSize: "13px", color: "#666", margin: 0 };
const eventCardStyle = {
  minWidth: "280px",
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "1.5rem",
  flexShrink: 0,
  border: "1px solid #f1f5f9",
};
const eventCardDateBox = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#4f46e5",
  marginBottom: "12px",
};

export default App;
