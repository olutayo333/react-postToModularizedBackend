import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../assets/logo192.png"


const Login = () => {
  const [message, setmessage] = useState("")
  const[email, setemail]=useState("")
  const[password, setPassword]=useState("")
  const [izloading, setizloading] = useState(false)
  const [loading, setloading] = useState("Loading..........")
  
  let url = "https://node-modularized.onrender.com/user/signin"
 //let url = "http://localhost:7000/user/signin"
  
  let navigate = useNavigate()

  const signin = ()=>{
    setizloading(true)
    
    axios.post (url,{email, password})
    .then((response)=>{
      if(!response.data.status){alert(response.data.message); console.log(response)}
      else{
        localStorage.token = response.data.token
        localStorage.currentemail = email

        let allUsers= [...response.data.result]; console.log(allUsers);
        let index = allUsers.findIndex((u)=> u.email == email); console.log(index);
        localStorage.randomnumber = allUsers[index].randomnumber
       

        // setemail(allUsers[index].email); setfirstname(allUsers[index].firstname); setlastname(allUsers[index].lastname); setpics(allUsers[index].myfile)
        
        localStorage.registrationDate = 
        navigate("/file") }
    })
  }
  
  

    function SizesExample() {
      return (
        <>
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
      </Button>

          <Spinner animation="border" size="lg" variant="primary"  />
          <Spinner animation="border" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" />
        </>
      );
    }

// export default SizesExample;
  return (
    <>
        {
           ! izloading ? 
            <>
              <h1>Login Page</h1>
              <input type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)} />
              <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
              <button className='btn btn-primary' onClick={signin}> Sign In </button>
           </> :
           
          <div className='align-items-center'>
              {/* {SizesExample () } */}
              
              <h1>Login Page</h1>
              <input type="text"  placeholder={email} disabled />
              <input type='password'  placeholder={password} disabled />

              <Button variant="primary" disabled>
                  <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
              </Button>
            
          </div>
          //  <img style={{}} src= {img} alt="" />
          //<img className='w-4' src={require('../asset/Frame 38.png')} alt=''></img>
          
        } 

      
      
    </>
  )
}

export default Login
{/* <h1>{message} </h1>
      <h1> Login Page </h1>
      <input type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)} />
      <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={signin}> Sign In </button>
      :

      <h1>{loading}</h1> */}