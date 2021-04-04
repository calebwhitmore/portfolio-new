import { Link } from "gatsby"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"

import ScrollAnimation from "react-animate-on-scroll"

import "./footer.scss"

class Footer extends React.Component {
  constructor() {
    super()
  }
  currentYear = new Date().getFullYear();

  render(props) {
    return (
      // <ScrollAnimation
      //   offset={0}
      //   animateIn="show"
      //   animateOut="hide"
      //   initiallyVisible={true}
      // >
        <div className="footer-container">
          <div className="footer">
            <div className="footer-item">
              <p>©{this.currentYear} Caleb Whitmore</p>
              
            </div>
          </div>
        </div>
      // </ScrollAnimation>
    )
  }
}

export default Footer
