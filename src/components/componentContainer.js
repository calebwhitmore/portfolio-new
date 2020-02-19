import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import "./componentContainer.scss"

const ComponentContainer= ({ children }) => {
    return (
        <div className="component-container">
            <div className="component">
                <h4>
                Caleb whitmore is a driven designer from the UK, with a BSc in Product design from Brunel University, London. He works for Microsoft on an email client called Outlook and is based in Seattle, Washington. <br/> <br/>He has experience in UX design, Product design, 3D modelling and rendering, motion design, graphic design and sketching.
                </h4>
            </div>
            <div className="component">
                <Link className="external" to="/">
                    <p className="title">instagram</p>
                    <p>calebwhitmore</p>
                </Link>
                <Link className="external" to="/">
                    <p className="title">twitter</p>
                    <p>calebwhitmore</p>
                </Link>
                <Link className="external" to="/">
                    <p className="title">dribbble</p>
                    <p>calebwhitmore</p>
                </Link>
                <Link className="external" to="/">
                    <p className="title">blog</p>
                    <p>panop.co</p>
                </Link>
            </div>
            <Link className="component project" to="/"/>
            <Link className="component project" to="/"/>
            <Link className="component project" to="/"/>
            <Link className="component project" to="/"/>
            <Link className="component project" to="/"/>
            <Link className="component project" to="/"/>
            <Link className="component project" to="/"/>
            <Link className="component project" to="/"/>
            <Link className="component project" to="/"/>
            <Link className="component project" to="/"/>
        </div>
    )
}

export default ComponentContainer