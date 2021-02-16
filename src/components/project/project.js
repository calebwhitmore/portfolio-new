import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"

import "./project.scss"

export default function Project(props) {
  return (
    <Link to={props.project.fields.slug} className="project-container">
      <div className="project">
        <div className="projectTileText">
          <h2 className="serif">{props.project.frontmatter.title}</h2>
          <p>{props.project.frontmatter.tags}</p>
        </div>
        <Img
          className="post-image"
          fluid={props.project.frontmatter.projectImage.childImageSharp.fluid}
          alt={props.project.frontmatter.projectImageAltTag}
        />
      </div>
    </Link>
  )
}
