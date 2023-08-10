import React from "react";
import { StyledAbout } from "./style";

const About = () => {
  return (
    <StyledAbout id="about">
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
              className="img-fluid about-img"
              src="nisantasi.jpg"
              alt="nisantasi university"
            />
          </div>
          <div className="col-lg-8">
            <h4 className="mb-4">Work Experience</h4>
            <div>
              <h5 className="job-title m-0">
                Software Developer Intern at Turkcell
              </h5>
              <p>07.2023 - present</p>
            </div>
            <div>
              <h5 className="job-title m-0">Frontend Developer Bootcamp at Turkcell</h5>
              <p>01.2023 - 06.2023</p>
            </div>
            <div>
              <h5 className="job-title m-0">Frontend Developer at Milda Health</h5>
              <p>08.2022 - 03.2023</p>
            </div>
          </div>
        </div>
        <div className="py-4">
          <h3>Skills</h3>
          <div className="my-3 d-flex flex-wrap gap-3 w-75">
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">JavaScript</span>
            <span className="skill">React</span>
            <span className="skill">NextJs</span>
            <span className="skill">Redux</span>
            <span className="skill">SCSS</span>
            <span className="skill">Figma</span>
            <span className="skill">Bootstrap</span>
            <span className="skill">Styled-component</span>
            <span className="skill">MongoDb</span>
            <span className="skill">Postgre</span>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
