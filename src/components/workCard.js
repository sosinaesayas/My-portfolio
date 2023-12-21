import "./workCard.css"
import React from 'react'
import pro1 from "../assets/project-pics/2.png";
import pro2 from "../assets/eigenFace pics/44.png"
import pro3 from "../assets/fisherFace pics/444.png"
import { Link, NavLink } from "react-router-dom";
const WorkCard = () => {
  return (
    <div className="work-conatiner">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
                <div className="project-card">
                    <Link to="/beautify" className="card-link">
                      <img className="cover-images" src={pro1} alt="beautify-web-image"/>
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
                  <Link to="/eigenface" className="card-link">
                    <img className="cover-images" src={pro2} alt="eigen-face matches"/>
                    </Link>
                    <h2 className="project-title">Eigen Face Recognition</h2>
                    <div className="pro-details">
                        <p className="description">"In the realm of computer vision and facial recognition, the project, Eigen Face Recognition, stands as a testament to the capabilities of advanced algorithms. By harnessing the power of eigenfaces, I have developed a robust and efficient system that can identify and authenticate individuals based on their unique facial features.

The project delves into the fascinating world of eigenfaces, a technique that employs principal component analysis (PCA) to extract the most discriminative facial features. By representing faces as linear combinations of these eigenfaces, I have created a high-dimensional face space that allows for accurate recognition and classification.

Through meticulous training and testing, the system has achieved impressive accuracy rates, paving the way for a wide range of practical applications. Whether it is enhancing security systems, enabling access control, or automating attendance tracking, eigen face recognition offers a reliable and efficient solution."</p>
                        <div className="pro-btns"> 
                        <NavLink to="https://github.com/sosinaesayas/Eigen-face-recognition" className = "btn">view source</NavLink>
                    </div>
                  </div>
                </div>
            

          
                <div className="project-card">
                <Link to="/fisherface" className="card-link">
                    <img className="cover-images" src={pro3} alt="fisher face matches"/>
                    </Link>
                    <h2 className="project-title">Fisher Face Recognition</h2>
                    <div className="pro-details">
                        <p className="description">"Fisher Face Recognition, showcases the remarkable capabilities of advanced facial recognition algorithms by harnessing the power of Fisherfaces. Through the utilization of Fisher Linear Discriminant Analysis (FLDA), I have developed a highly accurate and efficient system that excels in identifying and classifying individuals based on their unique facial attributes.

Within the realm of computer vision, Fisherfaces offer a groundbreaking approach to facial recognition. By transforming the facial image space into a lower-dimensional subspace, Fisherfaces emphasize the discriminative features that are most relevant for classification tasks. This technique enables our system to differentiate between individuals with exceptional precision, even in the presence of variations in lighting, pose, and facial expressions.

Our project not only demonstrates the technical expertise required to implement Fisher Face Recognition but also underscores the significance of data preprocessing, feature extraction, and machine learning techniques. We have meticulously trained our system using a diverse dataset, ensuring its adaptability to real-world scenarios and its ability to handle complex facial variations.

Through extensive testing and evaluation, This Fisher Face Recognition system has achieved impressive accuracy rates, offering immense potential for applications in security systems, access control, surveillance, and biometric authentication. Its robustness and reliability make it an invaluable tool for industries seeking efficient and precise facial recognition solutions."</p>
                        <div className="pro-btns"> 
                        <NavLink to="https://github.com/sosinaesayas/Fisher-face-Recognition" className = "btn">view source</NavLink>
                    </div>
                  </div>
                </div>
         
            </div>
        </div>
      
  
  );
}

export default WorkCard;