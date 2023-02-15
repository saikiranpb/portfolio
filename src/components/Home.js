import React from 'react'
import fsd from "../Assets/contact/fsd.jpg"
import "../styles/Home.css"
import Typewriter from "typewriter-effect"

export default function Home() {
  return (
    <div className='container home' id="home">
        <main className='row d-flex flex-row' style={{textAlign:"right"}}>
             <div className='col' style={{textAlign:"center"}}>
                 <img src={fsd} className="myPic" style={{height:"12.5rem",width:"auto"}}></img>
            </div>
            <div className='col homeDetails' >  
                    <h1 className="homeText">
                        Hi,👋<br></br>I am <br></br>
                        </h1>
                        <h1 className="myName">
                        Sai Kiran
                    </h1>
                    <h2 className='homeText'>
                        <Typewriter
                        onInit={(typewriter)=>{typewriter.typeString("a Full Stack Developer").start();}}
                        />
                    </h2>                  
            </div> 
                     
            
        </main>
        
    </div>
  )
}
