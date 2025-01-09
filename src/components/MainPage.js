import React from "react";
import RotatingCards from "./RotatingCards"; // Import the first rotating cards component
import RotatingCards2 from "./RotatingCards2"; // Import the vertical rotating cards component

const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-900">
      {/* Main Content */}
      <div className="w-full flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-3xl font-semibold text-red-600 dark:text-red-400">
          Welcome to the Main Page!
        </h1>
        <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
          You've successfully logged in or signed up.
        </p>

        {/* Horizontal Rotating Cards */}
        <RotatingCards />
      </div>

      {/* Vertical Rotating Cards at the Bottom */}
      <div className="w-full mt-8">
        <RotatingCards2 />
      </div>
    </div>
  );
};

export default MainPage;
