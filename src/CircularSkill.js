import React from 'react'
import "./CircularSkill.css"
function CircularSkill({percentage,skill}) {
  return (
    <div className='container'>
    <div className='progress' style={{"--i":percentage,"--clr":"#00ffff"}}>
<h3>{percentage}<span>%</span></h3>
     <h4 className='mt-2'>{skill}</h4>
    </div>
    </div>
  )
}

export default CircularSkill