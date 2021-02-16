import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "animate.css/animate.min.css"
import "./bookmarks.scss"

const BookmarksPage = () => {
  return (
    <Layout id={1}>
      <SEO title="about" />
      <div className="aboutContainer">
        <h1>
          A collection of portfolios, websites and resources that I find
          inspirational.
        </h1>

        <div className="bookmarks">
          <a className="bookmark" href="https://timothyachumba.com/">
            <h4>Timothy Achumba</h4>
            <p>Incredibly talented Principle Designer at Microsoft that knows craft and code. Aparently a magician in Origami. </p>
          </a>
          <a className="bookmark" href="https://www.domdavies.com/">
            <h4>Dom Davies</h4>
            <p>Designer/Prototyper at Apple with an eye for the details. Led the Outlook mobile redesign back in '18</p>
          </a>
          <a className="bookmark" href="https://www.zarki.net/">
            <h4>Tim Zarki</h4>
            <p>Visual Designer at Occulus that I've been following for a while. One of those dudes you kinda hate because he's so good.</p>
          </a>
          <a className="bookmark" href="https://zann.com.au/">
            <h4>Zann St Pierre</h4>
            <p>Design Developer who get's shit done. Possibly works harder than anyone else I know.</p>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default BookmarksPage
