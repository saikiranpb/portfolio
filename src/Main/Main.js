import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Tech from '../components/Tech'
import "../styles/Main.css"
export default function Main() {
  return (
    <div className='main'>
      <Home/>
      <About/>
      <Tech/>       
      <Projects/>
      <Contact/>
    </div>
  )
}
