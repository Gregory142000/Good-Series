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
      <section className="Home__sectionPreview">
      <PreviewSection />
      </section>  
      <section>
        <CategorySection tema="Action" arrow={"￫"}/>
        <CategorySection tema="Romance" arrow={"￩"} title={"CategorySection__title--alignLeft"} seriesBox={"CategorySection__seriesBox--inverse"} link={"CategorySection__link--inverse"}/>
        <CategorySection tema="Comedy" arrow={"￫"}/>
        <CategorySection tema="Medical" arrow={"￩"} title={"CategorySection__title--alignLeft"} seriesBox={"CategorySection__seriesBox--inverse"} link={"CategorySection__link--inverse"}/>
        <CategorySection tema="Crime" arrow={"￫"}/>
        <CategorySection tema="Horror" arrow={"￩"} title={"CategorySection__title--alignLeft"} seriesBox={"CategorySection__seriesBox--inverse"} link={"CategorySection__link--inverse"}/>
      </section>
    </Fragment>
  )
}

export default Home