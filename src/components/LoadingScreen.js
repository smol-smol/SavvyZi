import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/SavvyZi Logo.png";

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <img src={logo} alt="SavvyZi Logo" className="w-32 h-auto mb-6" />
      <h1 className="text-xl font-medium text-gray-700 dark:text-white">
        Finding the best bargains for you...
      </h1>
      <div className="loader mt-8 w-16 h-16 border-4 border-t-red-600 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingScreen;
