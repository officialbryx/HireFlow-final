import { Link } from 'react-router-dom';

const JobCard = ({ job, isSelected, onClick }) => {
  return (
    <div 
      className={`job-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="job-card-header">
        <img src={job.companyLogo} alt={job.companyName} className="company-logo" />
        <div className="job-card-title">
          <h3>{job.title}</h3>
          <h4>{job.companyName}</h4>
        </div>
      </div>
      <div className="job-tags">
        <span className="tag">{job.location}</span>
        <span className="tag">{job.type}</span>
      </div>
    </div>
  );
};

export default JobCard;
