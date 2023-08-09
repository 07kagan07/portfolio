import React from "react";
import { StyledCard } from "./style";

const BlogCard = ({blog}) => {
  return (
    <div className="col-lg-4">
        <StyledCard className="card">
          <img  src={blog.image} class="card-img-top p-2 rounded-4" alt={blog.title} />
          <div class="card-body">
            <h5 class="card-title">{blog.title}</h5>
            <p class="card-text">{blog.description}</p>
            <a href="#" class="btn btn-primary">
              Read More
            </a>
          </div>
        </StyledCard>
    </div>
  );
};

export default BlogCard;
