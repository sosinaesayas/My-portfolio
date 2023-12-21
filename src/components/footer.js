import "./footer.css";
import React from 'react';
import {FaHome , FaPhone, FaMailBulk,FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <div className="location">
                    <FaHome size={20} style= {{ color:"white", marginRight:"2rem"}}/>
                        <h4 className="city">Addis Ababa, Ethiopia.</h4>
                    </div>
                </div>
                <div className="phone">
                   <h4>
                   <FaPhone size={20} style = {{color:"white", marginRight:"2rem"}}/>
                   0953245256
                   </h4>
                </div>

                <div className="email">
                   <h4>
                   <FaMailBulk size={20} style = {{color:"white", marginRight:"2rem"}}/>
                  sosinaesayas@gmail.com
                   </h4>
                </div>
            </div>
                <div className="right"> 
                <h4 className="aboutme">
                    About me
                </h4>
                <p className="aboutP">This is Sosina Esayas a 4th year software engineering student at Addis Ababa University</p>
                  <div className="social">
                    <Link to = "https://www.linkedin.com/in/sosina-esayas-7527bb248/"> <FaLinkedin className="social-link" /></Link> 
                    <Link to="https://www.instagram.com/sosinaesayas/"> <FaInstagram className="social-link" /></Link>
                             
                  </div>
                  </div>


           
        </div>
    </div>
  )
}

export default Footer