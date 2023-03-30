import React from "react"
import Question from "./Question/Question"
import './QuestionSection.module.css'

function QuestionSection(){
    const items = [["How does DuckDuckGo make money?",
    "We make our money from private ads on our search engine. On other search engines, ads are based on profiles ",
    "compiled about you using your personal information like search, browsing, and purchase history. Since we don't",
    " collect that information, search ads on DuckDuckGo are based on the search results page you are viewing, not on",
    " you as a person. For example, if you search for cars, we'll show you ads about cars. Learn more."],
    ["What does Google know about me?",
    "Not only does Google keep your search history forever by default, their trackers have been found on 75% of the",
    " top million websites, which means they are tracking most everywhere you go on the Internet (unless you stop them",
    " with DuckDuckGo!). And that's just the tip of the iceberg."],
    ["Why use DuckDuckGo instead of Google?",
    "Ever notice ads constantly following you around? That's in part because Google tracks your searches and hides ",
    "trackers on millions of websites. By contrast, our private search engine doesn't track your searches and our ",
    "DuckDuckGo browser extension and mobile app block Googles (and many other companies) trackers across the Internet",
    " helping to keep your browsing history more private, as it should be. And that's just the beginning — by using ",
    "DuckDuckGo you also escape the manipulation of the filter bubble and can use the Internet faster (after all that",
    " tracking code is disabled). Learn more."],
    ["How do DuckDuckGo search results compare to Google's?",
    "DuckDuckGo search gives you truly private search results without tradeoffs in result quality. We have ",
    "everything you've come to expect in an online search experience, and a few bonus features that make ",
    "searching the Internet not only private, but also a bit more fun! And, on top of that, because there is no ",
    "search history on DuckDuckGo, you escape the filter bubble of manipulated results. Learn more."],
    ["Is DuckDuckGo an “unfiltered” search engine?",
    "Unlike some other search engines, we don't alter search results based on someone's previous search history.",
    " In fact, since we don't track our users we don't have access to search histories at all! Those other search eng",
    "ines show you results based on a data profile about you and your online activity (including your search history),",
    " and so can be slanted towards what they think you will click on the most based on this profiling. This effect is",
    " commonly known as the search filter bubble, but using DuckDuckGo can help you escape it.\nThis does not mean our",
    " search results are generally “unfiltered” because, for every search you make online, a search engine's job is to",
    " filter millions of possible results down to a ranked order of just a handful. In other words, a search engine ha",
    "s to use algorithms programmed by people to determine what shows up first in the list of results, what shows up s",
    "econd, and so on. Otherwise, for every search you'd just get a completely random set of results, which of course ",
    "wouldn't be very useful."],
    ["Is DuckDuckGo owned by Google?",
    "No, we are not and have never been owned by Google. We have been an independent company since our founding in 200",
    "8 and, unlike some other search engines, we don't rely on Google's results for any of our search results. You may",
    " notice that we offer a Google Chrome extension and a Google Android app, but these are also not in partnership w",
    "ith Google and actually aim to protect you from Google's online trackers."]
]
    return <div style={{
        width:"60%", marginLeft:"300px"
    }}>
    <h1>Frequently Asked Questions</h1>
        <ul className="list-questionexpandable">
        {items.map((item) =>(
            <Question props = {item}/>
        ) )}
    </ul>
    </div>
}
export default QuestionSection