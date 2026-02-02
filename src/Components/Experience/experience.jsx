import React from 'react'
import './experience.mod.scss'
import Section from '../Section/section'
import work from '../../assets/icons/work.png'
import school from '../../assets/icons/school.png'

import timelineElements from '../../assets/timeline_experience'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
  let iconStyles = {
    background: "var(--bg-elevated)",
    border: "2px solid var(--border-medium)",
    boxShadow: "var(--shadow-md)"
  }

  return (
    <div className="experience" id='experience'>
      <Section title="Where I've Worked">
        <VerticalTimeline>
          {timelineElements.map(element => {
            let isWorkIcon = element.icon === "work";
            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
                lineColor="var(--border-medium)"
                iconStyle={iconStyles}
                contentStyle={{
                  background: "var(--bg-elevated)",
                  color: "var(--text-primary)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid var(--bg-elevated)"
                }}
                icon={isWorkIcon ? <img src={work} alt="work" className="timeline-icon"/> : <img src={school} alt="school" className="timeline-icon"/>}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title} - <u><a href={element.company_link} target="_blank" rel="noreferrer">{element.company}</a></u>
                </h3>
                <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>
      </Section>
    </div>
  )
}

export default Experience
