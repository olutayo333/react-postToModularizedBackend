import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
// import {cloudinary} from 'cloudinary';

const Signup = () => {
    let navigate = useNavigate();
    
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [responsemessage, setresponsemessage] = useState("")
    const [status, setstatus] = useState()
    const [myfile, setmyfile]=useState("")
   // let url = "https://node-modularized.onrender.com/user/register"
    let url = "http://localhost:7000/user/register"
    
    const registerUser=()=>{
      console.log(myfile);
      const randomnumber = Math.floor((Math.random()*10000000000)*10000000000)

        axios.post(url, {firstname:name, lastname, email, password, myfile, randomnumber})
        .then((response)=>{
          console.log(response)
          
          if (response.data.status)
          {alert("HURRAY SignUp Successful"); navigate("/signin"); console.log(response.data.message); setresponsemessage("SigUp Successful"); setstatus(true); }
          else{alert("Signup failed")}
          // else if (!response.data.status) {alert(response.data.message); setresponsemessage("SigUp Failed" + "/n" + response.data.message); setstatus(false); setresponsemessage(response.data.message); console.log(response.data.message); }
        })
    }
      //CONVERTING IMAGE TO BASE 64 STRING
      const changeFile = (e)=>{
      console.log(e.target.files)
      let myImage = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(myImage)
      reader.onload = ()=>{ setmyfile(reader.result); console.log(reader.result)}
  }

    // let cloud = (e)=>{
    //   //let myfile = req.body.myfile
    //   let myImage = e.target.files[0]
    //   cloudinary.v2.uploader.upload(myImage, (err, result)=>{
    //   if (err){console.log("failed");}
    //   else{console.log(result.secure_url);}
    //   });
    // }
    

  return (
    <>
        <div> {responsemessage} </div>
        {/* {
          status? <div className='alert alert-success'> </div> : <div className='alert alert-danger'> </div> 
        } */}
        <div> <h1 className='animate__animated animate__flip animate__delay-3s animate__repeat-2	infinite animate__slow-3s text-center'> Registration Form </h1> </div> <hr/>
        <form className='container-fluid' >
        <input className='animate__animated animate__bounce form form-control' type='text' placeholder='firstname' onChange={(e)=>setname(e.target.value)} /> <br />
        <input className='form form-control' type='text' placeholder='lastname' onChange={(e)=>setlastname(e.target.value)} /> <br />
        <input className='form form-control' type='email' placeholder='email' onChange={(e)=>setemail(e.target.value)} />  <br />
        <input className='form form-control' type='password' placeholder='password' onChange={(e)=>setpassword(e.target.value)} /> <br />
        <input className='animate__animated animate__pulse animate__infinite infinite form form-control'  type="file" onChange={(e)=>changeFile(e)} /> <hr />
        {/* <input type="file" onChange={(e)=>setmyfile(e.target.files)} /> */}
        <button className='animate__animated animate__pulse animate__infinite infinite btn btn-secondary w-100' onClick={registerUser}> Register </button>
        </form>
        <h5 className='mx-5 my-3'> Already signed up? <Link to ="/signin"> Login </Link> </h5>
    </>
  )
}

export default Signup
