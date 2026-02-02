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


const Project = ({project, skills}) => {
  const [placement, setPlacement] = React.useState('right');
  const [isCompact, setIsCompact] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    function updatePlacement() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const leftSpace = rect.left;
      const rightSpace = window.innerWidth - rect.right;
      setIsCompact(window.innerWidth < 800);
      setPlacement(rightSpace >= leftSpace ? 'right' : 'left');
    }
    updatePlacement();
    window.addEventListener('resize', updatePlacement);
    return () => window.removeEventListener('resize', updatePlacement);
  }, []);

  return (
    <FadeIn direction="up" delay={300}>
      <div
        ref={ref}
        className={`proj_container ${placement === 'right' ? 'place-right' : 'place-left'} ${isCompact ? 'compact' : ''} ${hovered ? 'hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <div className="project" id={project.key}>
          <h1>{project.title}</h1>
          <h3 className="blurb">{project.blurb}</h3>
          <h3 className="skills">
            {skills.map((skill) =>(
              <div className="skill" key={skill}>
                <div className='skillText'>{skill}</div>
              </div>
            ))}
          </h3>
          <a href={project.project_link} target="_blank" rel="noopener noreferrer">
            <img src={project.project_cover} alt=""/>
          </a>
        </div>

        <div className="desc" aria-hidden={!hovered}>
          <div className="desc_inner">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};