import React, { useState } from "react"
import './DropDownBtn.css'
import twitter from '../../assets/twitterLogo.svg'
import reddit from '../../assets/redditLogo.png'
import blog from '../../assets/blog.png'
import megaphone from '../../assets/megaphone.png'
import mail from '../../assets/mail.png'

function DropDownBtn() {
  const [active, setActive] = useState(false)
  return <div>
    <button title="megaphone" type="button" className="btn-dropdown" onClick={()=>{
    setActive(!active)
  }}>
  <img src={megaphone} alt="button logo"/>
  <i className="fa fa-caret-down"/>
  </button>
  {
    active?
    <div>
    <ul>
    <li><a href="https://twitter.com/"><img src={twitter} alt="twitter logo"/>    Twitter</a></li>
    <li><a href="https://www.reddit.com/"><img src={reddit} alt="reddit logo"/>   Reddit</a></li>
    <li><a href="https://spreadprivacy.com/"><img src={blog} alt="blog logo"/>    Blog</a></li>
    <li><a href="https://duckduckgo.com/newsletter"><img src={mail} alt="newsletter logo"/>    Newsletter</a></li>
    </ul>
    </div>
  :
  <div/>
  }
  </div>
}
export default DropDownBtn