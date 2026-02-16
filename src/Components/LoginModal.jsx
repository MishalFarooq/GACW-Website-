import React, { useState } from "react";
import { Lock, X } from "lucide-react";

export default function LoginModal({ isOpen, onClose, onLogin }) {
  const [pass, setPass] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass === "Chung123") {
      onLogin(); // Admin Panel khul jaye ga
      setPass("");
      onClose();
    } else {
      alert("Wrong Password!");
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[200] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <div className="bg-indigo-600 p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white/50 hover:text-white"
          >
            <X size={20} />
          </button>
          <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
            <Lock className="text-white" size={30} />
          </div>
          <h2 className="text-white font-bold text-xl">Admin Login</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <input
            autoFocus
            type="password"
            className="w-full p-3 bg-slate-100 border-none rounded-xl focus:ring-2 ring-indigo-500 outline-none"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg">
            Unlock Panel
          </button>
        </form>
      </div>
    </div>
  );
}
