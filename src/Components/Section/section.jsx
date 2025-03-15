import React from 'react'
import './section.mod.scss'

const section = ({children, title, id}) => {
  return (
    <div className='s-contain' id={id}>
      <h1 className="hidden-left">{title}</h1>
      {children}
    </div>
  )
}

export default section
