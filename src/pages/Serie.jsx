import React from "react"

import SectionSerie from "../components/Serie/SectionSerie"
import SeriesSeason from "../components/Serie/SeriesSeason"

import "../public/css/SeriesStyles/SeriesStructure.css"
import "../public/css/SeriesStyles/SeriesSeason.css"

function Serie() {
  return(
    <>
      <section className="SeriesStructure">
        <SectionSerie />
      </section>
      <section className="SeriesSeason">
        <SeriesSeason />
      </section>
    </>
  )
}

export default Serie 