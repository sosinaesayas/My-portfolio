import React from 'react'
import "./fisherFace.css"
import Carousel from '../components/carousel.js'
import image11 from "../assets/fisherFace pics/111.png"
import image22 from "../assets/fisherFace pics/222.png"
import image33 from "../assets/fisherFace pics/333.png"
import image44 from "../assets/fisherFace pics/444.png"
import image55 from "../assets/fisherFace pics/555.png"
import HeroImg4 from '../components/HeroImg4.js'
import Footer from '../components/footer.js'
import NavBar from '../components/NavBar.js'


const Fisherface = () => {
  const imagess = [
    image11,
    image22,
    image33,
    image44,
    image55
  ];

  return (
    <div className="fisherface-page">
      <NavBar/>
      <HeroImg4/>
      <h2 className='title'>Fisher Face Recognition</h2>
      <Carousel className="imaages" images={imagess} />
      <Footer/>
    </div>
  );
};

export default Fisherface;
