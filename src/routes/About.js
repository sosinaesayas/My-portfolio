import React from 'react'
import "./about.css"
import { FaDownload } from 'react-icons/fa'
import NavBar from "../components/NavBar.js"
import Footer from '../components/footer.js'
import HeroImg3 from '../components/HeroImg3.js'
const About = () => {

  const handleDownload = () => {
    const downloadUrl = 'src/resume file/Resume.pdf';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'resume.pdf';
    link.target = '_blank';
    link.click();
  };
  return (
    <div>
    
      <HeroImg3 heading = "ABOUT" text = "I am a Front-End developer "/>
      <p className="skill-title">Familarized Skills</p>
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
            <p className='skill-title'>Working Experience</p>
            <p className='work-experience'>1 year Experience of web development at Roshan Technologies</p>
            <div className='resume'>
              <p className='downloadP'>you can download my Resume here</p>
              <FaDownload className='download-icon' onClick={handleDownload}/>
            </div>

    </div>
  )
}

export default About