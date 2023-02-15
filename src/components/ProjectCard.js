import React from "react";
import project from "../Assets/projects/project3.jpg";
export default function ProjectCard(props) {
  return (
    <div className="card" style={{ width: "19rem", height: "22rem" }}>
      <img
        src={props.img}
        className="card-img-top"
        alt="..."
        style={{ width: "17.5rem", height: "12rem" }}
      />
      <div
        className="card-body cardBody"
        style={{ width: "auto", height: "11rem" }}
      >
        <h5 className="card-title text-light">{props.title}</h5>
        <p className="card-text text-light">{props.detail}</p>
      </div>
      <div className="card-body">
        <i class="bi bi-box-fill" style={{ color: "white" }}></i>
       {!props.disabled ? <a
          href={props.website}
          target="_blank"
          className="card-link linkText "
        >
          Live website
        </a>:
        <span className="card-link linkText ">
           Live website
        </span>
        }
        &nbsp;&nbsp;&nbsp;
        <i className="bi bi-github" style={{ color: "white" }}></i>
        <a href={props.code}  target="_blank" className="card-link linkText ">
          View Code
        </a>
      </div>
    </div>
  );
}
