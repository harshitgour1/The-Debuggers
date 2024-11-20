import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoleLoginPage = ({ role }) => {
  const navigate = useNavigate();
  
  // State to handle form input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder for validation (you can integrate real validation here)
    if (email && password) {
      // Navigate to the corresponding page based on role
      if (role === "admin") {
        navigate("/admin");
      } else if (role === "student") {
        navigate("/student");
      } else if (role === "alumni") {
        navigate("/alumni");
      }
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-[#90e0ef] via-[#ade8f4] to-[#caf0f8] flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          {role.charAt(0).toUpperCase() + role.slice(1)} Login
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-[#90e0ef] p-4 rounded-lg text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-[#90e0ef] focus:border-[#023047]"
              placeholder={`Enter your ${role} email`}

            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-[#90e0ef] p-4 rounded-lg text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-[#90e0ef] focus:border-[#023047]"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="form-checkbox text-[#023047] rounded"
              />
              <label htmlFor="remember" className="ml-2 text-gray-700">Remember Me</label>
            </div>
            <a href="#" className="text-[#023047] text-sm hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-xl text-white font-semibold rounded-lg bg-gradient-to-r from-[#023047] via-[#219ebc] to-[#90e0ef] shadow-lg hover:from-[#219ebc] hover:to-[#023047] transform transition duration-300 ease-in-out hover:scale-105"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-[#023047] hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default RoleLoginPage;