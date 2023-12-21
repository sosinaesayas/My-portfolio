import React from 'react';
import { Link} from "react-router-dom";
import { useState } from 'react';
import "./navbar.css";
import {FaBars, FaTimes} from "react-icons/fa"





const  Navbar = () => {
  const [active, setactive] = useState("");
  const handleChange = (item) =>{
    setactive(item)
  }
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

  return (
    <div className='header'>
      <div className='Navbar'>
          <div className='webName'>
            <h1>Porfolio</h1>
          </div>

          <div>
            <ul className='real-nav'>

                <li>
                  <Link className={active === 'home' ? 'Active' : '' }
                   onClick={()=>handleChange('home')} 
                   to="/">Home</Link>
                 </li>
                <li>
                 <Link id='pages' className={active === 'projects' ? 'Active' : '' } 
                   onClick={()=>handleChange('projects')}
                  to="/pages">Projects
                  </Link>
                  </li>
                <li>
                  <Link className={active==='about'? 'Active' : ''} 
                  onClick={()=>handleChange('about')}
                   to="/about">About</Link>
                </li>          
            </ul>
                 <div className="Hamburger" onClick={handleClick}>
                    {click?
                    (<FaTimes size={30} style={{color:"white"}}/>):
                    (<FaBars size={30} style={{color:"white"}}/>)};
                </div>
          </div>

    </div>
    </div>
  )
}

export default Navbar;
