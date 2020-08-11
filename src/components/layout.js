import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FirebaseContext, useAuth } from './Firebase'; 

import Header from "./header"
import Footer from "./Footer"
import "./layout.css"


const Layout = ({ children }) => {
  const {user, firebase, loading} = useAuth();

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <FirebaseContext.Provider value= {{user, firebase, loading}}>
      <Header />
        <main>{children}</main>
        <Footer />
    </FirebaseContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
