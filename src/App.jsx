import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import {
  Users,
  Calendar,
  Clock,
  ClipboardList,
  FileCheck,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./App.css";

// Components & Pages Import
import Navbar from "./Components/Navbar";
import NoticeBoard from "./Components/NoticeBoard";
import AllNotices from "./Components/AllNotices";
import LoginModal from "./Components/LoginModal";
import AdminPanel from "./Components/AdminPanel";
import ProgramsPage from "./Components/ProgramsPage";
import FacultyPage from "./Components/FacultyPage";
import TimetablePage from "./Components/TimetablePage";
import CalendarPage from "./Components/CalendarPage";
import ClassSchedulePage from "./Components/ClassSchedulePage";
import ExamSchedulePage from "./Components/ExamSchedulePage";
import ResultsPage from "./Components/ResultsPage";

// Firebase
import { db } from "./firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const sliderRef = useRef(null);

  // Firebase Data Fetching
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

  // --- INFINITE AUTO-LOOP LOGIC ---
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        // Agar end par hai to start (0) par le jao
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollTo({
            left: scrollLeft + (window.innerWidth < 768 ? 220 : 300),
            behavior: "smooth",
          });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft } = sliderRef.current;
      const scrollAmount = window.innerWidth < 768 ? 220 : 300;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const HomePage = () => (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      {/* HERO SECTION */}
      <section id="home" style={sectionStyle}>
        <h1 className="hero-title">GACW CHUNG</h1>
        <p className="hero-subtitle">Empowering Women Through Excellence</p>
      </section>

      <NoticeBoard notices={notices} />

      {/* ACADEMICS SECTION (RESPONSIVE SLIDER) */}
      <section id="academics" style={academicsSectionStyle}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={headerContainer}>
            <div>
              <p style={subHeadingStyle}>OUR INSIGHTS</p>
              <h2 style={mainHeadingStyle}>Academics</h2>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => scroll("left")}
                className="arrow-btn"
                style={arrowBtnStyle}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="arrow-btn"
                style={arrowBtnStyle}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <p style={descriptionStyle}>
            Our academic programs offer quality education and critical insight
            into the challenges of the world.
          </p>

          <div ref={sliderRef} className="hide-scrollbar" style={sliderWrapper}>
            <div style={sliderContent}>
              {[
                {
                  to: "/programs",
                  icon: <GraduationCap size={45} />,
                  title: "Programs",
                },
                { to: "/faculty", icon: <Users size={45} />, title: "Faculty" },
                {
                  to: "/calendar",
                  icon: <Calendar size={45} />,
                  title: "Calendar",
                },
                {
                  to: "/class-schedule",
                  icon: <Clock size={45} />,
                  title: "Class Schedule",
                },
                {
                  to: "/exams",
                  icon: <ClipboardList size={45} />,
                  title: "Exam Schedule",
                },
                {
                  to: "/results",
                  icon: <FileCheck size={45} />,
                  title: "Exam Results",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  style={{ textDecoration: "none" }}
                >
                  <div className="mao-card">
                    <div className="icon-box">{item.icon}</div>
                    <h3 className="card-title">{item.title}</h3>
                    <span className="view-link">View All</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section
        id="events"
        style={{ padding: "60px 20px", backgroundColor: "#f4f4f4" }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#1a237e",
            marginBottom: "30px",
          }}
        >
          UPCOMING EVENTS
        </h2>
        <div style={eventsSliderStyle} className="hide-scrollbar">
          {events.map((e) => (
            <div key={e.id} style={eventCardStyle}>
              <span style={{ color: "#e91e63", fontWeight: "bold" }}>
                {e.date}
              </span>
              <h4 style={{ marginTop: "10px" }}>{e.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={contactSectionStyle}>
        <h2>CONTACT US</h2>
        <p>Main Multan Road, Chung, Lahore</p>
        <p>Phone: (042) 1234567 | Email: info@gacwchung.edu.pk</p>
      </section>
    </div>
  );

  return (
    <Router>
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
        <Route path="/all-notices" element={<AllNotices notices={notices} />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/timetable" element={<TimetablePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/class-schedule" element={<ClassSchedulePage />} />
        <Route path="/exams" element={<ExamSchedulePage />} />
        <Route path="/results" element={<ResultsPage />} />
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

// --- STYLES (Optimized for Responsiveness) ---
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
  transition: "0.3s",
};

const headerContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  flexWrap: "wrap",
  gap: "15px",
  marginBottom: "15px",
};

const sectionStyle = {
  minHeight: "400px",
  padding: "40px 20px",
  backgroundColor: "#1a237e",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

const academicsSectionStyle = {
  padding: "60px 5%",
  backgroundColor: "#fdfdfd",
};

const subHeadingStyle = {
  color: "#888",
  fontWeight: "bold",
  fontSize: "14px",
  letterSpacing: "1px",
  margin: 0,
};

const mainHeadingStyle = {
  fontSize: "clamp(28px, 5vw, 42px)",
  color: "#1a237e",
  margin: "5px 0",
  fontWeight: "bold",
};

const descriptionStyle = {
  color: "#666",
  maxWidth: "600px",
  lineHeight: "1.6",
  marginBottom: "40px",
  fontSize: "15px",
};

const sliderWrapper = {
  overflowX: "auto",
  paddingBottom: "20px",
  scrollBehavior: "smooth",
  WebkitOverflowScrolling: "touch",
};

const sliderContent = {
  display: "flex",
  gap: "20px",
  minWidth: "max-content",
  padding: "10px",
};

const eventsSliderStyle = {
  display: "flex",
  gap: "20px",
  overflowX: "auto",
  padding: "10px",
};

const eventCardStyle = {
  minWidth: "260px",
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  border: "1px solid #eee",
};

const contactSectionStyle = {
  padding: "60px 20px",
  textAlign: "center",
  backgroundColor: "#1a237e",
  color: "white",
};

export default App;
