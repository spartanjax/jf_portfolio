import React from 'react';
import './about.mod.scss';
import Section from '../Section/section';
import FadeIn from "../FadeIn/FadeIn.jsx";
import hockeyImg from "../../assets/aboutPhotos/hockey.jpg";
import CV from '../../assets/jf_cv_2025.pdf'



const about = () => {
  return (
    <div className="about">
        <Section title="Hi, I'm Jackson!" dark={true} id='about'>
          <div className='container'>
            <div className='text_container'>
              <FadeIn direction="left" delay={400}>
                <div id="blurb">
                    <p><b>Hey there!</b> Thanks for stopping by. I'm Jackson, a problem solver at heart with a passion for coding, puzzles, and mathematics. Currently in my third year pursuing a Bachelor of Science in Computer Science and Mathematics at the University of Auckland, I'm particularly fascinated by AI and its rapidly evolving future—a field full of endless possibilities and exciting challenges.</p>
                    <p id="second_p">Outside of tech, you'll often find me on the ice, playing hockey—a sport I’ve loved for years. I also enjoy staying active through the gym and running, always looking for new ways to challenge myself. When I'm not coding or working out, I value spending quality time with friends and family, whether it's a casual hangout or an exciting adventure.</p>
                </div>
              </FadeIn>
            </div>
            <div className='img_container'>
              <a
                href={CV} // Change this to your actual file path or external URL
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                View Resume
              </a>
              <FadeIn direction="right" delay={400}>
                <img className="photo" src={hockeyImg}></img>
              </FadeIn>
            </div>
          </div>
        </Section>
    </div>
  )
}
34
export default about
