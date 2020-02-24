/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./style.css"
import "./style-critical.css"

const Layout = ({ children }) => {
  return (
    <>
      <main id="main" className="overflow-hidden main"
      style={{
        "padding-top": "24px"
      }}>
        {children}
      </main>
      <footer
        className="grid"
        style={{
          margin: "24px auto",
          "text-align":"right"
        }}
      >
        © 2004-{new Date().getFullYear()} Kentico
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
