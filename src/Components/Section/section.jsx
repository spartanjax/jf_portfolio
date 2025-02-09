import React from 'react'
import './section.css'

const section = ({children, title, id}) => {
  return (
    <div class='s_contain' id={id}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default section
