import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import UserLogin from './Pages/UserLogin'
import UserSignup from './Pages/UserSignup'
import CaptainSignup from './Pages/CaptainSignup'
import CaptainLogin from './Pages/CaptainLogin'
const App = () => {
  return (
    <div >
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/login" element={<UserLogin/>} />
         <Route path="/signup" element={<UserSignup/>} />
         <Route path="/captain-signup" element={<CaptainSignup/>} />
         <Route path="/captain-login" element={<CaptainLogin/>} />
      </Routes>
    </div>
  )
}

export default App