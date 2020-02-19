import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ComponentContainer from "../components/componentContainer"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ComponentContainer />
  </Layout>
)

export default IndexPage
