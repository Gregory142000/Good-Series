/** Main Imports */
import React, { useEffect, useState } from "react"
/** My Components Imports */
import SeriesCover from './SeriesCover'
/** Styles Import */
import "../../public/css/HomeStyles/AllSection.css"


function AllSeries() {

  const [ todaySeries, setTodaySeries ] = useState([])
  const [ error, setError ] = useState(null)
  const [ loader, setLoader ] = useState(true)
  const [ today, setToday ] = useState(new Date().toISOString().split("").slice(0, 10).join("")) 

  useEffect(() => {
    setToday(new Date().toISOString().split("").slice(0, 10).join(""))
    fetch(`http://api.tvmaze.com/schedule/web?date=${today}`)
      .then(res => res.json())
      .then(
        result => {
          setLoader(false)
          setTodaySeries(result.splice(result.length - 6))
        },
        error => {
          setLoader(false)
          setError(error)
        })
    }, [])
    
  if(error){
    return <p className="<AllSection__error">Error: {error.message}</p>
  } else if(loader){
    return <img className="<AllSection__loader" src="../../public/img/Spinner-1s-200px.svg" alt="Loader..."/> 
  } else{
    return(
      todaySeries.map((el) => 
        <SeriesCover
          key={el.id} 
          src={el._embedded.show.image 
            ? el._embedded.show.image.medium 
            : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"} 
          alt={el._embedded.show.name} 
          text={(el._embedded.show.summary === "")
            ? "Not Description" 
            : el._embedded.show.summary.replace(/(<p>|<\/p>)/g, "")}
        />
      )
    )
  }
}

export default AllSeries