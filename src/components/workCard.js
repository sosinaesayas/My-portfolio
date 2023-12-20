import "./workCard.css"
import React from 'react'
import pro1 from "../assets/project-pics/2.png";
import { Link, NavLink } from "react-router-dom";
const WorkCard = () => {
  return (
    <div className="work-conatiner">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
                <div className="project-card">
                    <Link to="/beautify" className="card-link">
                    <img src={pro1} alt="about us page"/>
                    </Link>
                    <h2 className="project-title">Beautify - A React-Powered E-commerce Experience</h2>
                    <div className="pro-details">
                        <p className="description">"Beautify', a sophisticated e-commerce platform crafted with React, showcasing a world of beauty products. This project is a seamless blend of modern web technologies and a keen eye for user experience, catering to beauty enthusiasts. It features a responsive, intuitive interface, enabling users to effortlessly browse, select, and purchase their favorite beauty items. Advanced features like dynamic product filtering, secure checkout process, and a personalized recommendation system are its highlights. Behind the scenes, 'Glamify' utilizes React’s robust ecosystem, ensuring a smooth, interactive, and engaging shopping experience. This project not only reflects my technical prowess in React development but also my understanding of e-commerce dynamics in the beauty industry."</p>
                        <div className="pro-btns"> 
                        <NavLink to="https://github.com/sosinaesayas/Beautify-redux" className = "btn">view source</NavLink>
                    </div>
                  </div>
                </div>
           

           
                <div className="project-card">
                  <Link to="/beautify" className="card-link">
                    <img src={pro1} alt="about us page"/>
                    </Link>
                    <h2 className="project-title">Beautify - A React-Powered E-commerce Experience</h2>
                    <div className="pro-details">
                        <p className="description">"Beautify', a sophisticated e-commerce platform crafted with React, showcasing a world of beauty products. This project is a seamless blend of modern web technologies and a keen eye for user experience, catering to beauty enthusiasts. It features a responsive, intuitive interface, enabling users to effortlessly browse, select, and purchase their favorite beauty items. Advanced features like dynamic product filtering, secure checkout process, and a personalized recommendation system are its highlights. Behind the scenes, 'Glamify' utilizes React’s robust ecosystem, ensuring a smooth, interactive, and engaging shopping experience. This project not only reflects my technical prowess in React development but also my understanding of e-commerce dynamics in the beauty industry."</p>
                        <div className="pro-btns"> 
                        <NavLink to="https://github.com/sosinaesayas/Beautify-redux" className = "btn">view source</NavLink>
                    </div>
                  </div>
                </div>
            

          
                <div className="project-card">
                <Link to="/beautify" className="card-link">
                    <img src={pro1} alt="about us page"/>
                    </Link>
                    <h2 className="project-title">Beautify - A React-Powered E-commerce Experience</h2>
                    <div className="pro-details">
                        <p className="description">"Beautify', a sophisticated e-commerce platform crafted with React, showcasing a world of beauty products. This project is a seamless blend of modern web technologies and a keen eye for user experience, catering to beauty enthusiasts. It features a responsive, intuitive interface, enabling users to effortlessly browse, select, and purchase their favorite beauty items. Advanced features like dynamic product filtering, secure checkout process, and a personalized recommendation system are its highlights. Behind the scenes, 'Glamify' utilizes React’s robust ecosystem, ensuring a smooth, interactive, and engaging shopping experience. This project not only reflects my technical prowess in React development but also my understanding of e-commerce dynamics in the beauty industry."</p>
                        <div className="pro-btns"> 
                        <NavLink to="https://github.com/sosinaesayas/Beautify-redux" className = "btn">view source</NavLink>
                    </div>
                  </div>
                </div>
         
            </div>
        </div>
      
  
  );
}

export default WorkCard;