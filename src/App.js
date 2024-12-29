import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import logo from "./assets/SavvyZi Logo.png"; // Logo imported from assets
import googleLogo from "./assets/google-logo.png"; // Google logo imported from assets
import facebookLogo from "./assets/facebook-logo.png"; // Facebook logo imported from assets
import LoadingScreen from "./components/LoadingScreen"; // Import LoadingScreen from components
import Form1 from "./components/Form1"; // Import Form1 from components
import Form2 from "./components/Form2"; // Import Form2 from components

const Login = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  const handleSignIn = () => {
    navigate("/form1"); // Navigate to Form1 when Sign In is clicked
  };

  const handleJoinFamily = () => {
    navigate("/form2"); // Navigate to Form2 when Join the SavvyZi family is clicked
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-6">
          <img src={logo} alt="SavvyZi Logo" className="w-80 h-auto" />
        </div>

        {/* Tagline */}
        <div className="mt-2 text-lg font-medium text-gray-400 uppercase tracking-wide">
          Choose login method
        </div>

        {/* Buttons */}
        <div className="mt-8 p-5 bg-gray-200 rounded-lg flex flex-col items-center shadow-md space-y-3">
          <button
            className="w-72 h-12 rounded-lg text-lg font-bold bg-red-600 text-white hover:bg-red-800 transition-colors duration-300"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <button className="w-72 h-12 flex items-center justify-center rounded-lg text-lg font-bold bg-white text-black border border-gray-300 hover:bg-gray-100 transition-colors duration-300">
            Login with
            <img
              src={googleLogo}
              alt="Google Logo"
              className="w-8 h-auto ml-2"
            />
          </button>
          <button className="w-72 h-12 flex items-center justify-center rounded-lg text-lg font-bold bg-blue-800 text-white hover:bg-blue-900 transition-colors duration-300">
            Login with
            <img
              src={facebookLogo}
              alt="Facebook Logo"
              className="w-6 h-6 ml-2"
            />
          </button>
        </div>

        {/* Join the SavvyZi family */}
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <span
              onClick={handleJoinFamily}
              className="text-red-600 font-semibold cursor-pointer hover:underline"
            >
              Join the SavvyZi family
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Main App component that holds the routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
      </Routes>
    </Router>
  );
}

export default App;
