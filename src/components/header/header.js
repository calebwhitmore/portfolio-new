import { Link } from "gatsby"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

import sun from "../../images/icons/sun.svg"
import moon from "../../images/icons/moon.svg"
import headshot from "../../images/headshot.png"

import "./header.scss"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    let newState = { ...this.state }
    newState = { ...this.state, open: !this.state.open }
    this.setState(newState)
  }

  render(props) {
    return (
      <div className={"header " + (this.state.open ? "open " : " ")}>
        <div className="header-item">
            <button
            className="nav-link">
              <p>Home</p>
            </button>
            <button
            className="nav-link">
              <p>Portfolio</p>
            </button>
            <button
            className="nav-link">
              <p>About</p>
            </button>
            <button
            className="nav-link">
              <p>Writing</p>
            </button>
            <button
            className="nav-link">
              <p>AMA</p>
            </button>
            <button
            className="nav-link">
              <p>Bookmarks</p>
            </button>

            <div className="bar">
              
            </div>
          {/* <button className="menu-toggle" onClick={this.toggleMenu}>
          <div className="topLeft">
            {this.props.showBack ? (
              <Link to="./" className="arrow">
                <div className="part1"></div>
                <div className="part2"></div>
                <div className="part3"></div>
                <p></p>
              </Link>
            ) : (
              ""
            )}
            <div className="title">
            <h1>
              {this.props.pageTitleLine1}
              <br></br>
              {this.props.pageTitleLine2}
            </h1>
            <h2>{this.props.tags}</h2>
          </div>
          </div>
          <div className="dark-mode-toggle">
            <button
              className="toggle-contain"
              onClick={() => this.props.toggleDarkMode()}
            >
              <div
                className={
                  this.props.darkMode ? "toggle dark-mode-on" : "toggle"
                }
              >
                {this.props.darkMode ? (
                  <img
                    className="moon"
                    src={moon}
                    alt="Photograph of the moon"
                  ></img>
                ) : (
                  <img
                    className="sun"
                    src={sun}
                    alt="Photograph of the sun"
                  ></img>
                )}
              </div>
            </button>
          </div>
          <button className="menu-toggle" onClick={this.toggleMenu}>
>>>>>>> 9b90713ffe3cb3be21ee4d94132931ac0cf7c748
            <div className="bar-1" />
            <div className="bar-2" />
            <div className="bar-3" />
          </button>

=======
          
>>>>>>> 9b90713ffe3cb3be21ee4d94132931ac0cf7c748
          <div className="navigation menu-item">
            <Link className="link" to="/">
              <h3>Home</h3>
            </Link>
            <button className="link" onClick={this.props.openAbout}>
              <h3>About</h3>
            </button>
            <Link className="link" to="/">
              <h3>Contact</h3>
            </Link>
            <a className="link" href="http://www.panop.co">
              <h3>Blog</h3>
            </a>
          </div> 
          
          <div className="dark-mode-toggle">
            <button
              className="toggle-contain"
              onClick={() => this.props.toggleDarkMode()}
            >
              <div
                className={
                  this.props.darkMode ? "toggle dark-mode-on" : "toggle"
                }
              >
                <div className="selection"></div>
                  <img
                    className="sun icon"
                    src={sun}
                    alt="Icon of the sun"
                  ></img>

                  <img
                    className="moon icon"
                    src={moon}
                    alt="Icon of the moon"
                  ></img>

              </div>
            </button>
          </div>
          
          */
          }
          </div>

        </div>
    )
  }
}

export default Header
