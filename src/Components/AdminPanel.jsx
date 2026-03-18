import React, { useState } from "react";
import {
  X,
  Trash2,
  Megaphone,
  Calendar,
  Paperclip,
  Send
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { db } from "../firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp
} from "firebase/firestore";

export default function AdminPanel({ notices, events }) {

  const navigate = useNavigate();

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

      /* Upload file ONLY for notices */
      if (activeTab === "notices" && file) {

        const formData = new FormData();
        formData.append("upload_preset", "portal_preset");
        formData.append("file", file);
        formData.append("cloud_name", "dset5b29x");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dset5b29x/auto/upload",
          { method: "POST", body: formData }
        );

        const fileData = await response.json();
        uploadedFileUrl = fileData.secure_url;
      }

      const collectionName =
        activeTab === "notices" ? "notices" : "events";

      const payload = {
        title,
        msg,
        fileUrl: uploadedFileUrl,
        fileType:
          activeTab === "notices"
            ? file?.type?.includes("pdf")
              ? "pdf"
              : "image"
            : null,
        createdAt: serverTimestamp(),
        date:
          activeTab === "events"
            ? date || "Date TBA"
            : new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric"
              })
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

    if (!window.confirm("Delete permanently?")) return;

    await deleteDoc(doc(db, type, id));
  };

return (
  <div className="min-h-screen w-full bg-slate-50 flex justify-center ">

    <div className="w-full max-w-6xl bg-white min-h-screen shadow-xl flex flex-col mt-12">

      {/* HEADER */}
      <div className="flex items-center justify-between px-8 py-6 border-b">

        <div>
          <h2 className="text-xl font-black text-indigo-700">
            GACW Admin Panel
          </h2>
          <p className="text-xs text-slate-400">
            College Management System
          </p>
        </div>

        <button
          onClick={() => navigate("/admin")}
          className="text-slate-400 hover:text-red-500"
        >
          <X size={22} />
        </button>

      </div>

      {/* TABS */}
      <div className="flex gap-3 px-8 pt-6">

        <button
          onClick={() => setActiveTab("notices")}
          className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 ${
            activeTab === "notices"
              ? "bg-indigo-600 text-white"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          <Megaphone size={16} /> Notices
        </button>

        <button
          onClick={() => setActiveTab("events")}
          className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 ${
            activeTab === "events"
              ? "bg-pink-600 text-white"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          <Calendar size={16} /> Events
        </button>

      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="px-8 py-6 space-y-4 border-b"
      >

        <input
          className="w-full border rounded-xl p-3 text-sm outline-none focus:ring-2 ring-indigo-200"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {activeTab === "events" && (
          <input
            className="w-full border rounded-xl p-3 text-sm outline-none focus:ring-2 ring-pink-200"
            placeholder="Event Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        )}

        <textarea
          className="w-full border rounded-xl p-3 text-sm h-24 resize-none outline-none focus:ring-2 ring-indigo-200"
          placeholder="Write message..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        {activeTab === "notices" && (
          <label className="flex items-center gap-3 border-2 border-dashed p-4 rounded-xl cursor-pointer bg-slate-50 hover:border-indigo-400">

            <Paperclip size={18} className="text-slate-400" />

            <div className="flex-1">
              <p className="text-xs font-semibold text-slate-500">
                Attachment
              </p>
              <p className="text-xs text-slate-400 truncate">
                {file ? file.name : "Upload Image or PDF"}
              </p>
            </div>

            <input
              type="file"
              className="hidden"
              accept="image/*,application/pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />

          </label>
        )}

        <button
          disabled={loading}
          className={`w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 text-white ${
            loading
              ? "bg-slate-400"
              : activeTab === "notices"
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-pink-600 hover:bg-pink-700"
          }`}
        >
          <Send size={16} />
          {loading ? "Publishing..." : "Publish"}
        </button>

      </form>

      {/* LIST */}
      <div className="flex-1 overflow-y-auto px-8 py-6">

        {(activeTab === "notices" ? notices : events)?.map((item) => (

          <div
            key={item.id}
            className="flex justify-between items-center border-b py-4"
          >

            <div>
              <p className="text-sm font-semibold text-slate-700">
                {item.title}
              </p>

              <p className="text-xs text-slate-400">
                {item.date}
              </p>
            </div>

            <button
              onClick={() => handleDelete(item.id, activeTab)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={16} />
            </button>

          </div>

        ))}

      </div>

    </div>

  </div>
);
}