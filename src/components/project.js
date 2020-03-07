import React from "react"
import Link from 'gatsby-link'
import Img from "gatsby-image"

import './project.scss'

export default function Project(props) {
  return (
    <Link  
    key={props.project.id}
    to={props.project.fields.slug}
    className="project-container">
      <div className="project">
      <Img 
            className="post-image" 
            fluid={props.project.frontmatter.projectImage.childImageSharp.fluid} 
            alt={props.project.frontmatter.projectImageAltTag}/>
        <h3>{props.project.frontmatter.title}</h3>
        <h4>{props.project.frontmatter.date}</h4>
      </div>
    </Link>
  )
}