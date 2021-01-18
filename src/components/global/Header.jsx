/** Main imports */
import React, { useState } from "react"
import { Link } from "react-router-dom"
/** Style imports*/
import "../../public/css/global_styles/Header.css"

/** Component that represent to Header and contain the search bar*/
function Header() {
  function goSearch(e) {
    e.preventDefault()
    let href = document.getElementById("search").value
    window.location.href = `/#/search/${href}`
  }

  return(
    <header className="Header">
      <h1 className="Header__title">
        <Link className="Header__link" to="/">GOOD SERIES</Link>
      </h1>
      <form action="" className="Header__form">
        <input id="search" type="search" className="Header__search" placeholder="What do you want to see?" />
        <button className="Header__button" onClick={goSearch}><i className="fas fa-search"></i></button>
      </form>
    </header>
  )
}

export default Header