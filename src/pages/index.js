import React from "react"

import Layout from "../components/layout/layout"
import Projects from "../components/projects/projects"
import SEO from "../components/seo"
import "animate.css/animate.min.css";

import './index.scss'

const IndexPage = () => {
  return (
    <Layout id={1} >
        <SEO title="Home" />
        <div className="intro">
        <h1>Caleb Whitmore</h1>
        <h4>Senior designer at Microsoft with 5 years experience. Diverse skillset spanning both digital and physical. Loves to work on meaningful products and lives for a good design system.</h4>
        </div>
        <Projects />
    </Layout>
  )
}

export default IndexPage
