import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Login from "./components/Login";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-full shadow-lg"
        >
          {darkMode ? "🌙" : "🌞"} {/* Dark/Light mode icon */}
        </button>
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
