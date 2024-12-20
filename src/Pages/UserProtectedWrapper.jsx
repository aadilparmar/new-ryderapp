import { useContext, useEffect } from 'react'
import React from 'react'
import { UserDataContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import { use } from 'react'
const UserProtectedWrapper = ({children}) => {

    const token=localStorage.getItem("token");
    const navigate = useNavigate();
    
  useEffect(() => {
    if(!token){
      navigate('/login')
    }
  })

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper
