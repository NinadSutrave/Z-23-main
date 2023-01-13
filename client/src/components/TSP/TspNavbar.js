import React from 'react'
import { Link } from "react-scroll";
import './Tsp-nav.css'
import 'animate.css';
import { useState } from 'react';

function TspNavbar() {
  const [isActive,setIsActive] = useState(false);
  const handleClick = event=> {
    setIsActive(current=> !current);
  };


  return (
    <div className='navContainer'>
      <div onClick= {handleClick}  className='menu-toggle' id="hamburger">
        <i className={isActive? 'fa fa-times' : 'fa fa-bars'} />
      </div>
      <div className={isActive ? 'menu-open overlay' : 'overlay'}></div>
      <div className="container">
      <h1 className="brand" ><Link to="TspHome" ><img src={require("./../../Assets/TSPlogo.png")} alt="" /></Link></h1>
        <nav className={isActive ? 'menu-open' : ''}>
          <ul>
            <li ><Link onClick= {handleClick} key={0} to="TspHome" activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Home</Link></li>
            <li ><Link onClick= {handleClick} key={1} to="TspAbout" activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>About</Link></li>
            <li><Link onClick= {handleClick} key={2} to="TspConduction" activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Conduction</Link></li>
            <li><Link onClick= {handleClick} key={3} to="TspPrize" activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Prizes</Link></li>
            <li><Link onClick= {handleClick} key={4} to="TspTestimonials" activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Testimonials</Link></li>
            <li><Link onClick= {handleClick} key={5} to="TspGallery" activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Highlights</Link></li>
            <li><Link onClick= {handleClick} key={7} to="TspFaqs" activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>FAQs</Link></li>
            <li><Link onClick= {handleClick} key={8} to="TspContact" activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default TspNavbar
