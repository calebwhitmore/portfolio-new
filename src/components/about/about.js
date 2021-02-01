import headshot from "../../images/headshot.png"
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
      <h4>
        <span>Caleb Whitmore </span>is a Product Designer from the UK. Born in 1993, he grew up in the town of Southampton. He graduated from Brunel University in 2016 with a degree in Product design and is currently employed at Microsoft, living in Seattle.
      <br/><br/>
      He has an insatiable appetite for growth. His past has given him experience in a wide array of practices and skills across design. 
      
      </h4>
    </div>
    </div>
  )
}
export default About
