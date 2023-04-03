import React from "react"
import "./NavMenu.module.scss"
import PropTypes, { string } from "prop-types"

function NavMenu({ props }) {
  const [title, name1, url1, name2, url2, name3, url3, name4, url4] = [
    ...props,
  ]
  return (
    <div className="navigation-menu" style={{
  height: "auto",
  width: "100%",
  marginLeft: "0%",
  display: "flex",
  flexDirection: "column",
    }}>
      <ul>
        <h1 style={{fontSize:"70%",textAlign:"left", paddingTop:"10%",
        color:"white"}}>{title}</h1>
        <span className="navlist">
          <a href={url1}>{name1}</a>
        </span>
        <span className="navlist">
          <a href={url2}>{name2}</a>
        </span>
        <span className="navlist">
          <a href={url3}>{name3}</a>
        </span>
        <span className="navlist">
          <a href={url4}>{name4}</a>
        </span>
      </ul>
    </div>
  )
}
// Defining the proptypes
NavMenu.propTypes = {
  props: PropTypes.arrayOf(string).isRequired,
}
export default NavMenu
