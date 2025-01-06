// src/components/SignUp2.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/SavvyZi Logo.png";

const SignUp2 = () => {
  const [phoneOtp, setPhoneOtp] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (
      password.length >= 8 &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      console.log("Sign Up Successful!");
      navigate("/mainpage");
    } else {
      console.log("Password criteria not met");
    }
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
              One step away from great bargains!
            </h1>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="phoneOtp"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Phone OTP
              </label>
              <input
                type="text"
                id="phoneOtp"
                placeholder="Enter OTP sent to your phone"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700"
                value={phoneOtp}
                onChange={(e) => setPhoneOtp(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="emailOtp"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Email OTP
              </label>
              <input
                type="text"
                id="emailOtp"
                placeholder="Enter OTP sent to your email"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700"
                value={emailOtp}
                onChange={(e) => setEmailOtp(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Set Password
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
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp2;
