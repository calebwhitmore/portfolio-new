import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Projects from "../components/projects/projects"
import SEO from "../components/seo"

import Img from "gatsby-image"

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
            <Img
              className="project-header-image"
              fluid={project.frontmatter.headerImage.childImageSharp.fluid}
              alt={project.frontmatter.headerImageAltTag}
            />
            <div className="project-sub-head">
              <h4 className="project-sub-title">
                {project.frontmatter.projectSubTitle}
              </h4>
              <h4 className="project-description">
                {project.frontmatter.projectDescription}
              </h4>
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
                  <span>Previous project</span>
                  <br />
                  {next.frontmatter.title}
                </h4>
              </Link>
            )}
            {previous && (
              <Link className="previous" to={previous.fields.slug} rel="prev">
                <h4>
                  <span>Next project</span>
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
        headerImageAltTag
        headerImage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        projectSubTitle
        projectDescription
      }
    }
  }
`
