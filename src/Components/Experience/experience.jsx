import React from 'react'
import './experience.mod.scss'
import Section from '../Section/section'
import work from '../../assets/icons/work.png'
import school from '../../assets/icons/school.png'

import timelineElements from '../../assets/timeline_experience'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const experience = () => {
let workIconStyles = {background: "#06D6A0"}
let schoolIconStyles = {background: "#f9c74f"}

  return (
    <div className="experience">
        <Section title="Where I've Worked">
            <VerticalTimeline>
              {
              timelineElements.map(element => {
                let isWorkIcon = element.icon === "work";
                return (
                  <VerticalTimelineElement 
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <img src={work} alt="work" className="icon"/> : <img src={school} alt="school" className="icon"/>}
                  >
                    <h3 className="vertical-timeline-element-title">{element.title} - <u><a href={element.company_link} target="_blank">{element.company}</a></u></h3>
                    <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                    <p id="description">{element.description}</p>
                  </VerticalTimelineElement>
                )
              })
            }
            </VerticalTimeline>
        </Section>
    </div>
  )
}

export default experience
