import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/SavvyZi Logo.png";

const Form2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Redirect to SignUp.js (Signup2 page) after form submission
    navigate("/signup2");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left side (58% empty space) */}
      <div className="w-3/5 bg-gray-100"></div>

      {/* Right side (42% content with light grey case) */}
      <div className="w-2/5 p-6 flex flex-col justify-center ml-auto">
        {/* Light Grey Case Container */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          {/* Logo Section */}
          <div className="text-center mb-6">
            <img
              src={logo}
              alt="SavvyZi Logo"
              className="mx-auto w-32 h-auto mb-4"
            />
            <h1 className="text-xl font-semibold text-red-600 dark:text-white">
              Earn cashbacks and rewards with SavvyZi!
            </h1>
          </div>

          {/* Fields Section */}
          <div className="space-y-4">
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
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                placeholder="example@gmail.com"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mr-2"
              />
              <label
                htmlFor="agree"
                className="text-sm text-gray-700 dark:text-white"
              >
                I agree with SavvyZi's terms & conditions
              </label>
            </div>

            {/* Sign Up Button */}
            <div className="text-center mt-6">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>

            {/* Already Have an Account Link */}
            <p className="text-sm text-center text-red-600 mt-4">
              I already have an account{" "}
              <span
                onClick={() => navigate("/form1")}
                className="font-medium cursor-pointer hover:underline"
              >
                Log In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
