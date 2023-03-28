import React, { useState } from "react"
import DropDownBtn from "../DropDownBtn/DropDownBtn"
import SideBar from "./SideBar"
import "./SideBar.css"

export default function Bar() {
  const [sidebarOpen, setSideBarOpen] = useState(false)
  return (
    <>
      <header>
      <div>
      <DropDownBtn/>
      <button type="button" onClick={()=>{
        setSideBarOpen(!sidebarOpen)
      }}>
        <i className="fa fa-bars"/>
      </button>
      </div>
    </header>
      <SideBar active={sidebarOpen}/>  
      {
        sidebarOpen?
        <button className="float" type="button" onClick={()=>{
        setSideBarOpen(!sidebarOpen)
      }}>X</button>
      :
      <div/>
      }    
    </>
  )
}
