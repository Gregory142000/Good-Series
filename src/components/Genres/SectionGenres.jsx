import React, { useState, useEffect } from "react"

import SeriesCover from "../Home/SeriesCover"

import "../../public/css/GenresStyles/Genres.css"

function SectionGenres() {
  const [ loader, setLoader ] = useState(true)
  const [ error, setError ] = useState(null)
  const [ series, setSeries ] = useState([])

  let newArray = [],
    hash = window.location.hash.split("/")[2],
    count = 0

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(res => {
        res.forEach((el) => {
          el.genres.forEach((elem) => {
            if(elem === hash && count < 10){
              newArray[count] = el
              count++
            }
          })
        })
        setSeries(newArray)
        setLoader(false)
      },
      err => {
        setLoader(false)
        setError(err)
      })
  }, [])

  if(error){
    return <p className="Genres__error">Error: {error.message}</p>
  } else if(loader){
    return <img className="Genres__loader" src="../../public/img/Spinner-1s-200px.svg" alt="Loader..."/>
  } else{
    return (
      <>
        <h2 className="Genres__title">{hash.toUpperCase()}</h2>
        <div className="Genres__seriesContent">
          {series.map((el) => 
            <SeriesCover 
              myId={el.id}
              key={el.id}
              src={
                el.image
                  ? el.image.medium
                  : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
              }
              alt={el.name}
            />)}    
        </div>
      </>
    )
  }
}

export default SectionGenres