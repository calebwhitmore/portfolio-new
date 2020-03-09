import React from "react"

import Layout from "../components/layout"
import Projects from "../components/projects"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h2 className="page-title">
        Multi-disciplinary
        <br></br>
        designer
      </h2>
      <Projects />
    </Layout>
  )
}

export default IndexPage
