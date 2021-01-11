/** Main Imports */
import React, { Fragment } from "react"
/** My components import */
import PopSection from "../components/Home/PopSection"
import CategorySection from "../components/Home/CategorySection"
import PreviewSection from "../components/Home/PreviewSection"
/** Component that represent the Home Page */
function Home() {
  return(
      <React.Fragment>
        <h1>Hi I am home</h1>
        <PopSection />
        <CategorySection />
        <PreviewSection />
      </React.Fragment>
  )
}

export default Home