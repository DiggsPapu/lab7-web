import React from "react"
import SearchBar from "./SearchBar/SearchBar"
import EdgeButton from "./EdgeButton/EdgeButton"
import DuckDuckGoLogo from "../../assets/DuckDuckGo_logo.svg"
import "./SectionOne.css"

function SectionOne() {
  return (
    <div>
      <img className="logo" src={DuckDuckGoLogo} alt="Logo" />
      <SearchBar />
      <div>
        <h1>Tired of being tracked online? We can help.</h1>
        <p style={{ margin: "0" }}>
          We dont store your personal info. We dont follow you around with ads.
        </p>
        <p style={{ margin: "0", marginBottom: "25px" }}>
          We dont track you. Ever.
        </p>
        <EdgeButton/>
        <p style={{ fontSize: "10px", margin: "0", marginTop: "10px" }}>
          Trusted by tens of millions worldwide!
        </p>
      </div>
    </div>
  )
}
export default SectionOne
