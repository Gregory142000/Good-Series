import React, {useState, useEffect} from 'react'

import "../../public/css/HomeStyles/SeriesCover.css"

function SeriesCover(props){
  return(
    <div className="SeriesCover">
      <img className="SeriesCover__image" src={props.src} alt={props.alt} title={props.alt} />
      <div className="SeriesCover__textBox" >
        <p  className="SeriesCover__text">{props.text}</p>
      </div>
    </div>
  )
}

export default SeriesCover