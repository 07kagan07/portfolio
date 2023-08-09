import React from "react";
import { StyledAbout } from "./style";

const About = () => {
  return (
    <StyledAbout>
      <div className="container">
        <h3>About</h3>
        <p>
          I am a computer engineering student and I am particularly interested
          in the field of frontend development. I am honing my skills in React
          and Next.js technologies to excel in this area. I enjoy creating
          user-friendly interfaces and find the fusion of design and coding
          quite exhilarating. The constant evolution and advancements in
          technology drive my motivation, and I aim to push my projects forward
          by staying updated with new trends.
        </p>
        <div className="row">
          <div className="col-lg-3">
            <img
            className="img-fluid"
              src="nisantasi.jpg"
              alt="nisantasi university"
            />
          </div>
          <div className="col-lg-8">
            <h4 className="job-title">Frontend Developer</h4>
            <ul className="contact p-0">
              <li>Phone Number: +905455206512</li>
              <li>Email : kagancoskun32@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
