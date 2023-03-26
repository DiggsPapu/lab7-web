import React from "react"
import megaphone from '../../assets/megaphone.png'
import './DropDownBtn.css'

function DropDownBtn() {

  return <div>
    <btn>
      <figure>
        <img className="logo" src={megaphone} alt="Speaker"/>
      </figure>
    </btn>
  </div>
}
export default DropDownBtn