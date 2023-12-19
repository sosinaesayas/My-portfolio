import "./HeroImg.css";
import React from 'react'
import IntroImg from "../assets/girl.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src= {IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
          <p>Hi I am a freelancer</p>
          <h1>Full stack web developer</h1>
          <div className="buttons">
          <button className="btn1"><Link className="btn-link" to="./project">Projects</Link></button>
          <button className="btn2"><Link className="btn-link" to="./contact">Contact</Link></button>
        </div>
        </div>
        
       
        

    </div>
  )
}

export default HeroImg