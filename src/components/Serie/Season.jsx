import React, { useEffect, useState } from "react"

import Cap from "./Cap"

import "../../public/css/SeriesStyles/SeriesSeason.css"

function Season(props) {
  const [ loader, setLoader ] = useState(true)
  const [ error, setError ] = useState(null)
  const [ series, setSeries ] = useState([])

  useEffect(() => {
    fetch(`http://api.tvmaze.com/seasons/${props.id}/episodes`)
      .then(res => res.json())
      .then(res => {
        setSeries(res)
        console.log(res)
      })
  }, [])

  return(
    <details className="SeriesSeason__details" >
      <summary className="SeriesSeason__summary" >Season {props.num}</summary>
      {series.map((el) => 
        <Cap 
          key={el.id} 
          img={
            el.image
              ? el.image.medium
              : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
          } 
          name={el.name} 
          summary={
            el.summary
              ? el.summary.replace(/(\<.\>|\<\/.\>)/g, "")
              : "Not summary"
            } 
        />)}
    </details>
  )
}

export default Season