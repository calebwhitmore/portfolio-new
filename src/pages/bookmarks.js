import React, { useState }  from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "animate.css/animate.min.css"
import "./bookmarks.scss"

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class BookmarksPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: "portfolios",
      bookmarks: [
        {
          id: 0,
          kind: "portfolio",
          title: "Timothy Achumba",
          url: "https://timothyachumba.com/",
          description:
            "Incredibly talented Principle Designer at Microsoft that knows craft and code. Aparently a magician in Origami.",
        },
        {
          id: 1,
          kind: "portfolio",
          title: "Dom Davies",
          url: "https://www.domdavies.com/",
          description:
            "Designer/Prototyper at Apple with an eye for the details. Led the Outlook mobile redesign back in 2018",
        },
        {
          id: 2,
          kind: "portfolio",
          title: "Tim Zarki",
          url: "https://www.zarki.net/",
          description:
            "Visual Designer at Occulus that I've been following for a while. One of those dudes you kinda hate because he's so good.",
        },
        {
          id: 3,
          kind: "portfolio",
          title: "Zann St Pierre",
          url: "https://zann.com.au/",
          description:
            "Design Developer who's super talented and possibly works harder than anyone else I know.",
        },
        {
          id: 4,
          kind: "portfolio",
          title: "Joe Woodward",
          url: "https://joewoodward.co",
          description:
            "My manager at Microsoft. Crafty and uncompromising when it comes to the details. A manager that also gets shit done.",
        },
        {
          id:5,
          kind: "resource",
          title: "Atomic design",
          url: "https://atomicdesign.bradfrost.com/table-of-contents/",
          description:
            "A great book written by Brad Frost, which documents how to handle scale design systems at scale.",
        },
        {
          id:6,
          kind: "resource",
          title: "The Role of Animation and Motion in UX",
          url: "https://www.nngroup.com/articles/animation-purpose-ux/",
          description:
            "Nielson Norman Group published a fantastic article which communicates how we should be implementing motion in our products, in a way that is purposeful and considered.",
        },
        {
          id:7,
          kind: "other",
          title: "Awwwards",
          url: "https://www.awwwards.com/",
          description:
            "Promoting different experiences around the web, based on design, usability, creativity and content. This is my day-to-day go to site to get inspired.",
        },
        {
          id:8,
          kind: "other",
          title: "Bēhance",
          url: "https://www.behance.net/",
          description:
            "I've been visiting this site since I was in design school. It's a site for creatives to promote their work no matter their industry.",
        },
        {
          id:9,
          kind: "other",
          title: "Abduzeedo",
          url: "https://abduzeedo.com/",
          description:
            "Founded by Fabio Sasso in 2006 as a personal blog, this is a collective of individual writers sharing articles about design, photography, and UX",
        },
        {
          id:10,
          kind: "resource",
          title: "The Design of Everyday Things",
          url: "https://www.nngroup.com/books/design-everyday-things-revised/",
          description:
            "The bible of design, this exists on every design students reading list. Don Norman walks us through the normalization of patterns in order to make things more usable.",
        },
        {
          id:11,
          kind: "portfolio",
          title: "Yota Kakuda",
          url: "https://www.yotakakuda.com/",
          description:
            "An extremely refined industrial designer, ex MUJI. I own (and love) one of his clocks that he designed for Lemnos. It makes me slightly happier. ",
        },
        {
          id:12,
          kind: "portfolio",
          title: "Naoto Fukasawa",
          url: "https://naotofukasawa.com",
          description:
            "If I could have dinner with one designer in the world, it would probably be this person. The Godfather of design at MUJI. ",
        },
        {
          id:12,
          kind: "portfolio",
          title: "Brian Lovin",
          url: "https://brianlovin.com",
          description:
            "A really talented and active Software Designer at GitHub",
        },
        {
          id:13,
          kind: "resource",
          title: "Design Details Podcast",
          url: "https://designdetails.fm",
          description:
            "A podcast ran by Brian Lovin and Marshall Block, about all things designing software.",
        },
        {
          id:14,
          kind: "resource",
          title: "Minor Details Podcast",
          url: "https://minordetailspodcast.com",
          description:
            "A podcast ran by Nicholas Baker and James Connors , about all things Industrial Design.",
        },
        {
          id:15,
          kind: "portfolio",
          title: "Donna Seo",
          url: "http://donnaseo.com",
          description:
            "An amazingly talented Colleague and friend at Microsoft. Leading the design of Outlook Desktop",
        },
        {
          id:16,
          kind: "portfolio",
          title: "Janiece Allison",
          url: "https://www.janieceallison.design",
          description:
            "A designer I wish I had the chance to work with more. She's a really talented Designer & Illustrator who knows code pretty well",
        },
        {
          id:17,
          kind: "portfolio",
          title: "Siddhant Mehta",
          url: "https://www.siddhant.ca",
          description:
            "A good friend from my Vancouver days, we worked side by side for a long time at Microsoft. Fondly remember our lunches around the city together.",
        },
      ],
    }
    this.selectTab = this.selectTab.bind(this)
    
  }

  selectTab(tab) {
    this.setState({
      selectedTab: tab,
    })
  }
  
  render() {

    return (
      <Layout id={1}>
        <SEO title="about" />
        <div className="aboutContainer">
          <h1>
            A collection of portfolios, websites and resources that I find
            inspirational.
          </h1>
          <div className="bookmarks-container">
            <div className="bookmarks-header">
              <button
                className={
                  "tab " +
                  (this.state.selectedTab == "portfolios" ? "active " : "")
                }
                onClick={() => this.selectTab("portfolios")}
              >
                <p>Portfolios</p>
              </button>
              <button
                className={
                  "tab " +
                  (this.state.selectedTab == "resources" ? "active " : "")
                }
                onClick={() => this.selectTab("resources")}
              >
                <p>Resources</p>
              </button>
              <button
                className={
                  "tab " + (this.state.selectedTab == "other" ? "active " : "")
                }
                onClick={() => this.selectTab("other")}
              >
                <p>Other</p>
              </button>
            </div>
            <TransitionGroup timeout={200} className="bookmarks">
            {this.state.selectedTab == "portfolios" ? (
                <CSSTransition id={2} timeout={300}>
                <div>
                {this.state.bookmarks.filter(
                  item => (item.kind == "portfolio")
                ).map(item => (
                    <a id={item.id} className="bookmark" href={item.url}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </a>
                ))}
                </div>
              </CSSTransition>
            ) : null}
            {this.state.selectedTab == "resources" ? (
                <CSSTransition id={2} timeout={300}>
                <div>
                {this.state.bookmarks.filter(
                  item => (item.kind == "resource")
                ).map(item => (
                    <a id={item.id} className="bookmark" href={item.url}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </a>
                ))}
                </div>
              </CSSTransition>
            ) : null}
            {this.state.selectedTab == "other" ? (
              <CSSTransition id={3} timeout={300}>
                <div>
                {this.state.bookmarks.filter(
                  item => (item.kind == "other")
                ).map(item => (
                    <a id={item.id} className="bookmark" href={item.url}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </a>
                ))}
                </div>
              </CSSTransition>
            ) : null}
            </TransitionGroup>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BookmarksPage
