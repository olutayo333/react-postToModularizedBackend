import { useState, useEffect } from 'react'
import React from 'react'
import ChangeBG from './pages/ChangeBG'
import FormInput from './pages/FormInput'
import ClassBased from './components/ClassBased'
import Signup from './pages/Signup'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DisplayUser from './pages/DisplayUser'
import FoodList from './pages/FoodList'
import GetMyApi from './pages/GetMyApi'
import Fileurl from './pages/Fileurl'
import axios from 'axios'

const App = () => {
  // let token="12345"
  let token = localStorage.token;

    // let getimgurl = "https://node-fileupload.onrender.com/user/imgurl"
    // //let getimgurl = "http://localhost:8000/user/imgurl"
    // const[imgURL, setimgURL] = useState("")
    // const email = localStorage.currentemail; let randomnumber = localStorage.randomnumber

    // useEffect(()=>{
    //   axios.get(getimgurl, {
    //     headers: { "Authorization": `Bearer ${token}`,  "Content-Type": "application/json", "Accept": "application/json" }
    //   })
    //     .then((response)=>{
    //       console.log(response);
    //       if(!response.data.status){ console.log("can't load image") }
    //       else if(response.data.status)
    //       { 
    //         console.log(response);
    //         let allImgURL= [...response.data.result];  console.log(allImgURL);
              
    //         let details = allImgURL.filter(u=>(u.email===email )) //filter returns the whole array 
    //         setimgURL(details[0].myfile);
    //         console.log(imgURL);        
    //         }
    //     })
    // }, [])


  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Signup/>}> </Route>
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/signin' element={<Login/>}/> 
        {/* <Route path='/dashboard' element={token? <Dashboard/>: <Navigate to="/signin" />}/>  */}
        <Route path='/dashboard' element={ <Dashboard/>}/> 
        <Route path='/form' element={<FormInput/>}/>
        <Route path='/changebg' element={<ChangeBG/>}/>
        {/* <Route path='/display' element={<DisplayUser imgURL = {imgURL} /> }/> */}
        <Route path='/display' element={<DisplayUser /> }/>
        {/* //element={ <Chat socket = {socket}/> */}
        <Route path='/foodlist' element={<FoodList/>}/>
        <Route path='/myapi' element={<GetMyApi/>}/>
        <Route path='/file' element={<Fileurl/>}/> 
        <Route path="/*" element={<Signup/>}  />
      </Routes>
    </div>
  )
}

export default App
