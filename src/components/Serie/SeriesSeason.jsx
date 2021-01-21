import React, { useEffect, useState } from "react"

import Season from "./Season"

function SeriesSeason() {
  const [ loader, setLoader ] = useState(true)
  const [ error, setError ] = useState(null)
  const [ seasons, setSeasons ] = useState([])
  const [ series, setSeries ] = useState([])
  const [ id, setId ] = useState(window.location.hash.split("/")[2])

  let count = 1

  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${id}/seasons`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setSeasons(res)
      })
  }, [])

  return(
    <>
      <h3 className="SeriesSeason__sectionTitle">SEASONS</h3>
      <div className="SeriesSeason__divDetails">
        {seasons.map((el) => <Season key={el.id} id={el.id} num={count++}/>)}
      </div>
    </>
  )
}

export default SeriesSeason