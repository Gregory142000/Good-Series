import React from "react"

import "../../public/css/SeriesStyles/SeriesStructure.css"

function SerieStructure(props) {
  return(
    <>
      <img className="SeriesStructure__image" src={props.src} alt={props.name} title={props.name}/>
      <div className="SeriesStructure__data">
        <h2 className="SeriesStructure__title" >{props.name}</h2>
        <div className="SeriesStructure__premierBox">
          <p className="SeriesStructure__subtitle">PREMIERED</p>
          <p className="SeriesStructure__premier">{props.premiered}</p>
        </div>
        <div className="SeriesStructure__genresBox">
          <p className="SeriesStructure__subtitle">GENRES</p>
          <div className="SeriesStructure__genres">{props.genres}</div>
        </div>
      </div>
      <p className="SeriesStructure__summary">{props.summary}</p>
    </>
  )
}

export default SerieStructure