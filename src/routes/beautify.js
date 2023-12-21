import React from 'react'
import "./beautify.css"
import NavBar from "../components/NavBar.js"
import Footer from '../components/footer.js'
import Carousel from '../components/carousel'
import image1 from "../assets/project-pics/1.png"
import image2 from "../assets/project-pics/2.png"
import image3 from "../assets/project-pics/3.png"
import image4 from "../assets/project-pics/4.png"
import image5 from "../assets/project-pics/5.png"
import image6 from "../assets/project-pics/6.png"
import image7 from "../assets/project-pics/7.png"
import HeroImg4 from '../components/HeroImg4.js'


const Beautify = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7
  ];

  return (
    <div className="beautify-page">
      <NavBar/>
      <HeroImg4/>
      <h2 className='title'>Beautify - A React-Powered E-commerce Experience</h2>
      <Carousel className="imaages" images={images} />
      <Footer/>
      
    </div>
  );
};

export default Beautify;
