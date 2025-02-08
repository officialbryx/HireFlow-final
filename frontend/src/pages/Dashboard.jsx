import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Candidate Dashboard | HireFlow"; // Set page title dynamically
  }, []);

  return (
    <div className="app-container">
      <header className="site-header">
        <h1 className="site-title">HireFlow</h1>
      </header>
        <section className="hero">
            <h1 className="text">Find Your Dream Job <span> and get Hired </span></h1>
            <p className="quote">Explore thousands of job listings or find the perfect candidate</p>
        </section>
        <div className="dashboard-container">
            <Link to="/jobs" className="job-link">
                <p className="find">Find a Job</p>
            </Link>
        </div>
      <footer className="site-footer">
        <p>HireFlow © 2025</p>
      </footer>
    </div>
  );
};

export default Dashboard;
