import { useState } from 'react';
import '../styles/createjobpost.css';

const CreateJobForm = ({ formData, setFormData }) => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagInput = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="create-form">
      <div className="form-group">
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-grid">
        <div className="form-group">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <select
            name="workField"
            value={formData.workField}
            onChange={handleInputChange}
          >
            <option value="">Select Work Field</option>
            <option value="technology">Technology</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <div className="form-group">
          <select
            name="typeOfWork"
            value={formData.typeOfWork}
            onChange={handleInputChange}
          >
            <option value="">Type of Work</option>
            <option value="fulltime">Full-time</option>
            <option value="parttime">Part-time</option>
            <option value="internship">Internship</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <input
          type="text"
          name="salary"
          placeholder="Salary Range"
          value={formData.salary}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <textarea
          name="responsibilities"
          placeholder="Job Responsibilities"
          value={formData.responsibilities}
          onChange={handleInputChange}
          rows="4"
        />
      </div>

      <div className="form-group">
        <textarea
          name="qualifications"
          placeholder="Required Qualifications"
          value={formData.qualifications}
          onChange={handleInputChange}
          rows="4"
        />
      </div>

      <div className="form-group">
        <div className="tags-input">
          <input
            type="text"
            placeholder="Add tags (press Enter)"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagInput}
          />
          <div className="tags-container">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
                <button onClick={() => removeTag(index)}>&times;</button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJobForm;
