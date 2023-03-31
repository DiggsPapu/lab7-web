import React from "react"
import "./EdgeButton.css"
import PropTypes from "prop-types"

function EdgeButton({color}){
    return <button style={{backgroundColor:color}}
    type="button"
  >
    Add DuckDuckGo to Edge
  </button>
}
EdgeButton.propTypes = {
  color: PropTypes.string.isRequired,
}
export default EdgeButton