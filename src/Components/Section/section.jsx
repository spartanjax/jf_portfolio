import React from 'react'
import './section.mod.scss'
import FadeIn from '../FadeIn/FadeIn'

const section = ({children, title, id}) => {
  return (
    <div className='s-contain' id={id}>
      <FadeIn direction="left" delay={200}>
        <h1>{title}</h1>
      </FadeIn>
      {children}
    </div>
  )
}

export default section
