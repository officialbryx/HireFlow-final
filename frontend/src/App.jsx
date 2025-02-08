import "./styles/global.css"; 
import "./styles/login.css";   
import "./styles/signup.css"; 
import "./styles/dashboard.css";
//import "./styles/jobs.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Login from "./pages/Login";  
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Dynamically set the title based on the current route
    if (location.pathname === "/signup") {
      document.title = "Sign up | HireFlow";
    } else if (location.pathname === "/dashboard") {
      document.title = "Candidate Dashboard | HireFlow";
    } else if (location.pathname === "/") {
      document.title = "Login | HireFlow";
    //} else if (location.pathname === "/jobs") {
    //  document.title = "Job Post | HireFlow";
    }
  }, [location]);

  return (
    <Routes>
      {/* Login Page */}
      <Route path="/" element={<Login />} />

      {/* Signup Page */}
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
};

export default App;
