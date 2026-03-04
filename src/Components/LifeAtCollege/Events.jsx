import React from "react";
import { Calendar, Clock } from "lucide-react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export default function Events({ events }) {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Breadcrumbs - Matching other pages style */}
      <Breadcrumbs
        links={[
          { name: "Life at College", path: "/life-at-college" },
          { name: "Events" },
        ]}
      />

      {/* 2. Main Content Area with standard padding */}
      <section className="px-[5%] py-10 max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <span className="bg-indigo-600 text-white p-2 rounded-xl">
              <Calendar size={24} />
            </span>
            Upcoming Events
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events && events.length > 0 ? (
            events.map((e) => (
              <div
                key={e.id}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden"
              >
                {/* Decorative corner shape */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-10 -mt-10 group-hover:bg-indigo-100 transition-colors"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-indigo-600 mb-4">
                    <Clock size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {e.date || "Date to be announced"}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-xl mb-3 leading-snug">
                    {e.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed line-clamp-3">
                    {e.msg ||
                      e.description ||
                      "Join us for this exciting event at GACW Chung!"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
              <p className="text-slate-400 font-medium italic text-lg">
                Abhi koi event schedule nahi hai.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
