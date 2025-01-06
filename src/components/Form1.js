// src/components/Form1.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/SavvyZi Logo.png";

const Form1 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Logging in...");
    // Redirect to the main page after successful login
    navigate("/mainpage");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="w-[40%] p-6 flex flex-col justify-center ml-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <img
              src={logo}
              alt="SavvyZi Logo"
              className="mx-auto w-32 h-auto mb-4"
            />
            <h1 className="text-xl font-semibold text-red-600 dark:text-white">
              Welcome Back to SavvyZi
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Please enter your phone number to get started.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="text-right mb-4">
              <button
                className="bg-red-700 text-white px-4 py-2 rounded-lg"
                onClick={handleLogin}
              >
                Log In
              </button>
            </div>

            <p className="text-sm text-center text-red-600 mt-4">
              No account?{" "}
              <span
                onClick={() => navigate("/form2")}
                className="font-medium cursor-pointer hover:underline"
              >
                Sign Up here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;
