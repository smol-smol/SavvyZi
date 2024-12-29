import React from "react";
import logo from "../assets/SavvyZi Logo.png"; // Update the path to your logo

const Form2 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-lg px-4 text-center">
        {/* Logo Section */}
        <div className="mb-6">
          <img
            src={logo}
            alt="SavvyZi Logo"
            className="mx-auto max-w-full h-auto"
          />
          <h1 className="text-base font-medium text-red-700 mt-2">
            Join the SavvyZi family!
          </h1>
        </div>

        {/* Form Fields */}
        <div className="mt-5 bg-white text-left">
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-red-700 mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-red-700 mb-2"
            >
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="text-right mt-2">
              <button className="px-4 py-2 bg-red-700 text-white text-sm rounded-md hover:bg-red-800">
                Send OTP
              </button>
            </div>
          </div>

          {/* Email OTP Field */}
          <div className="mb-6">
            <label
              htmlFor="email-otp"
              className="block text-sm font-semibold text-red-700 mb-2"
            >
              OTP:
            </label>
            <input
              type="text"
              id="email-otp"
              placeholder="Enter OTP"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="text-right mt-2">
              <button className="px-4 py-2 bg-red-700 text-white text-sm rounded-md hover:bg-red-800">
                Verify
              </button>
            </div>
          </div>

          {/* Phone Field */}
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-red-700 mb-2"
            >
              Phone Number:
            </label>
            <input
              type="text"
              id="phone"
              placeholder="XXX-XXX-XXXX"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="text-right mt-2">
              <button className="px-4 py-2 bg-red-700 text-white text-sm rounded-md hover:bg-red-800">
                Send OTP
              </button>
            </div>
          </div>

          {/* Phone OTP Field */}
          <div className="mb-6">
            <label
              htmlFor="phone-otp"
              className="block text-sm font-semibold text-red-700 mb-2"
            >
              OTP:
            </label>
            <input
              type="text"
              id="phone-otp"
              placeholder="Enter OTP"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="text-right mt-2">
              <button className="px-4 py-2 bg-red-700 text-white text-sm rounded-md hover:bg-red-800">
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
