import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Jobs = () => {
  useEffect(() => {
    document.title = "Job Post | HireFlow"; // Set page title dynamically
  }, []);

  return (
    <div className="app-container">
      <header className="site-header">
        <Link to="/" className="site-title">HireFlow</Link>
      </header>
    </div>
  );
};

export default Jobs;
