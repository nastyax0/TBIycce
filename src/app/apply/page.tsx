"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function AuthForm() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "register" && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // TODO: integrate Supabase / NextAuth / Firebase etc.
    alert(`${mode === "login" ? "Logging in" : "Registering"}...`);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl border border-orange-300">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {mode === "login" ? "Login to Your Account" : "Create an Account"}
          </h1>
          <div className="flex justify-center gap-4 text-sm font-medium mt-3">
            <button
              onClick={() => setMode("login")}
              className={`px-4 py-1 rounded-full border ${
                mode === "login"
                  ? "bg-orange-500 text-white"
                  : "text-orange-500 border-orange-500 hover:bg-orange-50"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("register")}
              className={`px-4 py-1 rounded-full border ${
                mode === "register"
                  ? "bg-orange-500 text-white"
                  : "text-orange-500 border-orange-500 hover:bg-orange-50"
              }`}
            >
              Register
            </button>
          </div>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {mode === "register" && (
            <div>
              <label className="block mb-1 text-sm text-gray-700 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g., Akanksha Sawant"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
          )}

          <div>
            <label className="block mb-1 text-sm text-gray-700 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Password Input with Toggle */}
          <div className="relative">
            <label className="block mb-1 text-sm text-gray-700 font-semibold">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="*************"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 hover:text-orange-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          {mode === "register" && (
            <div className="relative">
              <label className="block mb-1 text-sm text-gray-700 font-semibold">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="*************"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  confirmPassword && confirmPassword !== password
                    ? "ring-red-400"
                    : "focus:ring-orange-400"
                }`}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 text-gray-500 hover:text-orange-500"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {confirmPassword && confirmPassword !== password && (
                <p className="text-red-500 text-xs mt-1">
                  Passwords do not match
                </p>
              )}
            </div>
          )}

          {/* Submit Button */}
          <div className="relative w-full">
            {/* Glowing background */}
            <div className="absolute inset-0 rounded-md blur-md animate-borderGlow opacity-40 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 animate-borderGlow bg-[length:200%_200%] z-0"></div>

            {/* Button on top */}
            <button
              type="submit"
              className="relative z-10 w-full bg-yellow-400 text-white font-semibold py-2 rounded-md transition-colors duration-300 hover:bg-orange-400"
            >
              {mode === "login" ? "Login" : "Register"}
            </button>
          </div>
          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 hover:border-gray-400 rounded-md py-2 mt-2 transition"
            onClick={() => alert("TODO: Connect Supabase/NextAuth")}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-600">
          {mode === "login" ? (
            <>
              Don&#39;t have an account?{" "}
              <button
                onClick={() => setMode("register")}
                className="text-orange-500 font-medium hover:underline"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already registered?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-orange-500 font-medium hover:underline"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
