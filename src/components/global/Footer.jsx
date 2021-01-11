/** Main Imports */
import React from "react"
import { Link } from "react-router-dom"
/** Style Imports */
import "../../public/css/global_styles/Footer.css"

/** Component that represents the Footer zone at the below part of the Website */
function Footer() {
  return(
    <footer className="Footer">
      <h3 className="Footer__title"><i>ABOUT THIS WEBSITE</i></h3>
      <div className="Footer__info">
        <p className="Footer__text" >Website Author: Gregory Vicent.</p>
        <p className="Footer__text">GitHub repository: <a className="Footer__linkGitHub" target="_blank" href="https://github.com/Gregory142000/Good-Series/issues">Here</a></p>
        <p className="Footer__text">Date: January, 2021</p>
        <p className="Footer__text">API REST: <b>"TVmaze API"</b></p>
      </div>
      <div className="Footer__socialMedia">
        <h4 className="Footer__infoAuthor">More about author</h4>
        <a href="#" ><i className="fab fa-facebook Footer__link Footer__link--hover"></i></a>
        <a href="#" ><i className="fab fa-twitter-square Footer__link Footer__link--hover"></i></a>
        <a href="#" ><i className="fab fa-linkedin Footer__link Footer__link--hover"></i></a>
        <p className="Footer__text">My Briefcase: <a href="https://gregory142000.github.io/gregory-vicent/index.html">Here</a></p>
      </div>
    </footer>
  )
}

export default Footer 