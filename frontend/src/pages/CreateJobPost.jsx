import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateJobForm from "../components/CreateJobForm";
import "../styles/createjobpost.css";

const CreateJobPost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    responsibilities: "",
    qualifications: "",
    location: "",
    workField: "",
    typeOfWork: "",
    salary: "",
    tags: []
  });

  useEffect(() => {
    document.title = "Create Job Post | HireFlow";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    navigate("/");
  };

  return (
    <div className="app-container">
      <header className="site-header">
        <Link to="/" className="site-title">HireFlow</Link>
      </header>
      
      <div className="main-content">
        <form onSubmit={handleSubmit} className="create-form">
          <h2>Create New Job Post</h2>
          <CreateJobForm formData={formData} setFormData={setFormData} />
          <button type="submit" className="submit-btn">
            Create Job Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateJobPost;
