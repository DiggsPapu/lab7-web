import React from "react"
import "./App.css"
import Logo from "./components/Logo/Logo"
import SearchBar from "./components/SearchBar/SearchBar"
import Bar from "./components/SideBar/Bar"


function App() {
  
  return <div className="App">
  <Bar/>
  <Logo/>
  <SearchBar/>
  </div>
}
export default App
