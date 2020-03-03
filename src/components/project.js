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
            fluid={props.project.frontmatter.postImage.childImageSharp.fluid} 
            alt={props.project.frontmatter.postImageAltTag}/>
        <h1>{props.project.frontmatter.title}</h1>
        <h2>{props.project.frontmatter.date}</h2>
      </div>
    </Link>
  )
}