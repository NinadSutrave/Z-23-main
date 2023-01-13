import React from 'react'
import "./Tsp-about.css"
import "aos";

function TspAbout() {
  return (
    <div className='aboutUs' id='TspAbout'>
      <h2 className='title' data-aos="zoom-out" data-aos-duration="1500">About Us</h2>
      <div className="aboutCards" >
        <div className="card" data-aos="fade-up-right" data-aos-duration="1000">
          <h3 className='q1'>What is <span>TSP</span> ?</h3>
          <p>Zeitgeist’23 presents the second edition of TSP,i.e, Techno School Program, a school outreach program for 9th to 12th-grade students. It consists of an annual competition wherein students compete in two phases of the Open Olympiad and flex their skills through the Junior Scientist Competition. Phase 1 of the Olympiad will be conducted in schools itself and Phase 2 will be conducted during Zeitgeist’23.</p>
        </div>
        <div className="card" data-aos="fade-up-left" data-aos-duration="1000">
          <h3 className='q1'>Why <span>TSP</span> ?</h3>
          <p>TSP aims to bring together the best young minds from all over the country under one roof and to expose the students to the technical culture of IIT Ropar. The main objective of which is developing and nurturing younger minds of the country at the grassroots level. It provides a platform for school kids to learn core experience and knowledge, exercise coordination abilities, to think outside the box while proposing solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TspAbout
