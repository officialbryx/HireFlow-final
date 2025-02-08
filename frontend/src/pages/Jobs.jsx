import { useEffect } from "react";

const Jobs = () => {
  useEffect(() => {
    document.title = "Job Post | HireFlow"; // Set page title dynamically
  }, []);

  return (
    <div className="app-container">
      <header className="site-header">
        <h1 className="site-title">HireFlow</h1>
      </header>
      <footer className="site-footer">
        <p>HireFlow © 2025</p>
      </footer>
    </div>
  );
};

export default Jobs;
