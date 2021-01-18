import React, { useEffect, useState } from "react"

import SeriesCover from "../components/Home/SeriesCover"

function Search() {
  const [ loader , setLoader ] = useState(true)
  const [ error, setError ] = useState(null)
  const [ series, setSeries ] = useState([])
  const [ hash, setHash ] = useState(window.location.hash.split("/")[2])

  useEffect(() => {
    fetch(`http://api.tvmaze.com/search/shows?q=${hash}`)
      .then(res => res.json())
      .then(res => setSeries(res))
  }, [])
return(
  <>
    <h2>{hash.toUpperCase()}</h2>
    <section>
      {series.map((el) => 
        <SeriesCover 
          key={el.show.id} 
          src={el.show.image 
            ? el.show.image.medium 
            : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"} 
          alt={el.show.name}
        />
      )}
    </section>
  </>
)
}

export default Search 