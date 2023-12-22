import React from 'react'
import "./about.css"
import NavBar from "../components/NavBar.js"
import Footer from '../components/footer.js'
import HeroImg2 from '../components/HeroImg2.js'
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading = "ABOUT ME" text = "I am a full stack developer and an AI enthusiast "/>
      <div className='skill-title-responiveness'> <p className='skill-title'>Familarized Skills</p></div>
      <div className='skills'>
          <div className='lists'>
            <li>HTML</li>
            <li>CSS</li>
            </div>

            <div className='lists'>
            <li>Bootstrap</li>
            <li>Javascript</li>
            </div>

            <div  className='lists'>
            <li>Python</li>
            <li>React Js</li>  
          </div>

          <div  className='lists'>
          <li>Express Js</li>
            <li>Node Js</li>
          </div>

           <div  className='lists'> 
              
                <li>Flutter</li>
                <li>Machine Learning</li>
           </div> 
            </div>
            <div className='skill-title-responiveness'> <p className='skill-title'>Work Experience</p></div>
            <div className='work-experience-div'>
            <p className='work-experience'>1 year Experience of web development at Roshan Technologies</p>
            </div>
          
         
            <Footer/>

    </div>
  )
}

export default About