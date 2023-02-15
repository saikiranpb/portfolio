import React from 'react'
import bootstrap from '../Assets/techstack/bootstrap.png'
import css from '../Assets/techstack/css.png'
import html from '../Assets/techstack/html.png'
import react from '../Assets/techstack/react.png'
import js from '../Assets/techstack/js.png'
import node from '../Assets/techstack/node.png'
import express from '../Assets/techstack/express.png'
import mongodb from '../Assets/techstack/mongo.png'
import git from '../Assets/techstack/git.png'
import github from '../Assets/techstack/github.png'
import vscode from '../Assets/techstack/vscode.png'
import postman from '../Assets/techstack/postman.png'
import redux from '../Assets/techstack/redux.png'


import "../styles/Tech.css"
export default function Tech() {
  return (
    <div className='tech container mx-auto max-width pt-5 pb-20' id='tech'>
      <div className="techHead">Tech Stack</div>
      <div className="techText h5 mt-2">Technologies I've been working with recently</div><br/><br/>
      <div className='d-flex flex-row mb-3 justify-content-around'  style={{textAlign:"left"}}>
        <img src={bootstrap} className="imgIcon"/>
        <img src={css}  className="imgIcon" />
        <img src={html}   className="imgIcon"/>
        <img src={js}  className="imgIcon"/>
        <img src={react}  className="imgIcon" />
      </div><br/>
      <div className='d-flex flex-row mb-3 justify-content-around'  style={{textAlign:"left"}}>
      <img src={express} className="imgIcon2" />
        <img src={node} className="imgIcon2"/>
        <img src={redux}  className="imgIcon2"/>
        <img src={mongodb}  className="imgIcon2"/>
      </div><br/>
      <div className="techHead">Tools</div><br/><br/>
      <div className='d-flex flex-row mb-3 justify-content-around'  style={{textAlign:"left"}}>
        <img src={git} className="imgIcon"/>
        <img src={github}  className="imgIcon" />
        <img src={vscode}   className="imgIcon"/>
        <img src={postman}  className="imgIcon" />
      </div>
      <br/><br/>
      <hr/>
    </div>
  )
}
