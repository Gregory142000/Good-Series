/** Main imports */
import React from "react"
import { Link } from "react-router-dom"
/** Style imports*/
import "../../public/css/global_styles/Header.css"

/** Component that represent to Header and contain the search bar*/
function Header() {
  return(
    <header className="Header">
      <h1 className="Header__title">
        <Link className="Header__link" to="/">GOOD SERIES</Link>
      </h1>
      <form action="" className="Header__form">
        <input type="search" className="Header__search" placeholder="What do you want to see?" />
        <button className="Header__button"><i className="fas fa-search"></i></button>
      </form>
    </header>
  )
}

export default Header