import React, { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroSlider from "../Components/HeroSlider";

export default function LoginModal({ setIsAdmin }) {

  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pass.trim()) {
      setError("Password required");
      return;
    }

    setLoading(true);

    setTimeout(() => {

      if (pass === "Chung123") {

        setIsAdmin(true);
        navigate("/admin/dashboard");

      } else {

        setError("Incorrect password");

      }

      setLoading(false);

    }, 400);
  };

  return (
    <div className="relative min-h-screen">

      {/* HERO BACKGROUND */}
      <HeroSlider />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

        {/* LOGIN CARD */}
        <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-8">

          <div className="text-center mb-6">

            <div className="bg-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
              <Lock className="text-white" size={26}/>
            </div>

            <h2 className="text-xl font-bold">Admin Login</h2>
            <p className="text-xs text-gray-500">
              Secure Control Panel Access
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="relative">

              <input
                type={showPass ? "text" : "password"}
                className="w-full p-3 pr-10 bg-gray-100 rounded-lg"
                placeholder="Enter Password"
                value={pass}
                onChange={(e)=>setPass(e.target.value)}
              />

              <button
                type="button"
                onClick={()=>setShowPass(!showPass)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPass ? <EyeOff size={18}/> : <Eye size={18}/>}
              </button>

            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Login"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}