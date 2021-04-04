import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import onRock2 from "./on-rock2.jpg"
import "animate.css/animate.min.css"
import "./about.scss"

const AboutPage = () => {
  return (
    <Layout id={1}>
      <SEO title="about" />
      <div className="aboutContainer">
        <h1>
          I'm Caleb and I'm from the UK. I live in Seattle and work as a Senior
          Designer for Microsoft
        </h1>
        <div className="headshot">
          <img className="landscape" src={onRock2} alt="Caleb's hand"></img>
        </div>
        <h4>
          Born in '93, I grew up in Hampshire. In 2016 I graduated with a degree
          in Product design which taught me a lot about the design process.
        </h4>
        <h4>
          I love learning, and owning as much process as I can - from user
          research to pixel pushing, and even a little bit of front end
          development. Right now, I'm working on Outlook - one of the biggest
          mail clients in the world. My day to day involves a lot of things,
          from initial research and strategy all the way through to final UI
          proposals and UI Kit development & maintenance.
        </h4>
        <h4>
          I've been in the industry for 5 years, and possess a diverse skillset
          spanning both digital and physical. I like to work on meaningful
          products and live for a good design system.
        </h4>
        <h4>
          Outside of work you can find me cycling, playing pick up basketball,
          or tinkering with a new hobby (3d printing is the latest one).
        </h4>

        <div className="history">
          <div className="history-item">
            <h4>2021</h4>
            <p>Joined the Outlook Mac and Mobile team</p>
            <p>Serif e-reader concept</p>
          </div>
          <div className="history-item">
            <h4>2020</h4>
            <p>Promoted to Senior Designer</p>
            <p>Learnt Protopie</p>
            <p>Started 3D printing</p>
            <p>Viewfinder Camera Project</p>
            <p>Micasa Project</p>
          </div>
          <div className="history-item">
            <h4>2019</h4>
            <p>Learnt Protopie</p>
            <p>Design Icons Project</p>
            <p>Mouse Redesign Project</p>
            <p>Learned Gatsby</p>
          </div>
          <div className="history-item">
            <h4>2018</h4>
            <p>Promoted to Designer 2</p>
            <p>Moved to Seattle to work at Microsoft HQ</p>
          </div>
          <div className="history-item">
            <h4>2017</h4>
            <p>Learned the basics of React for web</p>
          </div>
          <div className="history-item">
            <h4>2016</h4>
            <p>
              Moved to Vancouver to work remotely as part of the Outlook Web
              Team
            </p>
            <p>
              Graduated from Brunel University with a Bachelor of Science in
              Product Design
            </p>
          </div>
          <div className="history-item">
            <h4>2015</h4>
            <p>Interned at Microsoft</p>
            <p>Study exchange at TU Delft in the Netherlands</p>
            <p>Learned basics of web design and development</p>
            <p>Launched my first web Portfolio</p>
          </div>
          <div className="history-item">
            <h4>2013</h4>
            <p>Enrolled at Brunel University Studying Product Design</p>
          </div>
          <div className="history-item">
            <h4>2010</h4>
            <p>Started at Peter Symonds College</p>
          </div>
          <div className="history-item">
            <h4>2008</h4>
            <p>
              First experience with UI design - customizing UBUNTU on my acer
              aspire one.
            </p>
          </div>
          <div className="history-item">
            <h4>2006</h4>
            <p>
              Did my first sketch of a consumer product - a PDA (anyone remember
              palm?)
            </p>
            <p>Started sketching mobile phones</p>
          </div>
          <div className="history-item">
            <h4>2004</h4>
            <p>Started at Cantell Secondary School</p>
          </div>
          <div className="history-item">
            <h4>1997</h4>
            <p>Started at Mansbridge Primary School</p>
          </div>
          <div className="history-item">
            <h4>1993</h4>
            <p>Born in home town of Southampton, Hampshire.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
