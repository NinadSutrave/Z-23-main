import React from 'react'
import "./Tsp-home.css"
import Tilt from "react-parallax-tilt";
import 'animate.css';

function TspHome() {
  return (
      <div className='home' id='TspHome'>
            <video
            playsInline="playsinline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
            >
            <source src={require("./../../Assets/TspHome.mp4")} type="video/mp4" />
            </video>
            <div className="brand-Name">
                <ul>
                    <Tilt>
                        <li className='tspHeading animate__animated animate__backInDown animate__delay-1s' >Techno School Program</li>
                        <li className='zeitgeist animate__animated animate__backInLeft animate__delay-2s'>Zeitgeist</li>
                    </Tilt>
                </ul>
            </div>
      </div>
      
  )
}

export default TspHome
