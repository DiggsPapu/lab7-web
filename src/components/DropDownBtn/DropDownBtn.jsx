import React, { useState } from "react"
import './DropDownBtn.css'
import twitter from '../../assets/twitterLogo.svg'
import reddit from '../../assets/redditLogo.png'
import blog from '../../assets/blog.png'
import mail from '../../assets/mail.png'
import megaphone from '../../assets/megaphone.png'
import downArrow from '../../assets/downArrow.png'

function DropDownBtn() {
  const [active, setActive] = useState(false)
  return <div>
    <button title="megaphone" type="button" className="btn-dropdown" onClick={()=>{
    setActive(!active)
  }}>
  <img src={megaphone} alt='logo'/>
  <img src={downArrow} alt='logo' style={{width:'10px', height:'auto',padding:'5px'}}/>
  </button>
  <ul hidden={active}>
  <li hidden={active}><a href="https://twitter.com/"><img src={twitter} alt="twitter logo"/>    Twitter</a></li>
  <li hidden={active}><a href="https://www.reddit.com/"><img src={reddit} alt="reddit logo"/>   Reddit</a></li>
  <li hidden={active}><a href="https://spreadprivacy.com/"><img src={blog} alt="blog logo"/>    Blog</a></li>
  <li hidden={active}><a href="https://duckduckgo.com/newsletter"><img src={mail} alt="newsletter logo"
  />Newsletter</a></li>
  </ul>
  </div>
}
export default DropDownBtn