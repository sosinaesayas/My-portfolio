import React from 'react'
import "./eigenFace.css"
import Carousel from '../components/carousel.js'
import image11 from "../assets/eigenFace pics/11.png"
import image22 from "../assets/eigenFace pics/22.png"
import image33 from "../assets/eigenFace pics/33.png"
import image44 from "../assets/eigenFace pics/44.png"
import image55 from "../assets/eigenFace pics/55.png"
import HeroImg4 from '../components/HeroImg4.js'
import Footer from '../components/footer.js'
import NavBar from '../components/NavBar.js'



const Eigenface = () => {
  const imagess = [
    image11,
    image22,
    image33,
    image44,
    image55
  ];

  return (
    <div className="eigenface-page">
      <NavBar/>
      <HeroImg4/>
      <h2 className='title'>Eigen Face Recognition</h2>
      <Carousel className="imaages" images={imagess} />
      <Footer/>
      
    </div>
  );
};

export default Eigenface;
