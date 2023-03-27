import React from "react"
import './NavBar.css'

function NavBar() {
  // const [active, setActive] = useState(false)
  
  return <>
    <div className="header_in">
     <button type="button" className="toggle" >
       <span/>
      </button>
  </div>
  <div className="sidebar" id='sidebar'>
  <ul>
    <li>l1</li>
     <li>l2</li>
      <li>l3</li>
  </ul>
</div>
  </>
}
export default NavBar
