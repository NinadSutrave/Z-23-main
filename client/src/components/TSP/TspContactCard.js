import React from 'react'
import "./Tsp-contact.css"
function TspContactCard(props) {
  return (
    <div className='contact-card'>
      <img src={props.lnk} alt="" />
      <div className="details">
        <div className="name">{props.name}</div>
        <div className="position">{props.position}</div>
        <div className="position">{props.phone}</div>
        <div className="contact-icon">
            <a href={`tel: ${props.phone}`}><i className="fa fa-phone"></i></a>
            <a href={props.linkedIn}><i className="fab fa-linkedin-in"></i></a>
            <a href= {`mailto: ${props.email}`}><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>
  )
}

export default TspContactCard
