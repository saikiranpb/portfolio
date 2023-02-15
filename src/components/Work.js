import React from 'react'
import "../styles/Work.css"

export default function Work(props) {
  return (
    <div>
        <div className='d-flex justify-content-between items-center'>
     
            <div style={{color:"#dbdbdb"}} className="desig">{props.desig}</div>
            <div className='status'>{props.status}</div>
            
        </div>
    
        <div className='d-flex justify-content-between items-center'>
        <span style={{fontWeight:"600"}} className="desig2"> <i class="bi bi-building"></i> &nbsp;{props.company}  &nbsp; &nbsp;<i class="bi bi-geo-alt-fill"></i> {props.location}</span>
            <span className="desig3">{props.duration}</span>
           
        </div>
    </div>
  )
}
