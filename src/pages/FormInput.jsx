import React from 'react'
import { useState } from 'react'

const FormInput = () => {
  const [firstname, setfirstname] = useState("");
  const[email, setemail] = useState("");
  const[allUser, setallUser] = useState ([]);
  
  const signUp = ()=>{
    let newUser={firstname, email}
    setallUser([...allUser, newUser])
    
    console.log(allUser)
    
  }
    return (
    <div>

        <input type='text' placeholder=' name' onChange={(e)=>setfirstname(e.target.value)} /> 
        <input type='text' placeholder='email' onChange={(e)=>setemail(e.target.value)} /> 
        <button onClick={signUp}> Sig nUp </button> 
    </div>
  )
}

export default FormInput
