import "./footer.css";
import React from 'react';
import {FaHome , FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style= {{ color:"white", marginRight:"2rem"}}/>
                    <div>
                        <p>Addis Ababa</p>
                        <p>Ethiopia.</p>
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
                <h4>
                    About me
                </h4>
                <p>This is me Sosina Esayas a 4th year software engineer student at Addis Ababa University</p>
                  <div className="social">
                  <FaFacebook size={30} style = {{color:"white", marginRight:"1rem"}}/>
                  <FaTwitter size={30} style = {{color:"white", marginRight:"1rem"}}/>
                  <FaLinkedin size={30} style = {{color:"white", marginRight:"1rem"}}/>
                  </div>
                  </div>


           
        </div>
    </div>
  )
}

export default Footer