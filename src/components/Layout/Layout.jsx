import React from "react"
import Nav from "./TopNav"
import Footer from "./Footer"

export default ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}