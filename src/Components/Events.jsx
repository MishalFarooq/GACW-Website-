import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function Events({ events }) {
  return (
    <section className="mt-10 mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2 uppercase tracking-tight">
          <span className="bg-indigo-600 text-white p-2 rounded-xl">
            <Calendar size={20} />
          </span>
          Upcoming Events
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events && events.length > 0 ? (
          events.map((e) => (
            <div
              key={e.id}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-10 -mt-10 group-hover:bg-indigo-100 transition-colors"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-indigo-600 mb-3">
                  <Clock size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {e.date || "Date to be announced"}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-2 leading-snug">
                  {e.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {e.msg ||
                    e.description ||
                    "Join us for this exciting event at GACW Chung!"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-medium italic">
              Abhi koi event schedule nahi hai.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
