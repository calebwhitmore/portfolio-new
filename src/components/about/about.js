import headshot from "../../images/headshot.jpg"
import React from "react"

import "./about.scss"

const About = (props) => {
  return (
      <div className="background">
    <div className="aboutContainer">
    <button className="close" onClick={props.closeAbout}>
        <div className="bar-1"></div>
        <div className="bar-3"></div>
    </button>
      <div className="headshot">
        <img src={headshot} alt='Headshot of Caleb'></img>
      </div>
      <p>
        Caleb Whitmore is a multi-disciplinary designer with an appetite to
        learn.
      </p>
    </div>
    </div>
  )
}
export default About
