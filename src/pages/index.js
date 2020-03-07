import React from "react"

import Layout from "../components/layout"
import ComponentContainer from "../components/componentContainer"
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
      <ComponentContainer />
    </Layout>
  )
}

export default IndexPage
