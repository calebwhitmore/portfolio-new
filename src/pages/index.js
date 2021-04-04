import React from "react"

import Layout from "../components/layout/layout"
import Projects from "../components/projects/projects"
import SEO from "../components/seo"
import "animate.css/animate.min.css"

import "./index.scss"

const IndexPage = () => {
  return (
    <Layout id={1}>
      <SEO title="Home" />
      <div className="intro">
        <h1 className="summary">
          A designer focused on craft, delight, and seamless user experiences.
        </h1>
      </div>
      <div>
        <div class="home-sub-head">
          <p class="home-sub-title">Projects</p>
          <p class="home-description">
            A selection of projects that I've worked on in recent history. I've
            tried to pick work that demonstrates my ability to work across
            disciplines - spanning from branding, to software, to industrial
            design and illustration.
          </p>
        </div>
      </div>
      <Projects />
    </Layout>
  )
}

export default IndexPage
