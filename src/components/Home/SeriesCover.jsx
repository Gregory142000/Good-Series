/** Main Import */
import React from 'react'
import { Link } from "react-router-dom"
/** Styles Import */
import "../../public/css/HomeStyles/SeriesCover.css"
/** Show Series */
function SeriesCover(props){
  function url(e) {
    e.preventDefault()
    window.location.hash = `serie/${props.myId}`
  }

  return(
    <div className="SeriesCover">
      <img className="SeriesCover__image" src={props.src} alt={props.alt} title={props.alt} />
      <div className="SeriesCover__textBox" >
        <p  className="SeriesCover__text">{props.text}</p>
        <Link onClick={url} className="SeriesCover__link" to={`serie/${props.myId.toString()}`}>More</Link>
      </div>
    </div>
  )
}

export default SeriesCover