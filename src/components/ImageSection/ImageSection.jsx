import React from "react"
import EdgeButton from "../FirstPart/EdgeButton/EdgeButton"
import Lab from '../../assets/lab.svg'

function ImageSection(){
    return <div className="image-section" 
    style={{backgroundColor:"#e27253", maxHeight:"auto",display:'flex',flexDirection:'column'}}>
    <h1 style={{
        marginTop:"10%"
    }}
    >We dont store your<br/>personal information. Ever.</h1>
    <p>Our privacy policy is simple: we dont collect <br/>or share any of your personal information.</p>
    <div style={{
        marginTop:"2%",
        width:"20%",
        marginLeft:"40%"
    }}>
    <EdgeButton color="#894431"/>
    </div>
    <img src={Lab} alt="Lab" className="image-lab" style={{marginTop:"10%"}}/>
    </div>
}
export default ImageSection