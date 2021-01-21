import React from "react"

import "../../public/css/SeriesStyles/SeriesSeason.css"

function Cap(props) {
  return(
    <div className="SeriesSeason__dataBox">
      <img className="SeriesSeason__img" src={props.img} alt={props.name}/>
      <div className="SeriesSeason__description">
      <h4 className="SeriesSeason__title" >{props.name}</h4>
      <p className="SeriesSeason__text" >{props.summary}</p>
      </div>
      <hr className="SeriesSeason__hr" />
    </div>
  )
}

export default Cap