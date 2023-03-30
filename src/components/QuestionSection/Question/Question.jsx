import React, { useState } from "react"
import './Question.css'
import PropTypes, { string } from "prop-types"

function Question ({props}) {
    const [title,...sentence] = [...props]
    const [visible, setVisible] = useState(false)
    return <li>
    <button className="collapsible" type="button" 
    onClick={()=> setVisible(!visible)}>
        <h1>{title}</h1>
    </button>
        {
            visible?
            <p>{sentence.join()}</p>
            :
            <div/>
        }
    </li>
}
Question.propTypes = {
    props: PropTypes.arrayOf(string).isRequired
  }
export default Question