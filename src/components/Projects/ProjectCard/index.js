import React from "react";
import { StyledCard } from "./style";

const ProjectCard = ({project}) => {
  return (
    <div className="col-lg-12">
        <StyledCard className="card">
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.desc}</p>
            <a href={project.liveLink} className="btn btn-primary me-3">
              Live Demo
            </a>
            <a href={project.githubLink} className="btn btn-primary">
              Github Repo
            </a>
          </div>
        </StyledCard>
    </div>
  );
};

export default ProjectCard;
