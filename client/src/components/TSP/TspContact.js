import React from 'react'
import TspContactCard from './TspContactCard'
import "./Tsp-contact.css"

function TspContact() {
  return (
    <section className="contact" id='TspContact'>
        <h2 className="title">Contact Us</h2>
        <div className="contact-cards">
            <TspContactCard key ={0} lnk={require("./../../Assets/jsc.png")} name= "Chena Ram Kumawat" position = "TSP Head" phone = "+919649766876" email = "2020eeb1313@iitrpr.ac.in" linkedIn = "https://www.linkedin.com/in/saurabh-kushwaha-930002213/" />
            <TspContactCard key = {1} lnk={require("./../../Assets/jsc.png")} name= "Harsh Singhal" position = "TSP Head" phone = "+917728837630" email = "2020eeb1171@iitrpr.ac.in" linkedIn = "https://www.linkedin.com/in/saurabh-kushwaha-930002213/" />
        </div>
    </section>
  )
}

export default TspContact
