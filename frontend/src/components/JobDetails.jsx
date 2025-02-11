const JobDetails = ({ job }) => {
  return (
    <div className="job-details">
      <div className="job-details-header">
        <img src={job.companyLogo} alt={job.companyName} className="company-logo-large" />
        <div className="job-details-title">
          <h2>{job.title}</h2>
          <h3>{job.companyName}</h3>
        </div>
      </div>
      
      <div className="job-details-tags">
        <span className="tag">{job.location}</span>
        <span className="tag">{job.type}</span>
        <span className="tag">{job.salary}</span>
      </div>

      <div className="job-details-description">
        <h4>Description</h4>
        <p>{job.description}</p>
      </div>

      <button className="apply-btn-large">Apply Now</button>
    </div>
  );
};

export default JobDetails;
