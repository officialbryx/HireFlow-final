import "./styles/global.css"; 
import "./styles/login.css";   
import "./styles/signup.css"; 
import "./styles/landingPage.css";
import "./styles/jobs.css";
import "./styles/createjobpost.css"
import "./styles/NavBar.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Login from "./pages/Login";  
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import Jobs from "./pages/Jobs";
import EmployeeSide from "./pages/EmployeeSide";
import CreateJobPost from "./pages/CreateJobPost";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Dynamically set the title based on the current route
    if (location.pathname === "/signup") {
      document.title = "Sign up | HireFlow";
    } else if (location.pathname === "/") {
      document.title = "HireFlow";
    } else if (location.pathname === "/login") {
      document.title = "Login | HireFlow";
    } else if (location.pathname === "/jobs") {
      document.title = "Job Post | HireFlow";
    } else if (location.pathname === "/createjobpost") {
      document.title = "Create Job Post | HireFlow";
    }
  }, [location]);

  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage/>} />

      {/* Signup Page */}
      <Route path="/signup" element={<Signup />} />

      {/* Login Page */}
      <Route path="/login" element={<Login />} />

      {/* Job Posting Page */}
      <Route path="/jobs" element={<Jobs />} />
      
      {/* Employee Side Page */}
      <Route path="/employee/*" element={<EmployeeSide/>} />

      {/* Create Job Post Page */}
      <Route path="/createjobpost/*" element={<CreateJobPost/>} />

    </Routes>
  );
};

export default App;
