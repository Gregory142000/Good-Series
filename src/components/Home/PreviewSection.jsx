/** Main Import */
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
/** Styles Import */
import "../../public/css/HomeStyles/AllSection.css"
import "../../public/css/HomeStyles/PreviewSection.css"
/** Fetch Logic and show Preview section */
function PreviewSection() {
  const [ loader, setLoader ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ series, setSeries ] = useState({});
  const [ seriesImage, setSeriesImage ] = useState("");
  const [ seriesText, setSeriesText ] = useState("");

  useEffect(() => {
    let random = Math.floor((Math.random() * (100 - 0 + 1)) + 1)
    fetch(`http://api.tvmaze.com/shows/${random}`)
    .then((res) => res.json())
    .then(
      (res) => {
        setSeries(res)
        setSeriesImage(
          res.image
            ? res.image.medium
            : null
          )
        setSeriesText(
          res.summary
            ? res.summary
            : null
          )
        setLoader(false)
      },
      (err) => {
        setLoader(false)
        setError(err)
      }
    )
  }, [])

  if(error){
    return <p className="AllSection__error">Error: {error.message}</p>
  } else if(loader){
    return <img className="AllSection__loader" src="../../public/img/Spinner-1s-200px.svg" alt="Loader..."/>
  }else{
    return(
      <>
        <Link className="PreviewSection__link" to="#">
          <img 
            className="PreviewSection__image" 
            src={
              seriesImage
                ? seriesImage
                : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
            } 
            alt={
              series.name
                ? series.name
                : "Not Description"
              } 
          />
        </Link>      
        <div className="PreviewSection">
          <h3 className="PreviewSection__title">{series.name.toUpperCase()}</h3>
          <p className="PreviewSection__text">{seriesText.replace(/(\<.\>|\<\/.\>)/g, "")}</p>
        </div>
      </>
    )
  }
}

export default PreviewSection