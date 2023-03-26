import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// This line is shows the warning of a length bigger than 120 char, so it will get this as a mistake and a warning when applying yarn lint.