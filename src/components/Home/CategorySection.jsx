/** Main Import */
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
/** My components import */
import SeriesCover from "./SeriesCover"
/** Styles Imports */
import "../../public/css/HomeStyles/CategorySection.css"
/** Logic and state of CategorySection */
function CategorySection(props) {
  const [ loader, setLoader ] = useState(true)
  const [ error, setError ] = useState(null)
  const [ series, setSeries ] = useState([])

  let count = 0,
    newArray = []

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(res => {
        res.forEach((el) => {
          el.genres.forEach((elem) => {
            if(elem === props.tema && count < 2){
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
    return (<p>Error: {error.message}</p>)
  } else if(loader){
    return (<img src="../../public/img/Spinner-1s-200px.svg" alt="Loader..." />)
  } else{
    return(
      <div className="CategorySection">
        <h2 className={"CategorySection__title " + props.title}>{props.tema.toUpperCase()}</h2>
        <div className="CategorySection__content">
          <div className={"CategorySection__seriesBox " + props.seriesBox} >
            { series.map(el => <SeriesCover src={el.image.medium} alt={el.name} title={el.name} key={el.id}/>) }
          </div>
          <Link className={"CategorySection__link " + props.link} to="#">
            <div className="CategorySection__circle">{props.arrow}</div>
          </Link>
        </div>
      </div>
    )
  }
}

export default CategorySection