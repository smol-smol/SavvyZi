import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/SavvyZi Logo.png";
import googleLogo from "../assets/google-logo.png";
import facebookLogo from "../assets/facebook-logo.png";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-center p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl w-[90%] max-w-md">
        <img src={logo} alt="SavvyZi Logo" className="w-36 mx-auto mb-6" />
        <h2 className="text-lg font-semibold text-gray-600 dark:text-white mb-6">
          Welcome to SavvyZi! Choose your login method.
        </h2>
        <button
          onClick={() => navigate("/form1")}
          className="block w-full py-3 mb-4 text-white bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 rounded-lg font-medium transition"
        >
          Sign In
        </button>
        <button className="flex items-center justify-center w-full py-3 mb-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg font-medium transition px-4">
          <span>Login with</span>
          <img src={googleLogo} alt="Google Logo" className="w-6 h-6 ml-2" />
        </button>
        <button className="flex items-center justify-center w-full py-3 mb-4 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg font-medium transition px-4">
          <span>Login with</span>
          <img
            src={facebookLogo}
            alt="Facebook Logo"
            className="w-5 h-5 ml-2"
          />
        </button>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/form2")}
            className="text-red-600 font-medium cursor-pointer hover:underline"
          >
            Join the SavvyZi family
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
