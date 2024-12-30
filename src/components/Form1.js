import React, { useState } from "react";
import logo from "../assets/SavvyZi Logo.png";

const Form1 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = () => {
    console.log("Sending OTP to:", phoneNumber);
  };

  const handleVerifyOtp = () => {
    console.log("Verifying OTP:", otp);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900 font-poppins">
      <div className="w-[90%] max-w-[400px] text-center mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        {/* Logo Section */}
        <div className="mb-4">
          <img src={logo} alt="SavvyZi Logo" className="w-full h-auto" />
        </div>

        {/* Welcome Message */}
        <p className="text-sm font-medium text-gray-600 dark:text-white mb-6">
          Welcome back! Please enter your details below.
        </p>

        {/* Fields Section */}
        <div className="text-left">
          {/* Phone Number Field */}
          <label
            htmlFor="phone"
            className="block text-lg font-semibold text-red-700 dark:text-white mb-1"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full p-3 mb-4 text-base border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          {/* Send OTP Button */}
          <div className="text-right mb-4">
            <button
              className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-900 dark:bg-red-600 dark:hover:bg-red-700"
              onClick={handleSendOtp}
            >
              Send OTP
            </button>
          </div>

          {/* OTP Field */}
          <label
            htmlFor="otp"
            className="block text-lg font-semibold text-red-700 dark:text-white mb-1"
          >
            OTP
          </label>
          <input
            type="text"
            id="otp"
            placeholder="Enter OTP"
            className="w-full p-3 mb-4 text-base border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          {/* Verify Button */}
          <div className="text-right">
            <button
              className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-900 dark:bg-red-600 dark:hover:bg-red-700"
              onClick={handleVerifyOtp}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;
