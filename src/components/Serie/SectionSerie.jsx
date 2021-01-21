import React, { useEffect, useState } from "react"

import SerieStructure from "./SerieStructure"

import "../../public/css/SeriesStyles/SeriesStructure.css"

function SectionSerie() {
  const [ loader, setLoader ] = useState(true)
  const [ error, setError ] = useState(null)
  const [ series, setSeries ] = useState({})
  const [ hash, setHash ] = useState(window.location.hash.split("/")[2])
  const [ image, setImage ] = useState("")
  const [ text, setText ] = useState("")
  const [ genres, setGenres ] = useState([])
  const [ name, setName ] = useState("")

  let index = 1

  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${hash}`)
      .then(res => res.json())
      .then(res => {
        setSeries(res)
        setImage(
          res.image
            ? res.image.medium
            : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
        )
        setText(
          res.summary 
            ? res.summary
            : "Not Summary"
        )
        setGenres(res.genres)
        setName(res.name)
        setLoader(false)
        console.log(res)
      },
      error => {
        setLoader(false)
        setError(error)
      })
  }, [])

  if(error){
    return <p className="SeriesStructure__error" >Error: {error.message}</p>
  } else if(loader){
    return <img className="SeriesStructure__loader" src="../../public/img/Spinner-1s-200px.svg" alt="Loader..." />
  } else{
    return(
      <SerieStructure 
        src={
          image
            ? image
            : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
        } 
        name={name.toUpperCase()} 
        premiered={series.premiered} 
        genres={genres.map((el) => <p className="SeriesStructure__textGenres" key={index++}>{el}</p>)}
        summary={
          text
            ? text.replace(/(\<.\>|\<\/.\>)/g, "")
            : "Not Summary"
        } 
      />
    )
  }
}

export default SectionSerie