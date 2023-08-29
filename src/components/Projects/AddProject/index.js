import React, { useState } from "react";
import { StyledAddProjectForm } from "./style";

const initialState = {
  title: "",
  liveLink: "",
  githubLink: "",
  desc: "",
};

const AddProject = () => {
  const [newProject, setNewProject] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prevProject) => ({ ...prevProject, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });

      if (response.ok) {
        alert("Project Added Successfully");
        setNewProject(initialState);
      } else {
        console.error("Failed to add project");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <StyledAddProjectForm onSubmit={handleSubmit}>
      <h2>{newProject.title}</h2>
      <div className="mb-3">
        <label htmlFor="projectTitle" className="form-label">
          Project Title
        </label>
        <input
          onChange={handleChange}
          value={newProject.title}
          name="title"
          type="text"
          className="form-control"
          id="projectTitle"
          required
        />
      </div>
      <div className="row">
        <div className="mb-3 col-6">
          <label htmlFor="liveLink" className="form-label">
            Live Link
          </label>
          <input
            onChange={handleChange}
            value={newProject.liveLink}
            name="liveLink"
            type="text"
            className="form-control"
            id="liveLink"
            required
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="githubLink" className="form-label">
            Github Repo Link
          </label>
          <input
            onChange={handleChange}
            value={newProject.githubLink}
            name="githubLink"
            type="text"
            className="form-control"
            id="githubLink"
            placeholder="https://github.com/username/project"
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Project Description
        </label>
        <textarea
          onChange={handleChange}
          value={newProject.desc}
          name="desc"
          className="form-control"
          id="desc"
          rows="3"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Save
      </button>
    </StyledAddProjectForm>
  );
};

export default AddProject;