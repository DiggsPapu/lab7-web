import React from "react"
import Question from "./Question/Question"
import './QuestionSection.module.css'

function QuestionSection(){
    
    return <ul className="list-questionexpandable">
        <Question props={["How do DuckDuckGo search results compare to Google's?",
"DuckDuckGo search gives you truly private search results without tradeoffs in result quality. We have ",
"everything you've come to expect in an online search experience, and a few bonus features that make ",
"searching the Internet not only private, but also a bit more fun! And, on top of that, because there is no ",
"search history on DuckDuckGo, you escape the filter bubble of manipulated results. Learn more."]}/>
    </ul>
}
export default QuestionSection