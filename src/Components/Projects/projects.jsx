import React from 'react'
import './projects.mod.scss'
import Section from '../Section/section'
import Featured from "../Featured/featured"
import projects from "../../assets/projects"
import featured_proj from "../../assets/featured_proj.js";
import FadeIn from "../FadeIn/FadeIn.jsx";

const Projects = () => {
  return (
    <div className="projects" id="projects">
        <Section title="Projects">
          <div className='spacing_container'>
            <Featured proj={featured_proj}/>
            <div className="project_grid">            
              {projects.map((proj) => (
                <Project project={proj} key={proj.key} skills={proj.skills}/>
              ))}
            </div>
          </div>
        </Section>
    </div>
  )
}

export default Projects;


const Project = ({project, skills}) => (
  <FadeIn direction="up" delay={300}>
  <div className="proj_container">
    <div className="project" id = {project.key}>
      <h1>{project.title}</h1>
      <h3 className="blurb">{project.blurb}</h3>
      <h3 className="skills">
        {skills.map((skill) =>(
          <div className="skill" key={skill}>
            <div className='skillText'>{skill}</div>
          </div>
        ))}
      </h3>
      <a href = {project.project_link} target="_blank" rel="noopener noreferrer">
        <img src={project.project_cover} alt=""/>
      </a>
    </div>
  </div>
  </FadeIn>
);