import { Link } from "react-router-dom"
import "./NavBar.css"
import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {useState} from "react"

const NavBar = () => {

    const [click,setClick] = useState(false);
    const handleClick = () =>setClick(!click);
  return (
    <div className="Header">
        
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
         (<FaTimes size={20} style={{color:"white"}}/>)
        :(<FaBars size={20} style={{color:"white"}}/>)};
     </div>
     
    </div>
  )
}

export default NavBar


