import React from "react";
import RotatingCards from "./RotatingCards"; // Import the rotating cards component

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-3xl font-semibold text-red-600 dark:text-red-400">
          Welcome to the Main Page!
        </h1>
        <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
          You've successfully logged in or signed up.
        </p>

        {/* Rotating Cards Component */}
        <RotatingCards />
      </div>
    </div>
  );
};

export default MainPage;
