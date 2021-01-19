import React, { useEffect, useState } from "react"

import SeriesCover from "../Home/SeriesCover"

import "../../public/css/SearchStyles/Search.css"

function SectionSearch() {
  const [ loader , setLoader ] = useState(true)
  const [ error, setError ] = useState(null)
  const [ series, setSeries ] = useState([])
  const [ hash, setHash ] = useState(window.location.hash.split("/")[2].replace(/%20/g, " "))

  useEffect(() => {
    fetch(`http://api.tvmaze.com/search/shows?q=${hash}`)
      .then(res => res.json())
      .then(res => {
        setSeries(res)
        setLoader(false)
      },
      err => {
        setLoader(false)
        setError(err)
      })
  }, [])

  if(error){
    return (
      <p className="Search__error">Error: {error.message}</p>
    )
  } else if(loader){
    return (
      <img className="Search__loader" src="../../public/img/Spinner-1s-200px.svg" alt="Loader..." />
    )
  } else{
    return(
      <>
        <h2 className="Search__title">{hash.toUpperCase()}</h2>
        <div className="Search__seriesContent">
          {series.map((el) => 
            <SeriesCover 
              myId={el.show.id}
              key={el.show.id} 
              src={el.show.image 
                ? el.show.image.medium 
                : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"} 
              alt={el.show.name}
            />
          )}
        </div>
      </>
    )
  }
}

export default SectionSearch 