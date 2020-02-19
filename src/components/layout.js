/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          firstName
          secondName
        }
      }
    }
  `)

  return (
    <div className="page-container">
      <Header 
        siteTitle={data.site.siteMetadata.title}
        firstName={data.site.siteMetadata.firstName}
        secondName={data.site.siteMetadata.secondName}
      />
      {children}
      <footer>
          
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
