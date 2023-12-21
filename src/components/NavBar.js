import { Link } from "react-router-dom"
import "./NavBar.css"
import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {useState} from "react"

const NavBar = () => {

    const [click,setClick] = useState(false);
    const handleClick = () =>setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if (window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener('scroll', changeColor); 
  return (
    <div className={color? "Header Header-bg" : "Header"}>
        
     <Link className="portfolio" to="/">Porfolio</Link>
     <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-lists">
            <Link className="nav-links" to= "/"> Home</Link>
        </li>
        <li className="nav-lists">
            <Link className="nav-links" to= "/project"> Project</Link>
        </li>
        <li className="nav-lists">
            <Link className="nav-links" to= "/about"> About</Link>
        </li>
     </ul>
     <div className="Hamburger" onClick={handleClick}>
        {click?
         (<FaTimes size={30} style={{color:"white"}}/>):
        (<FaBars size={30} style={{color:"white"}}/>)};
     </div>
     
    </div>
  )
}

export default NavBar


