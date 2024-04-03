import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const DisplayUser = () => {
  // let url = "https://node-modularized.onrender.com/user/display"
  // let url2 = "https://node-modularized.onrender.com/user/delete"
  // let editurl = "https://node-modularized.onrender.com/user/edit"
 
  let url = "http://localhost:7000/user/display"
  let url2 = "http://localhost:7000/user/delete"
  let editurl= "http://localhost:7000/user/edit"

  let token = localStorage.token
  let navigate = useNavigate()

  const [message, setmessage] = useState([]);
  //const message2 = [{firstname:"oluayo", lastname: "stephen"}, {firstname:"stephen", lastname:"clement"}]
  const [newemail, setnewemail]=useState("")
  const [firstname, setfirstname]=useState("")
  const [lastname, setlastname]=useState("")
  const [password, setpassword]=useState("")
  const[ email, setemail ] = useState ("")
  
    const deleteUser = ()=>{
    axios.post (url2,{ email })
    .then((response)=>{
       if(response.data.status){alert("Deleted succ");console.log("Deleted Successfully" + response.data.message)}
       else{console.log("couldnt deleted "); alert("couldnt delete")}
     })}

    const editUser = ()=>{
      axios.post (editurl,{ email, newemail, firstname, lastname, password,  })
      .then((response)=>{
         if(response.data.status){alert("Edited succ");console.log("Edited Successfully" + response.data.message)}
         else{console.log("couldnt edit "); alert("couldnt edit")}
       })}

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
        else if(response.data.status)
        { setmessage([...response.data.message]) ;
            //console.log(message);
         }

      })
  })

  // useEffect(()=>{
  //   axios.get(url, {
  //     headers: {
  //       "Authorization": `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     }
  //   })
  //     .then((response)=>{
  //       if(!response.data.status){
  //         navigate("/signin")
  //       }
  //     })
  // }, [])

  return (
    <>
        <div className='align-center'>
        <h1>All Users</h1>
         <table className='table'>
            <tbody>
            <tr>
                <th>S/N</th>
                <th>F-Name</th>
                <th>L-Name</th>
                <th> Email </th>
                <th> Password </th>
            </tr> 

          {message.map((each, index)=>(
              <tr key={index}>
                  <td> {index+1} </td>
                  <td>{each.id}</td>
                  <td>{each.firstname}</td>
                  <td>{each.lastname}</td>
                  <td>{each.email}</td>
                  
                  <td>{each.registrationDate}</td>
                  <td><button className='btn btn-small btn-danger'>Edit</button> </td>
                  {/* <form action=''> value={each.email} */}
                    <td> <input type='text'  onChange={(e)=>setemail(e.target.value) }  /> </td>
                    {/* onChange={(e)=>setemail(e.target.value)} */}
                    <td ><button onClick={()=> deleteUser()} className='btn btn-small btn-warning'>Delete</button></td>
                    {/* //onChange={(e)=>setemail(e.target.value)} */}
                  {/* </form> */}
              </tr>
              ))}
            </tbody>
        </table> 

        <input type='text'   onChange={(e)=>setemail(e.target.value)} placeholder='enter email of the user you want to delete'/>
        <button onClick={()=> deleteUser()}> Delete User </button>

        <input type='text'   onChange={(e)=>setemail(e.target.value)} placeholder='enter old email'/>
        <input type='text'   onChange={(e)=>setnewemail(e.target.value)} placeholder='enter your new email'/>
        <input type='text'   onChange={(e)=>setfirstname(e.target.value)} placeholder='enter new firstname'/>
        <input type='text'   onChange={(e)=>setlastname(e.target.value)} placeholder='enter new lastname'/>
        <input type='text'   onChange={(e)=>setpassword(e.target.value)} placeholder='enter new password'/>
        <button onClick={()=> editUser()}> Edit User </button>
        
        </div>
    </>
  )
}
export default DisplayUser
