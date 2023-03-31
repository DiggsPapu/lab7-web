import React from "react"
import "./CardSection.css"
import Card from "./Card/Card"

function CardSection() {
  return <div className="wrapper">
      <h1>Privacy Protection For Any Device</h1>
      <div className="card-section">
        <Card
          props={[
            "https://duckduckgo.com/assets/add-to-browser/cppm/laptop.svg",
            "Privacy Browser Extension",
            "Browse as usual, and we'll take care of the rest. Get bundled private search,",
            "tracker blocking, and site encryption, all in one download, for major browsers.",
          ]}
        />
        <Card
          props={[
            "https://duckduckgo.com/assets/home/landing/icons/search.svg",
            "Privacy Search Engine",
            "Search privately with our app or extension, add private web search to your favorite browser,",
            "or search directly at duckduckgo.com.",
          ]}
        />
        <Card
          props={[
            "https://duckduckgo.com/assets/add-to-browser/cppm/mobile.svg",
            "Privacy Browser App",
            "Our private browser for mobile comes equipped with our search engine, tracker blocker,",
            " encryption enforcer, and more. Available on iOS & Android.",
          ]}
        />
      </div>
    </div>
}
export default CardSection
