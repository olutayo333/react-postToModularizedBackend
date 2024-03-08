import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Dashboard = ({imgURL}) => {
  //let url = "https://node-modularized.onrender.com/user/dashboard"
   let url= "http://localhost:7000/user/dashboard"
   let url_upload = "http://localhost:7000/user/upload"
   let url_uploadFile= "http://localhost:8000/user/upload"
   
   const [myfile, setmyfile] = useState("")
   const [imgurl, setimgurl] = useState("")
   const [email, setemail] = useState("")
   const [firstname, setfirstname] = useState("Olutayo")
   const [lastname, setlastname] = useState("")
   const[pics,setpics] = useState("")
  const [users, setusers] = useState([])
  let token = localStorage.token
  const currentemail = localStorage.currentemail; let randomnumber = localStorage.randomnumber 
  
  let navigate = useNavigate()

  
  useEffect(()=>{
    axios.get(url, {
      headers: { "Authorization": `Bearer ${token}`,  "Content-Type": "application/json", "Accept": "application/json" }
    })
      .then((response)=>{
        //console.log(response);
        if(!response.data.status){ navigate("/signin") }
        else if(response.data.status)
        { //setusers([...response.data.message]) ; 
          console.log(response);
          let allUsers= [...response.data.message]; // console.log(allUsers);

          let index = allUsers.findIndex((u)=> u.randomnumber == randomnumber ); console.log(index);
          setemail(allUsers[index].email); setfirstname(allUsers[index].firstname); setlastname(allUsers[index].lastname); setpics(allUsers[index].myfile)
          
       // console.log(firstname); console.log(lastname); console.log(email); console.log( pics);
          }
      })
  }, [])


  const signOut = ()=>{
    localStorage.token="";
    localStorage.removeItem('currentemail'); localStorage.removeItem('randomnumber'); 
    navigate('/signin')
  }

  //CONVERTING IMAGE TO BASE 64 STRING
  const setmyupload =(e)=>{
    console.log(e.target.files)
    let myImage = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(myImage)
    reader.onload = ()=>{ setmyfile(reader.result); console.log(reader.result)}
    }

  const upload = ()=>{
    axios.post(url_upload, {myfile})
    .then((response)=>{
      if(response.data.status)
      { setimgurl(response.data.result.secure_url); console.log(imgurl); uploadFIle(); }
      else{console.log("fetch url failed")}

    }) }

  const uploadFIle = ()=>{
    axios.post(url_uploadFile, {myfile:imgurl, email})
    .then((response)=>{
      if (response){alert("upload successful")}
      else{alert("upload failed")}
    })
  }

  return (
    <div>
      <img src={imgURL} alt="" />
      <h1> WELCOME {firstname} {lastname} <p>{email}</p> </h1>
      
      <input type="file" onChange={(e)=>setmyupload(e)} />
      {/* <input type="file" onChange={(e)=>changeFile(e)} />
        */}
      <button onClick={upload}> Upload </button>
      <button onClick={signOut}>sign out</button>
    </div>
  )
}

export default Dashboard
