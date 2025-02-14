import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../components/Navbar";

const LandingPage = () => {
  useEffect(() => {
    document.title = "HireFlow"; // Set page title dynamically
  }, []);

  return (
    <div className="app-container">
      <NavBar />
      
        <section className="hero">
            <h1 className="text">Find Your Dream Job <span> and get Hired </span></h1>
            <p className="quote">Explore thousands of job listings or find the perfect candidate</p>
        </section>
        <div className="dashboard-container">
            <Link to="/jobs" className="job-link">
                <p className="find">Find a Job</p>
            </Link>
        </div>
    </div>
  );
};

export default LandingPage;
