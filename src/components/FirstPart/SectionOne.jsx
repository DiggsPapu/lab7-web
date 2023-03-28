import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import DuckDuckGoLogo from '../../assets/DuckDuckGo_logo.svg'
// import DisplayInfo from "../DisplayInfo/DisplayInfo"
import './SectionOne.css'
import Card from '../Card/Card'

function SectionOne(){
    return <div>
         <img className="logo" src={DuckDuckGoLogo} alt="Logo"/>
        <SearchBar/>
        <div>
        <h1>Tired of being tracked online? We can help.</h1>
        <p>We dont store your personal info. We dont follow you around with ads.</p>
        <p>We dont track you. Ever.</p>
        <button type="button" >Add DuckDuckGo to Edge</button>
        <p>Trusted by tens of millions worldwide!</p>
        </div>
        <div className="card-section">
        <Card props={["https://duckduckgo.com/assets/add-to-browser/cppm/laptop.svg","Privacy Browser Extension",
"Browse as usual, and we'll take care of the rest. Get bundled private search,", 
"tracker blocking, and site encryption, all in one download, for major browsers."
        ]}/>
        <Card props={["https://duckduckgo.com/assets/home/landing/icons/search.svg","Privacy Search Engine",
        "Search privately with our app or extension, add private web search to your favorite browser,",
        "or search directly at duckduckgo.com."]}/>
        <Card props={["https://duckduckgo.com/assets/add-to-browser/cppm/mobile.svg","Privacy Browser App",
        "Our private browser for mobile comes equipped with our search engine, tracker blocker,",
        " encryption enforcer, and more. Available on iOS & Android."]}/>
        </div>
    </div>
}
export default SectionOne
        // <h1>Tired of being tracked online? We can help.</h1>
        // <p>We dont store your personal info. We dont follow you around with ads.</p>
        // <p>We dont track you. Ever.</p>
        // <div className="card-section">
        // <div className="card">
        // <img src="https://duckduckgo.com/assets/add-to-browser/cppm/laptop.svg" alt="img"/>
        // <h1>Privacy Browse Extension</h1>
        // <p>Browse as usual, and we will take care of the rest.
        //  Get bundled private search, tracker blocking, and site encryption, all in one download, for major browsers.</p>
        // </div>
        // <div>
        // <img src="https://duckduckgo.com/assets/home/landing/icons/search.svg" alt="img"/>
        // <h1>Privacy Search Engine</h1>
        // <p>Search privately with our app or extension, add private web search to your favorite browser, 
        // or search directly at duckduckgo.com.</p>
        // </div>
        // <div>
        // <img src="https://duckduckgo.com/assets/add-to-browser/cppm/mobile.svg" alt="img"/>
        // <h1>Privacy Browser App</h1>
        // <p>Our private browser for mobile comes equipped with our search engine, tracker blocker, 
        // encryption enforcer, and more. Available on iOS & Android.</p>
        // </div>
        // </div>