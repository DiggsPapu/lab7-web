import React from "react"
import "./App.css"
import DropDownBtn from "./components/DropDownBtn/DropDownBtn"
import Logo from "./components/Logo/Logo"
// import NavBar from "./components/NavBar/NavBar"
import SearchBar from "./components/SearchBar/SearchBar"

function App() {
  return <div className="App">
    <DropDownBtn/>
    <Logo/>
    <SearchBar/>
  </div>
}
export default App
