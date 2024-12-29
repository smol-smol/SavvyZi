import React from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-8">Welcome to SavvyZi</h1>
      <button
        onClick={() => navigate("/form1")}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Sign In
      </button>
      <button
        onClick={() => navigate("/form2")}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Join the SavvyZi Family
      </button>
    </div>
  );
};

export default LoginScreen;
