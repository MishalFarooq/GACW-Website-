import React, { useState } from "react";
import {
  BookOpen,
  GraduationCap,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

export const Programs = () => {
  const [showInter, setShowInter] = useState(false);
  const [showADP, setShowADP] = useState(false);

  const interGroups = [
    "Pre-Medical",
    "Pre-Engineering",
    "ICS (Physics/Stats)",
    "I.Com",
    "FA (Humanities)",
    "FA-IT",
  ];
  const adpDepts = [
    "Computer Science",
    "History",
    "Education",
    "Islamic Studies",
    "Economics",
    "English",
  ];

  return (
    <section id="programs" className="py-8">
      <h2 className="text-xl font-bold mb-6 border-b-2 border-slate-200 pb-2 uppercase tracking-tight text-slate-800">
        Academic Programs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <button
            onClick={() => {
              setShowInter(!showInter);
              setShowADP(false);
            }}
            className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${showInter ? "bg-indigo-700 text-white border-indigo-700 shadow-md" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`}
          >
            <div className="flex items-center gap-3">
              <BookOpen size={20} />
              <span className="font-bold text-sm">Intermediate</span>
            </div>
            {showInter ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {showInter && (
            <div className="mt-2 grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 animate-in fade-in slide-in-from-top-1 duration-200">
              {interGroups.map((g, i) => (
                <div
                  key={i}
                  className="text-[11px] font-bold p-2 bg-white text-indigo-700 rounded-lg text-center border border-indigo-50 shadow-sm"
                >
                  {g}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <button
            onClick={() => {
              setShowADP(!showADP);
              setShowInter(false);
            }}
            className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${showADP ? "bg-slate-800 text-white border-slate-800 shadow-md" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`}
          >
            <div className="flex items-center gap-3">
              <GraduationCap size={20} />
              <span className="font-bold text-sm">ADP Programs</span>
            </div>
            {showADP ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {showADP && (
            <div className="mt-2 grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 animate-in fade-in slide-in-from-top-1 duration-200">
              {adpDepts.map((d, i) => (
                <div
                  key={i}
                  className="text-[11px] font-bold p-2 bg-white text-slate-700 rounded-lg text-center border border-slate-100 shadow-sm"
                >
                  {d}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// --- EVENTS SECTION (MAO COLLEGE STYLE LIST) ---
export const Events = ({ events }) => (
  <section id="events" className="py-8">
    <div className="flex items-center justify-between mb-6 border-b-2 border-slate-200 pb-2">
      <h2 className="text-xl font-bold uppercase tracking-tight text-slate-800 flex items-center gap-2">
        <Calendar size={22} className="text-indigo-800" /> Upcoming Events
      </h2>
      <span className="text-[10px] font-black bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md">
        NEWS & UPDATES
      </span>
    </div>

    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      {events && events.length > 0 ? (
        <div className="divide-y divide-slate-100">
          {events.map((e) => (
            <div
              key={e.id}
              className="p-4 hover:bg-slate-50 transition-all flex flex-col sm:flex-row sm:items-center gap-4 group"
            >
              {/* Date Box */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-16 bg-indigo-50 border border-indigo-100 rounded-lg group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors">
                <span className="text-[10px] font-black text-indigo-400 group-hover:text-indigo-100 uppercase leading-none mb-1">
                  Date
                </span>
                <span className="text-xs font-black text-indigo-700 group-hover:text-white text-center px-1 leading-tight">
                  {e.date || "TBA"}
                </span>
              </div>
              {/* Content */}
              <div className="flex-1">
                <h4 className="font-bold text-slate-800 text-base mb-1 group-hover:text-indigo-700 transition-colors flex items-center gap-2">
                  {e.title}
                  <ArrowRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-indigo-500"
                  />
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                  {e.msg}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center">
          <Calendar className="mx-auto text-slate-200 mb-2" size={40} />
          <p className="text-slate-400 text-sm font-medium italic">
            No events scheduled at the moment.
          </p>
        </div>
      )}
    </div>
  </section>
);

export const Faculty = () => (
  <section id="faculty" className="py-8 border-t border-slate-100 mt-6">
    <h2 className="text-xl font-bold mb-4 text-slate-800 uppercase tracking-tight border-l-4 border-indigo-600 pl-3">
      Faculty
    </h2>
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4">
      <Users className="text-indigo-600" size={30} />
      <p className="text-slate-600 text-sm font-medium italic">
        Our dedicated staff includes 27+ highly qualified members.
      </p>
    </div>
  </section>
);

export const Contact = () => (
  <div
    id="contact"
    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-8"
  >
    <div className="lg:col-span-12">
      <h3 className="text-xl font-bold uppercase text-slate-800 mb-6 border-b-2 border-slate-100 pb-2">
        Location & Contact
      </h3>
    </div>
    <div className="lg:col-span-7 w-full h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.8466432386!2d74.1558235!3d31.3907974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39185675c2e91121%3A0xc4870f06f9d22c95!2sGovt.%20Associate%20College%20for%20Women%20Chung!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div className="lg:col-span-5 space-y-4">
      {[
        {
          icon: <MapPin className="text-red-500" />,
          text: "Multan Road, Chung, Lahore",
          label: "Address",
        },
        {
          icon: <Phone className="text-green-600" />,
          text: "+92 42 35401234",
          label: "Phone",
        },
        {
          icon: <Mail className="text-indigo-600" />,
          text: "info@gacwchung.edu.pk",
          label: "Email",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-4 bg-white p-3 rounded-xl border border-slate-100 shadow-sm"
        >
          <div className="bg-slate-50 p-2 rounded-lg">{item.icon}</div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
              {item.label}
            </p>
            <p className="text-sm font-bold text-slate-700">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
