import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [animationComplete, setAnimationComplete] = useState(false); // Track animation completion

  useEffect(() => {
    // Title animation
    const title = document.getElementById("landing-title");
    title.classList.add("animate-title");

    // Buttons animation
    const buttons = document.querySelectorAll(".role-button");
    buttons.forEach((button, index) => {
      setTimeout(() => {
        button.classList.add("animate-button");
      }, index * 300); // Stagger animations for buttons
    });

    // Set animation completion after the animations are done
    setTimeout(() => {
      setAnimationComplete(true); // Make buttons and title visible
    }, 1300); // Animation time to match the animations duration (adjust if needed)
  }, []);

  return (
    <div className="h-screen bg-gradient-to-br from-[#90e0ef] via-[#ade8f4] to-[#caf0f8] flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ade8f4] via-[#caf0f8] to-[#90e0ef] opacity-30 blur-xl animate-pulse"></div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <h1
          id="landing-title"
          className={`text-6xl font-bold text-gray-800 transition-all duration-1000 ease-out ${
            animationComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Welcome to the Portal
        </h1>
        <p className="text-xl text-gray-600 mt-4 opacity-80">
          Your one-stop solution for managing projects, connecting with mentors,
          and tracking progress.
        </p>
      </div>

      {/* Role Selection Buttons */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 mt-8">
        {/* Admin Button */}
        <button
          onClick={() => navigate("/login/admin")}
          className={`role-button bg-gradient-to-r from-[#023047] via-[#023047] to-[#023047] text-white font-bold w-32 h-32 rounded-lg text-xl shadow-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#1b3b4f] hover:to-[#2e4d63] hover:scale-110 hover:shadow-xl ${
            animationComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } flex items-center justify-center`}
        >
          Admin
        </button>

        {/* Student Button */}
        <button
          onClick={() => navigate("/login/student")}
          className={`role-button bg-gradient-to-r from-[#219ebc] via-[#219ebc] to-[#219ebc] text-white font-bold w-32 h-32 rounded-lg text-xl shadow-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#1c7b94] hover:to-[#4ea1b2] hover:scale-110 hover:shadow-xl ${
            animationComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } flex items-center justify-center`}
        >
          Student
        </button>

        {/* Alumni Button */}
        <button
          onClick={() => navigate("/login/alumni")}
          className={`role-button bg-gradient-to-r from-[#2ec4b6] via-[#2ec4b6] to-[#2ec4b6] text-white font-bold w-32 h-32 rounded-lg text-xl shadow-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#1da29c] hover:to-[#42a8b0] hover:scale-110 hover:shadow-xl ${
            animationComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } flex items-center justify-center`}
        >
          Alumni
        </button>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-500 mt-16">
        <p className="text-lg">
          © {new Date().getFullYear()} Student Portal. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
