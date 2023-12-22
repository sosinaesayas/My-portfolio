import React from 'react'
import "./beautify.css"
import HeroImg4 from '../components/HeroImg4.js'
import NavBar from "../components/NavBar.js"
import Footer from '../components/footer.js'
import Carousel from '../components/carousel'
import image2 from "../assets/afalagi-pics/photo_2023-12-22_00-11-36.jpg"
import image3 from "../assets/afalagi-pics/photo_2023-12-22_00-11-45.jpg"
import image1 from "../assets/afalagi-pics/photo_2023-12-21_23-13-28 (1).jpg"



const Afalagi = () => {
  const images = [
    image1,
    image2,
    image3,
  
  ];

  return (
    <div className="Afalagi-page">
      <NavBar/>
      <HeroImg4/>
      <h2 className='title'>Beautify - A React-Powered E-commerce Experience</h2>
      <Carousel className="imaages" images={images} />
      <Footer/>
      
    </div>
  );
};

export default Afalagi;
