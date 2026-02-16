import React, { useState } from "react";
import {
  X,
  Send,
  Trash2,
  Megaphone,
  Calendar,
  Paperclip,
  FileText,
  Image as ImageIcon,
} from "lucide-react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

export default function AdminPanel({ notices, events, onClose }) {
  const [activeTab, setActiveTab] = useState("notices");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return alert("Title is required!");
    setLoading(true);

    try {
      let uploadedFileUrl = "";

      if (file) {
        const formData = new FormData();
        // 401 Error se bachne ke liye preset pehle add karein
        formData.append("upload_preset", "portal_preset");
        formData.append("file", file);
        formData.append("cloud_name", "dset5b29x");

        // Note: Headers hataye gaye hain taake 401 error na aaye
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dset5b29x/auto/upload",
          { method: "POST", body: formData },
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.error.message || "Cloudinary upload failed",
          );
        }

        const fileData = await response.json();
        uploadedFileUrl = fileData.secure_url;
      }

      const collectionName = activeTab === "notices" ? "notices" : "events";
      const payload = {
        title,
        msg,
        fileUrl: uploadedFileUrl,
        fileType: file?.type.includes("pdf") ? "pdf" : "image",
        createdAt: serverTimestamp(),
        date:
          activeTab === "events"
            ? date || "Date TBA"
            : new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }),
      };

      await addDoc(collection(db, collectionName), payload);

      setTitle("");
      setMsg("");
      setDate("");
      setFile(null);
      alert(`${activeTab === "notices" ? "Notice" : "Event"} Published!`);
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, type) => {
    if (
      window.confirm(
        `Delete this ${type === "notices" ? "Notice" : "Event"} permanently?`,
      )
    ) {
      try {
        await deleteDoc(doc(db, type, id));
      } catch (error) {
        alert("Delete failed: " + error.message);
      }
    }
  };

  return (
    /* Background Transparency: bg-black/40 aur backdrop-blur-sm zimmadar hain */
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex justify-end">
      {/* Click outside to close (Optional but professional) */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div>
            <h2 className="text-xl font-black text-indigo-700 uppercase tracking-tight">
              GACW Control
            </h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Management Portal
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-red-500 transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form aur List... (Baqi code same hai) */}
        {/* ... (Tab Switcher, Form, Live List) ... */}
        {/* Note: Inka logic aapka pehle hi perfect tha */}

        {/* Aapka baqi code jo form aur list render karta hai yahan aayega */}
        <div className="flex gap-2 mb-6 bg-slate-100 p-1 rounded-2xl">
          <button
            onClick={() => setActiveTab("notices")}
            className={`flex-1 py-2.5 rounded-xl font-bold text-[11px] flex items-center justify-center gap-2 transition-all ${activeTab === "notices" ? "bg-white shadow-sm text-indigo-700" : "text-slate-500 hover:text-indigo-400"}`}
          >
            <Megaphone size={14} /> NOTICES
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`flex-1 py-2.5 rounded-xl font-bold text-[11px] flex items-center justify-center gap-2 transition-all ${activeTab === "events" ? "bg-white shadow-sm text-pink-600" : "text-slate-500 hover:text-pink-400"}`}
          >
            <Calendar size={14} /> EVENTS
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <input
            className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20 text-sm font-medium"
            placeholder={`${activeTab === "notices" ? "Notice" : "Event"} Title...`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {activeTab === "events" && (
            <input
              className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 ring-pink-500/20 text-sm font-medium"
              placeholder="Event Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          )}
          <textarea
            className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 ring-indigo-500/20 text-sm h-24 resize-none"
            placeholder="Write details here..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />

          <label
            className={`flex items-center gap-3 p-4 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${file ? "border-green-200 bg-green-50" : "border-slate-200 bg-slate-50 hover:border-indigo-300"}`}
          >
            <Paperclip className="text-slate-400" />
            <div className="flex-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase">
                {file ? "File Ready" : "Attachment"}
              </p>
              <p className="text-xs text-slate-600 truncate">
                {file ? file.name : "Image or PDF"}
              </p>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/*,application/pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-white shadow-lg flex items-center justify-center gap-3 transition-all ${loading ? "bg-slate-300" : activeTab === "notices" ? "bg-indigo-600" : "bg-pink-600"}`}
          >
            {loading ? "Publishing..." : "Confirm & Publish"}
          </button>
        </form>

        {/* Database List (Simplified) */}
        <div className="flex-1 overflow-y-auto">
          {(activeTab === "notices" ? notices : events)?.map((item) => (
            <div key={item.id} className="flex justify-between p-3 border-b">
              <span className="text-xs font-bold">{item.title}</span>
              <button
                onClick={() => handleDelete(item.id, activeTab)}
                className="text-red-400"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
