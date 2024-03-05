import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  let url = "https://node-modularized.onrender.com/user/dashboard"
  let token = localStorage.token
  let navigate = useNavigate()
 
  useEffect(()=>{
    axios.get(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then((response)=>{
        if(!response.data.status){
          navigate("/signin")
        }
      })
  }, [])

  const signOut = ()=>{
    localStorage.token="";
    navigate('/signin')
  }

  return (
    <div>
      <h1> WELCOME TO DASHBOARD</h1>
      <button onClick={signOut}>sign out</button>
    </div>
  )
}

export default Dashboard
