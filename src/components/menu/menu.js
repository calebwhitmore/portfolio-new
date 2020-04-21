import { Link } from "gatsby"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

import sun from "../../images/sun.png"
import moon from "../../images/moon.png"

import "./menu.scss"

class Menu extends React.Component {
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
      <StaticQuery
        query={MenuQuery}
        render={data => {
          return (
            <div className={"menu " + (this.state.open ? "open " : " ")}>
              <div className="menu-items">
                <Link className="menu-item title" to="/">
                  <h1>
                    {data.site.siteMetadata.firstName}
                    <br></br>
                    {data.site.siteMetadata.secondName}
                  </h1>
                </Link>

                <button
                  className="mobile-menu-toggle"
                  onClick={this.toggleMenu}
                >
                  <div className="bar-1" />
                  <div className="bar-2" />
                  <div className="bar-3" />
                </button>

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
                <div className="dark-mode-toggle menu-item">
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
                        <img className="moon" src={moon} alt="Photograph of the moon"></img>
                      ) : (
                        <img className="sun" src={sun} alt="Photograph of the sun"></img>
                      )}
                    </div>
                  </button>
                </div>

                <p className="footer menu-item">©2020 Built in Seattle</p>
              </div>
            </div>
          )
        }}
      />
    )
  }
}

const MenuQuery = graphql`
  query MenuQuery {
    site {
      siteMetadata {
        title
        firstName
        secondName
      }
    }
  }
`
export default Menu
