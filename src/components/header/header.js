import { Link } from "gatsby"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"

import ScrollAnimation from "react-animate-on-scroll"

import "./header.scss"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
      pageTag: "",
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    let newState = { ...this.state }
    newState = { ...this.state, open: !this.state.open }
    this.setState(newState)
  }

  componentDidMount() {
    this.setState({
      pageTag: window.location.pathname.split("/")[1],
    })
  }

  render(props) {
    return (
      <ScrollAnimation
        offset={0}
        animateIn="show"
        animateOut="hide"
        initiallyVisible={true}
      >
        <div className="header-container">
          <div className={"header " + (this.state.open ? "open " : " ")}>
            <div className="header-item">
              <Link
                className={
                  "nav-link " +
                  (this.state.pageTag === "" ? "selected " : "unselected ")
                }
                to="/"
              >
                <p>Portfolio</p>
              </Link>
              <Link
                className={
                  "nav-link " +
                  (this.state.pageTag === "about" ? "selected " : "unselected ")
                }
                to="/about"
              >
                <p>About</p>
              </Link>
              {/* <Link
                className={
                  "nav-link " +
                  (this.state.pageTag === "writing"
                    ? "selected "
                    : "unselected ")
                }
                to="/about"
              >
                <p>Writing</p>
              </Link> */}
              <Link
                className={
                  "nav-link " +
                  (this.state.pageTag === "bookmarks"
                    ? "selected "
                    : "unselected ")
                }
                to="/bookmarks"
              >
                <p>Bookmarks</p>
              </Link>

              <div className="bar"></div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    )
  }
}

export default Header
