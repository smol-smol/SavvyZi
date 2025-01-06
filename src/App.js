// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Login from "./components/Login";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import SignUp2 from "./components/SignUp2";
import MainPage from "./components/MainPage";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for user preference
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    // Apply or remove the 'dark' class on the root element based on darkMode state
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save the user's preference to localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Router>
      <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"}>

        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-full shadow-lg dark:bg-gray-200 dark:text-gray-800"
        >
          {darkMode ? "🌙" : "🌞"}
        </button>
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
