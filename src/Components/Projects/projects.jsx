import React from 'react'
import './projects.mod.scss'
import Section from '../Section/section'
import projects from "../../assets/projects"

const Projects = () => {
  return (
    <div className="projects">
        <Section title="Projects">
          <div className="project_container">
            {projects.map((proj) => (
              <Project project={proj} key={proj.key}/>
            ))}
          </div>
        </Section>
    </div>
  )
}

export default Projects;


const Project = ({project}) => (
  <div className="popup">
    <div className="project" id = {project.key}>
      <h1>{project.title}</h1>
      <h3>TTEST</h3>
    </div>
  </div>
);