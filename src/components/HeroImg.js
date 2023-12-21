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
          <div className="greetings">
          <h3 className="hii">Hi</h3>
          <h1 className="h11"> I am a Full stack web developer</h1>
          </div>

          <div className="buttons">
          <button className="btn1"><Link className="btn-link" to="./project">Projects</Link></button>
          <button className="btn2"><Link className="btn-link" to="./about">About</Link></button>
        </div>
        </div>
        
       
        

    </div>
  )
}

export default HeroImg