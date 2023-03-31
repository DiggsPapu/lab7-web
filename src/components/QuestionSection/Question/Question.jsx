import React, { useState } from "react"
import PropTypes, { string } from "prop-types"
import styles from './Question.module.scss'

function Question ({props}) {
    const [title,...sentence] = [...props]
    const [visible, setVisible] = useState(false)
    return <li className={styles.li}>
    <button className={styles.collapsible} type="button" 
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