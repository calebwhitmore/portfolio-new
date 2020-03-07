import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./menu.scss"

const Menu = () => {
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
        <Link className="menu-item" to="/">
          <h1>
            {data.site.siteMetadata.firstName}
            <br></br>
            {data.site.siteMetadata.secondName}
          </h1>
        </Link>
        <div className="about menu-item">
          <h4>
            Caleb is a passionate designer from the UK, with a BSc in Product
            design from Brunel University, London. He works at Microsoft and is
            based in Seattle, Washington. <br /> <br />
            He has experience in UX design, Product design, 3D modelling and
            rendering, motion design, graphic design and sketching. He is
            capable with HTML, CSS, Javascript and React.
          </h4>
        </div>
        <div className="external-links menu-item">
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
        </div>
        <div className="contact menu-item">
          <p>
            For enquiries about projects, freelance work, or other work
            oppertunities, please reach out to me at caleb.whitmore@outlook.com
          </p>
        </div>
        <p className="footer menu-item">©2020 Built in Seattle</p>
      </div>
    </div>
  )
}

export default Menu
