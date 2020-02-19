import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.scss'

const Header = ({ firstName, secondName }) => (
  <header>
    <div className="container"
    >
      <h1>
        <Link
          to="/"
        >
          {firstName}
          <br></br>
          {secondName}
        </Link>
      </h1>
      <h2>
        Multi-disciplinary
        <br></br>
        designer
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  firstName: PropTypes.string,
  secondName: PropTypes.string,
}

Header.defaultProps = {
  firstName: ``,
  secondName: ``,
}

export default Header
