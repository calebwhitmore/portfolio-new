import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";

import "./project-page.scss";

class ProjectPageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div className="posts">
          <div className="blog-post">
            <div className="img-contain">
              <Img
                fluid={post.frontmatter.postImage.childImageSharp.fluid}
                alt={post.frontmatter.postImageAltTag}
              />
            </div>
            <div className="post-open-header">
              <div>
                <h1>{post.frontmatter.title}</h1>
                <h5 className="author">By <span>{post.frontmatter.author}</span> in <span>{post.frontmatter.tags}</span></h5>
              </div>
            </div>
            <div
              className="post-open-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
          <div className="more-content">
          {next && (
                <Link className='next' to={next.fields.slug} rel="next">
                 <div className="arrow"><p>←</p></div> <h4><span>Next post</span><br/>{next.frontmatter.title}</h4> 
                </Link>
              )}
              {previous && (
                <Link className='previous' to={previous.fields.slug} rel="prev">
                  <h4><span>Previous post</span><br/>{previous.frontmatter.title}</h4><div className="arrow"><p>→</p></div>
                </Link>
              )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default ProjectPageTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        postImageAltTag
        postImage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
