import React from "react"

import Layout from "../components/layout"
import ComponentContainer from "../components/componentContainer"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = ({ children }) => {
    return (
      <Layout>
      <SEO title="Home" />
      <ComponentContainer/>
    </Layout>
    )
}

export default IndexPage
