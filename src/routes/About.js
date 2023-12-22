import React from 'react'
import "./about.css"
import { FaDownload } from 'react-icons/fa'
import NavBar from "../components/NavBar.js"
import Footer from '../components/footer.js'
import HeroImg2 from '../components/HeroImg2.js'
const About = () => {

  const handleDownload = () => {
   
    const downloadUrl = process.env.PUBLIC_URL + '/resume_file/Resume.pdf';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Resume.pdf'; 
    document.body.appendChild(link); 
    document.body.removeChild(link); 
};

  return (
    <div>
      <NavBar/>
      <HeroImg2 heading = "ABOUT" text = "I am a full stack developer and an AI enthusiast "/>
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
           
            <div className='resume'>
              <p className='downloadP'>Download Resume</p>
              <FaDownload className='download-icon' onClick={handleDownload}/>
            </div>
            <Footer/>

    </div>
  )
}

export default About