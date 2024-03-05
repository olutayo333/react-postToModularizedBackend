import axios from 'axios'
import React from 'react'

const GetMyApi = () => {
    let url = "http://localhost:7000/user/api"
   
    const getApi = ()=>{
        axios.get(url)
        .then((response)=>{console.log(response, response.data.message);})
    }

  return (
    <div>
      <h1> Connecting to my APi</h1>
      <button onClick={getApi}> Call on API</button>
    </div>
  )
}

export default GetMyApi
