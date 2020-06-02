import React from "react"

import Layout from "../components/layout/layout"
import Projects from "../components/projects/projects"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout id={1} pageTitleLine1={'Caleb'} pageTitleLine2={'Whitmore'}>
        <SEO title="Home" />
        <Projects />
    </Layout>
  )
}

export default IndexPage
