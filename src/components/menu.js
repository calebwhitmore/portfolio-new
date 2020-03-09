import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import sun from "./../images/sun.png"
import moon from "./../images/moon.png"

import "./menu.scss"

const Menu = (props) => {
  const data = useStaticQuery(graphql`
    query ProjectPagesQuery {
      site {
        siteMetadata {
          title
          firstName
          secondName
        }
      }
    }
  `)
  return (
    <div className="menu">
      <div className="menu-items">
        <Link className="menu-item title" to="/">
          <h1>
            {data.site.siteMetadata.firstName}
            <br></br>
            {data.site.siteMetadata.secondName}
          </h1>
        </Link>
        {/* <div className="about menu-item">
          <h4>
            Caleb is a passionate designer from the UK, with a BSc in Product
            design from Brunel University, London. He works at Microsoft and is
            based in Seattle, Washington. <br /> <br />
            He has experience in UX design, Product design, 3D modelling and
            rendering, motion design, graphic design and sketching. He is
            capable with HTML, CSS, Javascript and React.
          </h4>
        </div> */}
        <div className="navigation menu-item">
          <Link className="link" to="/">
            <h2 className="title">Home</h2>
          </Link>
          <Link className="link" to="/about">
            <h2 className="title">About</h2>
          </Link>
          <Link className="link" to="/">
            <h2 className="title">Contact</h2>
          </Link>
          <a className="link" href="http://www.panop.co">
            <h2 className="title">Blog</h2>
          </a>
        </div>
        {/* <div className="contact menu-item">
          <p>
            For enquiries about projects, freelance work, or other work
            oppertunities, please reach out to me at caleb.whitmore@outlook.com
          </p>
        </div> */}
        {/* <div className="navigation menu-item external">
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
        </div> */}
        <div className="dark-mode-toggle menu-item">
          <button className="toggle-contain" onClick={() => props.toggleDarkMode()}>
            <div className={props.darkMode ? "toggle dark-mode-on" : 'toggle'}>
            <img className="sun" src={sun}></img>
            <img className="moon" src={moon}></img>
            </div>
          </button>
        </div>
        <p className="footer menu-item">©2020 Built in Seattle</p>
      </div>
    </div>
  )
}

export default Menu
