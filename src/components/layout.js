/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Menu from "./menu"
import "./layout.scss"

class Layout extends React.Component {
  componentDidMount() {
    var today = new Date().getHours()
    var root = document.getElementsByTagName("html")[0]
    const { children } = PropTypes.node.isRequired
    if (today >= 7 && today <= 18) {
      root.setAttribute("class", "light-mode")
    } else {
      root.setAttribute("class", "dark-mode")
    }
  }
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div className="page-container">
        <Menu/>
        {this.props.children}
        <footer></footer>
      </div>
    )
  }
}

export default Layout
