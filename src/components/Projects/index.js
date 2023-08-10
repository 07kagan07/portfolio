"use client";
import React, { useState } from "react";
import { projectDatas } from "./mockProjects";
import ProjectCard from "./ProjectCard";
import { StyledProjects } from "./style";
import AddProject from "./AddProject";

const Projects = () => {
  const [loadMore, setLoadMore] = useState(false);
  const [addProject, setAddProject] = useState(false);

  return (
    <StyledProjects id="projects">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h3>Projects</h3>
          <button
            className="btn btn-primary"
            onClick={() => setAddProject(!addProject)}
          >
            Add Project
          </button>
        </div>
        {addProject && <AddProject/>}
        <div className="row g-3">
          {(loadMore ? projectDatas : projectDatas.slice(0, 2))?.map(
            (project) => (
              <ProjectCard key={project.id} project={project} />
            )
          )}
        </div>
        {projectDatas.length > 2 && (
          <button
            className="bg-transparent border border-1 rounded-3 border-secondary my-3 fw-semibold"
            onClick={() => setLoadMore(!loadMore)}
          >
            Load {loadMore ? "less" : "More"}
          </button>
        )}
      </div>
    </StyledProjects>
  );
};

export default Projects;
