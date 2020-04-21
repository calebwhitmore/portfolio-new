import React from "react"

import Layout from "../components/layout/layout"
import Projects from "../components/projects/projects"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout id={1}>
        <SEO title="Home" />
        <h2 className="page-title">
                Product designer
                <br />
                Based in Seattle
              </h2>
        <Projects />
    </Layout>
  )
}

export default IndexPage
