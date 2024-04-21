import React, { useState } from 'react'
import { projects } from '../../data/constants'
import Slider from 'react-slick';
import ProjectsCard from "../Cards/ProjectsCard";
import { 
  Container, 
  Wrapper,
  Title, 
  TitleProjects,
  Desc,
  ProjectsContainer,
  Card, 
  Image, 
  Overlay, 
  DetailButton,
} from './ProjectsStyle';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are some projects I've worked on.</Desc>
        <ProjectsContainer>
          { projects.map((project, index) => (
            <Card key={index}>
              <Image>
                <img src={project.image} alt={project.title} loading="lazy" />
              </Image>
              <Overlay>
                <DetailButton onClick={() => setSelectedProject(project)}>Detail</DetailButton>
              </Overlay>
              <TitleProjects>{project.title}</TitleProjects>
            </Card>
          ))}
        </ProjectsContainer>
        { selectedProject && (
          <ProjectsCard project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </Wrapper>
    </Container>
  )
}

export default Projects;