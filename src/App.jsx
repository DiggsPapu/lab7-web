import React from "react"
import "./App.css"
import DropDownBtn from "./components/DropDownBtn/DropDownBtn"
import Logo from "./components/Logo/Logo"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return <div className="App">
    <Logo/>
    <NavBar/>
    <DropDownBtn/>
  </div>
}
export default App
