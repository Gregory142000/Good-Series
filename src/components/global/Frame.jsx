/** Main Imports */
import React from "react"
/** My components import*/
import Header from "./Header"
import Footer from "./Footer";

/** Component that frame to all the pages of the website between the Header and the Footer */
function Frame(props) {
  return(
    <React.Fragment>
      <Header />
        {props.children}
      <Footer />
    </React.Fragment>
  )
}

export default Frame