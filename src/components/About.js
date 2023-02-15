import React, { useState } from 'react'
import "../styles/About.css"
import Education from './Education'
import Work from './Work'

export default function About() {
  
  return (
   <div className='container mx-auto max-width pt-10 pb-20 about' id="about">
    <hr/>
    <div className='aboutHead'>About Me</div>
    <hr style={{height:"5px"}}/>
    <div className='aboutHead' style={{fontWeight:"600"}}>Work Experience</div>
    <br/>
    <div style={{textAlign:"left"}}>
      <Work desig="System Engineer" company="Infosys Ltd." status="full Time" duration="Jan 2021 - present" location="Trivandrum"/>
      <hr/>
      <Work desig="intern(MERN stack developer)" company="Edureka" status="part Time" duration="April 2022 - present" location="Online"/>
      <hr/>
    </div>
    <br/>
    <div  className='aboutHead'  style={{fontWeight:"600"}}>Education</div>
    <br/>
    <Education  desig="Full Stack Development" company="Udemy, Youtube" status="full Time" duration="June 2021 - present" location="Online"/>
    <hr/>
    <Education  desig="B.Tech in Electrical & Electronics Engineering " company="MACE" status="full Time" duration="Aug 2016 - Aug 2020" location="Kothamangalam"/>
    <hr/>

   </div>
  )
}
