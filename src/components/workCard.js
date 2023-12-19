import "./workCard.css"
import React from 'react'
import pro1 from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png"
import { NavLink } from "react-router-dom";
const WorkCard = () => {
  return (
    <div className="work-conatiner">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt=""/>
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>This is a text</p>
                    <div className="pro-btns"> 
                    <NavLink to="url.com" className = "btn">view </NavLink>
                    <NavLink to="url.com" className = "btn">source </NavLink>
                </div>
              </div>
            </div>

            <div className="project-card">
                <img src={pro2} alt=""/>
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>This is a text</p>
                    <div className="pro-btns"> 
                    <NavLink to="url.com" className = "btn">view </NavLink>
                    <NavLink to="url.com" className = "btn">source </NavLink>
                </div>
              </div>
              </div>

                <div className="project-card">
                <img src={pro3} alt=""/>
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>This is a text</p>
                    <div className="pro-btns"> 
                    <NavLink to="url.com" className = "btn">view </NavLink>
                    <NavLink to="url.com" className = "btn">source </NavLink>

                </div>
              </div>
              </div>



            </div>
        </div>
      
  
  );
}

export default WorkCard;