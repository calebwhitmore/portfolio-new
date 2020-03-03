import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Project from "./project"

import Image from "./image"

import "./componentContainer.scss"
import headshot from "../images/headshot.jpg"

const ComponentContainer= ({ headshot }) => {

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          firstName
          secondName
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              tags

            }
          }
        }
      }
    }
  `)

  //omitted from query 
  //postImage {
  //   childImageSharp {
  //     fluid(maxWidth: 1200, quality: 100) {
  //       ...GatsbyImageSharpFluid
  //     }
  //   }
  // }
    const projects = data.allMarkdownRemark.edges;

    return (
        <div className="component-container">
            <div className="component">
                <h4>
                Caleb is a passionate designer from the UK, with a BSc in Product design from Brunel University, London. He works for Microsoft on Outlook and is based in Seattle, Washington. <br/> <br/>He has experience in UX design, Product design, 3D modelling and rendering, motion design, graphic design and sketching. He is capable with HTML, CSS, Javascript and React.
                </h4>
            </div>
            <div className="component">
                <Link className="external" to="/">
                    <p className="title">instagram</p>
                    <p>calebwhitmore</p>
                </Link>
                <Link className="external" to="/">
                    <p className="title">twitter</p>
                    <p>calebwhitmore</p>
                </Link>
                <Link className="external" to="/">
                    <p className="title">dribbble</p>
                    <p>calebwhitmore</p>
                </Link>
                <Link className="external" to="/">
                    <p className="title">blog</p>
                    <p>panop.co</p>
                </Link>
            </div>
            <div className="component">
                <p>For enquiries about projects, freelance work, or other work oppertunities, please reach out to me at caleb.whitmore@outlook.com</p>
            </div>
            {projects.map(({ node, index }) => {
            return(<Project project={node} key={index} />)
            })}
            <div className="component">
                <p>©2020 Built in Seattle</p>
            </div>
        </div>
    )
}

export default ComponentContainer