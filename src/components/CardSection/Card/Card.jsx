import React from "react"
import PropTypes, { string } from "prop-types"
import "./Card.css"

function Card({ props }) {
  const [url, title, text1, text2] = [...props]
  return (
    <div className="card" style={{color:"white"}}>
      <img src={url} alt="img" style={{
  width: "auto",
  height: "auto"}}/>
      <h1 style={{color:"white"}}>{title}</h1>
      {text1}
      {text2}
    </div>
  )
}
Card.propTypes = {
  props: PropTypes.arrayOf(string).isRequired,
}
export default Card
