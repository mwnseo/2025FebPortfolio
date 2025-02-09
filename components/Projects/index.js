import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  StarBackground
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <StarBackground />
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}>
            All
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === "web apps"} onClick={() => setToggle("web apps")}>
            WEB APPS
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === "mobile apps"} onClick={() => setToggle("mobile apps")}>
            MOBILE APPS
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === "others"} onClick={() => setToggle("others")}>
            OTHERS
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all"
            ? projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))
            : projects
                .filter((item) => item.category === toggle)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
