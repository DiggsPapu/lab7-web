import React from "react"
import './NavBar.css'
import PropTypes, { string } from 'prop-types'

function NavMenu({ props }) {
  const [title,name1,url1,name2,url2,name3,url3,name4,url4] = [...props]
  return (
    <div className="navigation-menu">
      <ul>
        <h1>{title}</h1>
        <li>
          <a href={url1}>{name1}</a>
        </li>
        <li>
          <a href={url2}>{name2}</a>
        </li>
        <li>
          <a href={url3}>{name3}</a>
        </li>
        <li>
          <a href={url4}>{name4}</a>
        </li>
      </ul>
    </div>
  )
}
// Defining the proptypes
NavMenu.propTypes = {
  props: PropTypes.arrayOf(string).isRequired
}
export default NavMenu