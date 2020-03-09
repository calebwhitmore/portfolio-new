import React from "react"

import Menu from "./menu"
import "./layout.scss"

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    }
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode() {
    var root = document.getElementsByTagName("html")[0]
    this.setState({ darkMode: !this.state.darkMode })
    root.classList.toggle("dark-mode")
  }

  componentWillMount() {
    var today = new Date().getHours()

    if (today >= 7 && today <= 18) {
      
    } else {
      this.toggleDarkMode()
    } 

  }

  render(props) {
    return (
      <div className="page-container">
        <Menu toggleDarkMode={this.toggleDarkMode} darkMode={this.state.darkMode}/>
        {this.props.children}
        <footer></footer>
      </div>
    )
  }
}

export default Layout
