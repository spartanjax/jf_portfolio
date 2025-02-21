import React from 'react'
import '../Featured/featured.mod.scss';

const featured = ({proj}) => {
  return (
    <div className = "featured">
      <h1>{proj.title}</h1>
    </div>
  )
}

export default featured;
