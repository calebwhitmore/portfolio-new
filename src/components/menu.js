import { Link } from "gatsby"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

import sun from "./../images/sun.png"
import moon from "./../images/moon.png"

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
            <div className={"menu " + (this.state.open ? 'open ' : ' ')}>
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
                  <Link className="link" to="/about">
                    <h3>About</h3>
                  </Link>
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
                      <img className="sun" src={sun}></img>
                      <img className="moon" src={moon}></img>
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

{
  /* <div className="about menu-item">
          <h4>
            Caleb is a passionate designer from the UK, with a BSc in Product
            design from Brunel University, London. He works at Microsoft and is
            based in Seattle, Washington. <br /> <br />
            He has experience in UX design, Product design, 3D modelling and
            rendering, motion design, graphic design and sketching. He is
            capable with HTML, CSS, Javascript and React.
          </h4>
        </div> */
}
{
  /* <div className="contact menu-item">
          <p>
            For enquiries about projects, freelance work, or other work
            oppertunities, please reach out to me at caleb.whitmore@outlook.com
          </p>
        </div> */
}
{
  /* <div className="navigation menu-item external">
          <Link className="link" to="/">
            <p className="title">instagram</p>
            <p>calebwhitmore</p>
          </Link>
          <Link className="link" to="/">
            <p className="title">twitter</p>
            <p>calebwhitmore</p>
          </Link>
          <Link className="link" to="/">
            <p className="title">dribbble</p>
            <p>calebwhitmore</p>
          </Link>
          <Link className="link" to="/">
            <p className="title">blog</p>
            <p>panop.co</p>
          </Link>
        </div> */
}


