import { useState } from "react";
import ActiveJobPosts from "../components/ActiveJobPosts";
import CreateJobForm from "../components/CreateJobForm";
import "../styles/JobPost.css";

const JobPosts = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    responsibilities: "",
    qualifications: "",
    location: "",
    workField: "",
    typeOfWork: "",
    salary: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleCreateJob = () => {
    console.log("New Job Post Created:", formData);
    setSuccessMessage("Job post created successfully!");
    setTimeout(() => setSuccessMessage(""), 3000); // Hide after 3 seconds
  };

  return (
    <div className="main-container"> {/* Added a wrapper */}
      <div className="job-posts-container">
        <div className="header">
          <h2>{activeTab === "active" ? "Your Job Posts" : "Create a new job post"}</h2>
          {activeTab === "create" && (
            <button className="create-btn" onClick={handleCreateJob}>
              CREATE
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="tabs">
          <span
            className={activeTab === "active" ? "tab active" : "tab"}
            onClick={() => setActiveTab("active")}
          >
            Active
          </span>
          <span
            className={activeTab === "create" ? "tab active" : "tab"}
            onClick={() => setActiveTab("create")}
          >
            Create
          </span>
        </div>

        {/* Success Message */}
        {successMessage && <div className="success-message">{successMessage}</div>}

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "active" ? (
            <ActiveJobPosts />
          ) : (
            <CreateJobForm formData={formData} setFormData={setFormData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPosts;
