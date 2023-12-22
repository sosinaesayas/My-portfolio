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
          <Link className="btn-link" to="./project">   <button className="btn1">Projects</button></Link>
          <Link className="btn-link" to="./about"> <button className="btn2">About</button></Link>
         
        </div>
        </div>
        
       
        

    </div>
  )
}

export default HeroImg