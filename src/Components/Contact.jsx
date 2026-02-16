import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="mt-12 bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Contact Info */}
        <div className="md:w-1/2 p-8 bg-indigo-600 text-white">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin size={20} className="shrink-0" />
              <p className="text-sm text-indigo-100">
                Multan Road, near Baba Masum Shah, Block D Chung, Lahore
              </p>
            </div>
            <div className="flex gap-3 italic font-bold">
              <Phone size={20} />
              <p>+92 42 35230206</p>
            </div>
            <div className="flex gap-3">
              <Mail size={20} />
              <p className="text-sm">info@gacwchung.edu.pk</p>
            </div>
          </div>
        </div>

        {/* Live Google Map */}
        <div className="md:w-1/2 h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.044155106603!2d74.17066847535166!3d31.412891374261774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fe5cca0f303f%3A0x4666a272b01683f0!2sGovernment%20Associate%20College%20For%20Women%20Chung%2C%20Lahore!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
