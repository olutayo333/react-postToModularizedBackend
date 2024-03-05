import React, { useState } from 'react'
import img1 from "../assets/download (1).jpeg"
import img2 from "../assets/download (2).jpeg"
import img3 from "../assets/download (4).jpeg"


const ChangeBG = () => {
    let img1a = img2
    
    const [ bg, setbg] = useState(true)

    const userPlays = () =>{ setbg(false)}
 
    const buttonChange = () => { setbg(false)}

    return (
   
    <div style={{backgroundImage:`url(${img1a})`, backgroundRepeat:"no-repeat", height:"50vh" }}>
        <button onClick={buttonChange}> Change Background </button>
    </div> 
  )
}

export default ChangeBG
