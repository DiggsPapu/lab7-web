import React from "react"
import './Question.css'
import PropTypes, { string } from "prop-types"

function Question({props},{visible}) {
    const [title, ...sentence] = [...props]
    return <li>
        <button type="button" className="collapsible">
        <h1>{title}</h1>
        </button>
        <div className="content">
    {
        visible?
        <p>{sentence.join()}</p>
        :
        <div/>
    }
    </div>  
    </li>
}
Question.propTypes = {
    props: PropTypes.arrayOf(string).isRequired,
    visible:PropTypes.bool.isRequired
  }
export default Question