import React from 'react'
import NavBar from "../components/NavBar.js"
import Footer from '../components/footer.js'
import HeroImg2 from "../components/HeroImg2.js"
import WorkCard from "../components/workCard.js"

const Project = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="PROJECTS" text="some of my recent works" />
      <WorkCard/>
      <Footer/>
      
      

    </div>
  )
}

export default Project