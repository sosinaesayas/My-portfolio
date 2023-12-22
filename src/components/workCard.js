import "./workCard.css"
import React from 'react'
import pro1 from "../assets/project-pics/2.png";
import pro2 from "../assets/eigenFace pics/44.png"
import pro3 from "../assets/fisherFace pics/444.png"
import pro4 from "../assets/afalagi-pics/photo_2023-12-22_02-12-06.jpg"
import { Link, NavLink } from "react-router-dom";
const WorkCard = () => {
  return (
    <div className="work-conatiner">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">

        <div className="project-card">
                    <Link to="/afalagi" className="card-link">
                      <img className="cover-images" src={pro4} alt="afalagi-cover "/>
                    </Link>
                     <div className="writing-part">
                     <h2 className="project-title">Afalagi: Streamlining Connections Between Freelancers and Companies</h2>
                    <div className="pro-details">
                        <p className="description">Afalagi, our group's innovative Flutter project, revolutionizes the way freelancers and companies connect. Designed with a user-friendly interface, it simplifies the process of job posting and application, making it seamless for companies to post jobs, review candidates, and make informed hiring decisions. What sets Afalagi apart is its tailored approach to the freelancer experience, offering a customized job search that aligns with each individual's skills and expertise. The platform facilitates clear and efficient communication between parties, with straightforward options to accept or decline applications. Additionally, its integrated notification system ensures that both freelancers and companies are always in sync with real-time updates. </p>
                        <div className="pro-btns"> 
                        <NavLink to="https://github.com/sosinaesayas/mobile-app-development" className = "btn">view source</NavLink>
                    </div>
                  </div>
                     </div>
                </div>

                
                <div className="project-card">
                    <Link to="/beautify" className="card-link">
                      <img className="cover-images" src={pro1} alt="beautify-web-image"/>
                    </Link>
                    <div className="writing-part">
                          <h2 className="project-title">Beautify - A React-Powered E-commerce Experience</h2>
                          <div className="pro-details">
                              <p className="description">Beautify, a sophisticated e-commerce platform crafted with React, showcasing a world of beauty products. This project is a seamless blend of modern web technologies and a keen eye for user experience, catering to beauty enthusiasts. It features a responsive, intuitive interface, enabling users to effortlessly browse, select, and purchase their favorite beauty items. Advanced features like dynamic product filtering, secure checkout process, and a personalized recommendation system are its highlights. Behind the scenes, 'Glamify' utilizes React’s robust ecosystem, ensuring a smooth, interactive, and engaging shopping experience. This project not only reflects my technical prowess in React development but also my understanding of e-commerce dynamics in the beauty industry.</p>
                              <div className="pro-btns"> 
                              <NavLink to="https://github.com/sosinaesayas/Beautify-redux" className = "btn">view source</NavLink>
                          </div>
                        </div>
                    </div>
                  
                </div>

           
           

           
                <div className="project-card">
                  <Link to="/eigenface" className="card-link">
                    <img className="cover-images" src={pro2} alt="eigen-face matches"/>
                    </Link>
                    
                      <div className="writing-part">
                      <h2 className="project-title">Eigen Face Recognition</h2>
                      <div className="pro-details">
                        <p className="description">I built an Eigenface recognition system from the ground up, using PCA (Principal Component Analysis). This method is all about using math to recognize different faces. I did everything myself - coming up with the idea, coding, and making sure it worked right. My system was trained to be really good at figuring out who is who. During tests, it was great at spotting faces, even when they looked a bit different. This project showed that I can handle complex computer tasks. It was also a chance for me to dive deep into image processing and machine learning. Using PCA made the project challenging but really interesting. I learned a lot about how computers can learn to see and understand faces.</p>
                        <div className="pro-btns"> 
                        <NavLink to="https://github.com/sosinaesayas/Eigen-face-recognition" className = "btn">view source</NavLink>
                    </div>
                  </div>
                      </div>
                </div>
            
            

          
                <div className="project-card">
                <Link to="/fisherface" className="card-link">
                    <img className="cover-images" src={pro3} alt="fisher face matches"/>
                    </Link>
                        <div className="writing-part">
                        <h2 className="project-title">Fisher Face Recognition</h2>
                    <div className="pro-details">
                        <p className="description">
In my latest project, I developed a Fisherface recognition model from scratch, showcasing my deep dive into facial recognition technology. This custom-built model was meticulously coded to optimize for accuracy and efficiency in recognizing diverse facial features and expressions. I undertook the complete development cycle, from initial research to coding and testing. The model was trained on a carefully curated dataset, ensuring robust learning and applicability. During testing, it demonstrated high efficiency and accuracy, highlighting its potential for real-world applications. This project not only honed my technical skills in machine learning and pattern recognition but also underscored my ability to manage and deliver complex, end-to-end solutions in advanced facial recognition technology.  </p>
                        <div className="pro-btns"> 
                        <NavLink to="https://github.com/sosinaesayas/Fisher-face-Recognition" className = "btn">view source</NavLink>
                    </div>
                  </div>
                        </div>
                </div>
         
            </div>
        </div>
      
  
  );
}

export default WorkCard;