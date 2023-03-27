import React from "react"
import './NavBar.css'
import NavMenu from "./NavMenu"

function NavBar() {
  const val = [1,2,3,4,5,6,7]
  return (
    <nav className="navigation">
      <button className="hamburger" type="button">
        <i className="fa-solid fa-bars" />
      </button>
      <NavMenu 
      props={["DUCKDUCKGO SEARCH","Private Search","https://duckduckgo.com/","Themes",
      "https://duckduckgo.com/settings#theme","All Settings","https://duckduckgo.com/settings",
      "!Bang Search Shortcuts","https://duckduckgo.com/bangs"]}
      />
    </nav>
  )
}
export default NavBar
