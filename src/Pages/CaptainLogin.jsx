import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../Context/CaptainContext'

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
  

    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    const navigate = useNavigate(); 

      const submitHandler = async (e) => {
          e.preventDefault();
          const captain={
            email: email,
            password,
          }
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)
  
          if(response.status === 200){
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem("token",data.token);
            navigate("/captain-home");
          }
          setEmail("");
          setPassword("");
        }
  return (
    <div>
      <div className=" p-7 h-screen flex flex-col justify-between">
      <div>
        <img className='w-20 'src="/assets/Ryderlogo2.png" alt="ryder-logo" />
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="email@example.com"
        />
        <h3 className="text-lg font-medium mb-2">What's your password</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="password"
        />
        <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Login</button>
        <p>Join our team ? <Link to={'/captain-signup'} className="text-blue-600">Register as captain</Link></p>
      </form>
       </div>
      <div>
        <Link to={'/login'} className="bg-[#f3c015] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Login as User</Link>
      </div>
    </div>
    </div>
  )
}

export default CaptainLogin