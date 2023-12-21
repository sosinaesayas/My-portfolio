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
                        <p className="description">In the realm of computer vision and facial recognition, the project, Eigen Face Recognition, stands as a testament to the capabilities of advanced algorithms. By harnessing the power of eigenfaces, I have developed a robust and efficient system that can identify and authenticate individuals based on their unique facial features.

The project delves into the fascinating world of eigenfaces, a technique that employs principal component analysis (PCA) to extract the most discriminative facial features. By representing faces as linear combinations of these eigenfaces, I have created a high-dimensional face space that allows for accurate recognition and classification.

Through meticulous training and testing, the system has achieved impressive accuracy rates, paving the way for a wide range of practical applications. Whether it is enhancing security systems, enabling access control, or automating attendance tracking, eigen face recognition offers a reliable and efficient solution.</p>
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
                        <p className="description">Our Fisher Face Recognition system is at the forefront of facial recognition technology, leveraging Fisherfaces and FLDA for unparalleled accuracy. It specializes in identifying individuals based on unique facial features, efficiently handling variations in lighting, pose, and expressions. The system's core functionality lies in its ability to transform facial images into a lower-dimensional space, emphasizing key discriminative features for precise classification.

Meticulously trained with a comprehensive dataset, the system demonstrates adaptability and robustness in real-world scenarios. It's particularly suited for applications in security, surveillance, and biometric authentication, offering reliable performance in diverse environments. With its high accuracy rates and versatility, our Fisher Face Recognition system represents a significant advancement in computer vision, setting new standards for the industry.</p>
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