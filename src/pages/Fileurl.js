import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dashboard from './Dashboard'

const Fileurl = () => {
    let getimgurl = "https://node-fileupload.onrender.com/user/imgurl"
    //let getimgurl = "http://localhost:8000/user/imgurl"
    const[imgURL, setimgURL] = useState("")
    const email = localStorage.currentemail; let randomnumber = localStorage.randomnumber
    let token = localStorage.token

    // const machines=[
    //     {
    //         id: 1,
    //         img: img1,
    //         text:"CPAP Machines",
    //     },]

    // GETTING THE IMG URL
  useEffect(()=>{
    axios.get(getimgurl, {
      headers: { "Authorization": `Bearer ${token}`,  "Content-Type": "application/json", "Accept": "application/json" }
    })
      .then((response)=>{
        console.log(response);
        if(!response.data.status){ console.log("can't load image") }
        else if(response.data.status)
        { 
          console.log(response);
          let allImgURL= [...response.data.result];  console.log(allImgURL);
            
          let details = allImgURL.filter(u=>(u.email===email )) //filter returns the whole array 
          setimgURL(details[0].myfile);
          console.log(imgURL);

         // let imgindex = allImgURL.findIndex((u)=> u.email == email); console.log(imgindex);
        //setimgURL(allImgURL[imgindex].myfile); console.log(imgURL) 
       
          }
      })
  }, [])

 
    return (
    <div>
        {/* {imgURL} */}
        <img width={"25%"} src={imgURL} alt="" />

        <Dashboard imgLink={imgURL}/>
    </div>
  )
}

export default Fileurl
