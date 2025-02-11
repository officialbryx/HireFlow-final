import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";
import JobDetails from "../components/JobDetails";

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer",
      companyName: "Tech Corp",
      companyLogo: "https://via.placeholder.com/50",
      description: "We are looking for an experienced Frontend Developer proficient in React and modern JavaScript...",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $120k"
    },
    {
      id: 2,
      title: "Backend Engineer",
      companyName: "Innovation Labs",
      companyLogo: "https://via.placeholder.com/50",
      description: "Seeking a Backend Engineer with strong Python and AWS experience...",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $130k"
    },
    // Add more mock jobs as needed
  ]);

  useEffect(() => {
    document.title = "Job Listings | HireFlow";
  }, []);

  return (
    <div className="app-container">
      <header className="site-header">
        <Link to="/" className="site-title">HireFlow</Link>
      </header>
      <div className="jobs-layout">
        <div className="jobs-sidebar">
          <h2>Available Positions</h2>
          <div className="jobs-list">
            {jobs.map(job => (
              <JobCard 
                key={job.id} 
                job={job} 
                isSelected={selectedJob?.id === job.id}
                onClick={() => setSelectedJob(job)}
              />
            ))}
          </div>
        </div>
        <div className="jobs-detail-panel">
          {selectedJob ? (
            <JobDetails job={selectedJob} />
          ) : (
            <div className="no-selection">
              <h3>Select a position to view details</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
