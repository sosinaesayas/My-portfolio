import React from 'react'
import NavBar from "../components/NavBar.js"
import Footer from '../components/footer.js'
import HeroImg2 from '../components/HeroImg2.js'
const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading = "ABOUT" text = "I am a Front-End developer "/>
      <Footer/>
    </div>
  )
}

export default About