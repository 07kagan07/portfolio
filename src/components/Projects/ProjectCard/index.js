import React from "react";
import { StyledCard } from "./style";

const ProjectCard = ({project}) => {
  return (
    <div className="col-lg-12">
        <StyledCard className="card">
          <div class="card-body">
            <h5 class="card-title">{project.title}</h5>
            <p class="card-text">{project.desc}</p>
            <a href={project.liveLink} class="btn btn-primary me-3">
              Live Demo
            </a>
            <a href={project.githubLink} class="btn btn-primary">
              Github Repo
            </a>
          </div>
        </StyledCard>
    </div>
  );
};

export default ProjectCard;
