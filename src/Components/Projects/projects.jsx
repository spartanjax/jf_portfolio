import React from 'react'
import './projects.mod.scss'
import Section from '../Section/section'
import Featured from "../Featured/featured"
import projects from "../../assets/projects"
import featured_proj from "../../assets/featured_proj";

const Projects = () => {
  return (
    <div className="projects">
        <Section title="Projects">
          <div className='spacing_container'>
            <Featured proj={featured_proj}/>
            <div className="project_grid">            
              {projects.map((proj) => (
                <Project project={proj} key={proj.key}/>
              ))}
            </div>
          </div>
        </Section>
    </div>
  )
}

export default Projects;


const Project = ({project}) => (
  <div className="">
    <div className="project" id = {project.key}>
      <h2>{project.title}</h2>
      <h3>{project.blurb}</h3>
    </div>
  </div>
);