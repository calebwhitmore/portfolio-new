import React from 'react';

import Menu from "../menu/menu"
import About from "../about/about"
import "./layout.scss"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutOpen: false,
      darkMode: false,
    }
    this.toggleDarkMode = this.toggleDarkMode.bind(this)
    this.toggleAbout = this.toggleAbout.bind(this)
  }
  toggleAbout() {
    let newState = { ...this.state }
    newState = { ...this.state, aboutOpen: !this.state.aboutOpen}
    this.setState(newState)
  }

  toggleDarkMode() {
    var root = document.getElementsByTagName("html")[0]
    this.setState({ darkMode: !this.state.darkMode })
    root.classList.toggle("dark-mode")
  }

  checkDarkMode() {
    if(document.getElementsByTagName("html")[0].classList.contains("dark-mode")) {
      let newState = { ...this.state }
    newState = { ...this.state, darkMode: true}
    this.setState(newState)
    }
  }

  componentDidMount() {
    this.checkDarkMode()
  }

  render(props) {
    return (
      <div className="page-container">
        <Menu
          toggleDarkMode={this.toggleDarkMode}
          darkMode={this.state.darkMode}
          openAbout={this.toggleAbout}
        />
        <div className="page">
          {this.props.children}
          </div>
        {this.state.aboutOpen ? <About closeAbout={this.toggleAbout}/> : null}
        <footer></footer>
      </div>
    )
  }
}

export default Layout
