import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigating to the login page

const LoginPage = () => {
  const navigate = useNavigate();

  // Function to handle the login button click
  const handleLoginClick = () => {
    navigate("/student"); // You can modify this to go to the appropriate user role (student, alumni, admin)
  };

  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex flex-col justify-center items-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to the Student Portal</h1>
        <p className="text-xl mb-8">Your path to academic success starts here.</p>
        <button
          onClick={handleLoginClick}
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-all duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
