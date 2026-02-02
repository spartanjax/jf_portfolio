import React from 'react';
import './about.mod.scss';
import Section from '../Section/section';
import FadeIn from "../FadeIn/FadeIn.jsx";
import hockeyImg from "../../assets/aboutPhotos/hockey.jpg";
import CV from '../../assets/cv.pdf';
import blurb from '../../assets/about_blurb.txt?raw';
import skills from '../../assets/skills';


const about = () => {
  return (
    <div className="about">
        <Section title="Hi, I'm Jackson!" dark={true} id='about'>
          <div className='container'>
            <div className='text_container'>
              <FadeIn direction="left" delay={400}>
                <div id="blurb">
                  {blurb.trim().split(/\n\s*\n/).map((para, idx) => (
                    <p key={idx} id={idx === 1 ? "second_p" : undefined} dangerouslySetInnerHTML={{ __html: para }} />
                  ))}
                </div>
              </FadeIn>
            </div>
            <div className='img_container'>
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                View Resume
              </a>
              <FadeIn direction="right" delay={400}>
                <a href="https://www.eliteprospects.com/player/801617/jackson-fontaine" target="_blank" rel="noopener noreferrer">
                  <img className="photo" src={hockeyImg}/>
                </a>
              </FadeIn>
            </div>
          </div>
          <FadeIn direction="up" delay={500}>
            <div className="skills-inline">
              <span className="skill-group"><b>Languages:</b> {skills.languages.join(' • ')}</span>
              <span className="skill-group"><b>Frameworks:</b> {skills.frameworks.join(' • ')}</span>
              <span className="skill-group"><b>Tools:</b> {skills.tools.join(' • ')}</span>
            </div>
          </FadeIn>
        </Section>
    </div>
  )
}

export default about
