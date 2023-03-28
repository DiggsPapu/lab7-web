import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import DuckDuckGoLogo from '../../assets/DuckDuckGo_logo.svg'

function SectionOne(){
    return <div>
         <img src={DuckDuckGoLogo} alt="Logo"
            style={{
                width:"400px",height:"auto", marginLeft:"100px"
            }}
         />
        <SearchBar/>
    </div>
}
export default SectionOne