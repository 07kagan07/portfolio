"use client"
import React, { useState } from "react";
import { StyledAddProjectForm } from "./style";

const AddProject = () => {
  const [newProject, setNewProject] = useState({
    title: "",
    liveLink: "",
    githubLink: "",
    desc: "",
  });

  const handleChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProject);
    };

  return (
    <StyledAddProjectForm onSubmit={handleSubmit}>
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
          Project Descripton
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
