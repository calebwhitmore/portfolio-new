import React from "react"

import Layout from "../components/layout/layout"
import Projects from "../components/projects/projects"
import SEO from "../components/seo"

import './index.scss'
import earth from "../images/icons/earth.svg"

const IndexPage = () => {
  return (
    <Layout id={1} >
        <SEO title="Home" />
        <div className="intro">
        <h1 className="summary">Senior Designer, crafting experiences that make sense.</h1>
        <div className="sub-summary">
        <img className="icon" src={earth}/>
        <h3>Located in Seattle, WA</h3>
        </div>
        </div>
        <Projects />
    </Layout>
  )
}

export default IndexPage
