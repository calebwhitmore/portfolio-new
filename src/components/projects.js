import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Project from "./project"

import Image from "./image"

import "./projects.scss"
import headshot from "../images/headshot.jpg"

const Projects = ({ headshot }) => {

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
                projectImage {
                        childImageSharp {
                            fluid(maxWidth: 1200, quality: 100) {
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }

            }
          }
        }
      }
    }
  `)
    const projects = data.allMarkdownRemark.edges;

    return (
        <div className="projects">
            {projects.map(({ node, index }) => {
            return(<Project project={node} key={index} />)
            })}
        </div>
    )
}

export default Projects