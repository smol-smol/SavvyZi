import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/SavvyZi Logo.png"; // Ensure the path is correct

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login"); // Redirect to LoginScreen after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Logo */}
      <img src={logo} alt="SavvyZi Logo" className="w-48 h-auto mb-4" />

      {/* Tagline */}
      <h1 className="text-lg font-semibold text-gray-600">
        Hang on tight.... Finding the best bargains for you!
      </h1>

      {/* Loading Animation */}
      <div className="loader mt-6 w-16 h-16 border-4 border-t-red-600 border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingScreen;
