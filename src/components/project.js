import React from "react"
import { graphql } from "gatsby"

export default function Project(props) {
  return (
    <div className="project-container">
      <div className="project">
        <h1>{props.project.frontmatter.title}</h1>
        <h2>{props.project.frontmatter.date}</h2>
      </div>
    </div>
  )
}