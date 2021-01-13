/** Main Imports */
import React, { Fragment } from "react"
/** My components import */
import AllSeries from "../components/Home/AllSeries"
import CategorySection from "../components/Home/CategorySection"
import PreviewSection from "../components/Home/PreviewSection"
/** Styles Import */
import "../public/css/HomeStyles/Home.css"

/** Component that represent the Home Page */
function Home() {
  return(
    <Fragment>
      <section className="Home">
        <h2 className="Home__title">ALL SERIES</h2>
        <div className="Home__imageBox">
          <AllSeries />
        </div>
      </section>  
      <CategorySection />
      <PreviewSection />
    </Fragment>
  )
}

export default Home