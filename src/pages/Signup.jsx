import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    let navigate = useNavigate();
    
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [responsemessage, setresponsemessage] = useState("")
    const [status, setstatus] = useState()
    let url = "https://node-modularized.onrender.com/user/register"
    //let url = "http://localhost:7000/user/register"
    
    const registerUser=()=>{
        axios.post(url, {firstname:name, lastname, email, password})
        .then((response)=>{
          console.log(response)
          
          if (response.data.status)
          {alert("HURRAY SignUp Successful"); setresponsemessage("SigUp Successful"); setstatus(response.data.status); navigate("/signin");}
          
          else if (!response.data.status) {alert(response.data.message); setresponsemessage("SigUp Failed" + "/n" + response.data.message); setstatus(response.data.status); setresponsemessage(response.data.message); console.log(response.data.message); }
        })

    }
  return (
    <>
        <div> {responsemessage} </div>
        {
          status? <div className='alert alert-success'> </div> : <div className='alert alert-success'> </div> 
        }<form className='form form-control'>
        <input  type='text' placeholder='firstname' onChange={(e)=>setname(e.target.value)} />
        <input type='text' placeholder='lastname' onChange={(e)=>setlastname(e.target.value)} />
        <input type='email' placeholder='email' onChange={(e)=>setemail(e.target.value)} />
        <input type='password' placeholder='password' onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={registerUser}> Register </button>
        </form>
    </>
  )
}

export default Signup
