import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import SeriesCover from "./SeriesCover"

function CategorySection(props) {
  const [ loader, setLoader ] = useState(true)
  const [ error, setError ] = useState(null)
  const [ series, setSeries ] = useState([])

  let count = 0;

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(res => {
        res.forEach((el) => {
          el.genres.forEach((elem) => {
            if(elem === "Drama" && count < 2){
              console.log(el)
              setSeries(series.push(el))
              count++
            }
          })
        })
      })
  }, [])

  return(
    <div>
      <h2>{series.name}</h2>
      <div>
        <div>
          <SeriesCover />
          <SeriesCover />
        </div>
        <Link to="#">
          <div></div>
        </Link>
      </div>
    </div>
  )
}

export default CategorySection