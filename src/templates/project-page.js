import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Projects from "../components/projects/projects"
import SEO from "../components/seo"

import "./project-page.scss"

class ProjectPageTemplate extends React.Component {
  render() {
    const project = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        id={2}
        pageTitleLine1={project.frontmatter.title}
        tags={project.frontmatter.tags}
        showBack={true}
      >
        <SEO title={project.frontmatter.title} description={project.excerpt} />
        <div className="project-page-container">
          <div className="project-page">
            <div className="intro">
              <h1 className="summary">{project.frontmatter.description}</h1>
            </div>
            <div
              className="project-open-content"
              dangerouslySetInnerHTML={{ __html: project.html }}
            ></div>
          </div>
          <div className="more-content">
            {next && (
              <Link className="next" to={next.fields.slug} rel="next">
                <div className="arrow">
                  <p>←</p>
                </div>{" "}
                <h4>
                  <span>Previous</span>
                  <br />
                  {next.frontmatter.title}
                </h4>
              </Link>
            )}
            {previous && (
              <Link className="previous" to={previous.fields.slug} rel="prev">
                <h4>
                  <span>Next</span>
                  <br />
                  {previous.frontmatter.title}
                </h4>
                <div className="arrow">
                  <p>→</p>
                </div>
              </Link>
            )}
          </div>
          <Projects />
        </div>
      </Layout>
    )
  }
}

export default ProjectPageTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        description
      }
    }
  }
`
