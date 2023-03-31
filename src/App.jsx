import React from "react"
import "./App.css"
import SectionOne from "./components/FirstPart/SectionOne"
import CardSection from "./components/CardSection/CardSection"
import QuestionSection from "./components/QuestionSection/QuestionSection"
import Bar from "./components/Bar/Bar"
import ImageSection from "./components/ImageSection/ImageSection"

function App() {
  return (
    <div className="App">
      <Bar />
      <SectionOne />
      <CardSection />
      <ImageSection/>
      <QuestionSection/>
    </div>
  )
}
export default App
