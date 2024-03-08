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

const App = () => {
  // let token="12345"
  let token = localStorage.token;
  return (
    <div>
      
      <Routes>
        <Route path='/testbackend' element={<Signup/>}/> 
        <Route path='/signin' element={<Login/>}/> 
        {/* <Route path='/dashboard' element={token? <Dashboard/>: <Navigate to="/signin" />}/>  */}
        <Route path='/dashboard' element={ <Dashboard/>}/> 
        <Route path='/form' element={<FormInput/>}/>
        <Route path='/changebg' element={<ChangeBG/>}/>
        <Route path='/display' element={<DisplayUser/> }/>
        <Route path='/foodlist' element={<FoodList/>}/>
        <Route path='/myapi' element={<GetMyApi/>}/>
        <Route path='/file' element={<Fileurl/>}/> 
      </Routes>
    </div>
  )
}

export default App
