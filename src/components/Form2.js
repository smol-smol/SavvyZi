import React, { useState } from "react";
import logo from "../assets/SavvyZi Logo.png";

const Form2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    phoneOtp: "",
    email: "",
    emailOtp: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const isFormValid = () =>
    formData.name &&
    formData.phone &&
    formData.phoneOtp &&
    formData.email &&
    formData.emailOtp &&
    formData.terms;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        {/* Logo Section */}
        <div className="text-center mb-6">
          <img
            src={logo}
            alt="SavvyZi Logo"
            className="mx-auto w-32 h-auto mb-4"
          />
          <h1 className="text-xl font-semibold text-red-600 dark:text-white">
            Join the SavvyZi Family
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Please fill in the details below to get started.
          </p>
        </div>

        {/* Form Fields */}
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Phone Number Field */}
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
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* OTP for Phone Field */}
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
              placeholder="Enter OTP sent to phone"
              value={formData.phoneOtp}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* OTP for Email Field */}
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
              placeholder="Enter OTP sent to email"
              value={formData.emailOtp}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="w-4 h-4 text-red-600 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600"
            />
            <label
              htmlFor="terms"
              className="ml-2 text-sm text-gray-600 dark:text-gray-400"
            >
              I agree to the{" "}
              <a
                href="#"
                className="text-red-600 dark:text-red-400 hover:underline"
              >
                terms and conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full p-3 text-white bg-red-600 rounded-lg hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={!isFormValid()}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form2;
