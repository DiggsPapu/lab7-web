import React, {useState} from "react"
import Question from "./Question/Question"
import './QuestionSection.module.css'

function QuestionSection(){
    const items = [["How do DuckDuckGo search results compare to Google's?",
    "DuckDuckGo search gives you truly private search results without tradeoffs in result quality. We have ",
    "everything you've come to expect in an online search experience, and a few bonus features that make ",
    "searching the Internet not only private, but also a bit more fun! And, on top of that, because there is no ",
    "search history on DuckDuckGo, you escape the filter bubble of manipulated results. Learn more."],
    ["How do DuckDuckGo search results compare to Google's?",
    "DuckDuckGo search gives you truly private search results without tradeoffs in result quality. We have ",
    "everything you've come to expect in an online search experience, and a few bonus features that make ",
    "searching the Internet not only private, but also a bit more fun! And, on top of that, because there is no ",
    "search history on DuckDuckGo, you escape the filter bubble of manipulated results. Learn more."],
    ["How do DuckDuckGo search results compare to Google's?",
    "DuckDuckGo search gives you truly private search results without tradeoffs in result quality. We have ",
    "everything you've come to expect in an online search experience, and a few bonus features that make ",
    "searching the Internet not only private, but also a bit more fun! And, on top of that, because there is no ",
    "search history on DuckDuckGo, you escape the filter bubble of manipulated results. Learn more."]]
  const [visibleItems, setVisibleItems] = useState([])
  const [finishedItems, setFinishedItems] = useState([])
  
    return <div>
    <h1>Frequently Asked Questions</h1>
        <ul className="list-questionexpandable">
        {items.map((item, index) =>(
            <Question key={index} props = {item} visible/>
        ) )}
    </ul>
    </div>
}
export default QuestionSection