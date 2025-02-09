import React from 'react'
import './about.css'
import AboutPhoto from '../../assets/HeroPhoto/sing.jpg'
import Section from '../Section/section'

const about = () => {
  return (
    <div className="about">
        <Section title="Hi, I'm Jackson!" dark={true} id='about'>
          <h3 className="hidden-right">Student at the Unversity of Auckland | BSc in Mathematics and Computer Science</h3>
            <div className='popup' id="blurb">
                <p><b>Hey there!</b> Thanks for stopping by. I'm Jackson, a problem solver at heart with a passion for coding, puzzles, and mathematics. Currently in my third year pursuing a Bachelor of Science in Computer Science and Mathematics at the University of Auckland, I'm particularly fascinated by AI and its rapidly evolving future—a field full of endless possibilities and exciting challenges.</p>
                <p id="second_p">Outside of tech, you'll often find me on the ice, playing hockey—a sport I’ve loved for years. I also enjoy staying active through the gym and running, always looking for new ways to challenge myself. When I’m not coding or working out, I value spending quality time with friends and family, whether it's a casual hangout or an exciting adventure.</p>
            </div>
            <div className="image-container">
                <img src={AboutPhoto} alt="AboutPhoto" />
            </div>
        </Section>
    </div>
  )
}
34
export default about
