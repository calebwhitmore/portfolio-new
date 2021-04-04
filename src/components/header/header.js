import { Link } from "gatsby"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"

import "./header.scss"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      pageTag: "",
    }
  }

  componentDidMount() {
    this.setState({
      pageTag: window.location.pathname.split("/")[1],
    })
  }

  render(props) {
    return (
        <div className="header-container">
          <div className="header">
            <div className="header-item">
              <Link
                className={
                  "nav-link " +
                  (this.state.pageTag === "" ? "selected " : "unselected ")
                }
                to="/"
              >
                <p>Portfolio</p>
              </Link>
              <Link
                className={
                  "nav-link " +
                  (this.state.pageTag === "about" ? "selected " : "unselected ")
                }
                to="/about"
              >
                <p>About</p>
              </Link>
              {/* <Link
                className={
                  "nav-link " +
                  (this.state.pageTag === "writing"
                    ? "selected "
                    : "unselected ")
                }
                to="/about"
              >
                <p>Writing</p>
              </Link> */}
              <Link
                className={
                  "nav-link " +
                  (this.state.pageTag === "bookmarks"
                    ? "selected "
                    : "unselected ")
                }
                to="/bookmarks"
              >
                <p>Bookmarks</p>
              </Link>
            </div>
            <div className="bar"></div>
          </div>
        </div>
    )
  }
}

export default Header
