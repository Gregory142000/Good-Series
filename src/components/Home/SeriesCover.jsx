/** Main Import */
import React from 'react'
/** Styles Import */
import "../../public/css/HomeStyles/SeriesCover.css"
/** Show Series */
function SeriesCover(props){
  return(
    <div className="SeriesCover">
      <img className="SeriesCover__image" src={props.src} alt={props.alt} title={props.alt} />
      <div className="SeriesCover__textBox" >
        <p  className="SeriesCover__text">{props.text}</p>
        <a className="SeriesCover__link" href="#">More</a>
      </div>
    </div>
  )
}

export default SeriesCover