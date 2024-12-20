import React from 'react'
import { Link } from 'react-router-dom' 
import { useState } from 'react'
const UserSignup = () => {
  const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [firstname, setFirstname] = useState("");
      const [lastname, setLastname] = useState("");
      const [userData, setUserData] = useState({});
  
      const submitHandler = (e) => {
          e.preventDefault();
          setUserData({ email:email, password:password, fullname:{firstname:firstname, lastname:lastname} });  
          console.log(userData);
          setEmail("");
          setPassword("");
          setFirstname("");
          setLastname("");
        }

  return (
    <div>
      <div className=" p-7 h-screen flex flex-col justify-between">
      <div>
        <img className='w-20 'src="/assets/Ryderlogo2.png" alt="ryder-logo" />
      <form onSubmit={(e)=>{submitHandler(e)}}>
      <h3 className="text-base font-medium mb-1">What's your Name</h3>
      <div className='flex justify-between gap-3 mb-2'>
      <input
          className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-sm"
          type="text"
          required
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="First Name"
        />
        <input
          className="bg-[#eeeeee]  rounded px-4 py-2 border w-full text-base placeholder:text-sm"
          type="text"
          required
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Last Name"
        />
      </div>
        <h3 className="text-base font-medium mb-1">What's your email</h3>
        <input
          className="bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
        />
        <h3 className="text-base font-medium mb-1">What's your password</h3>
        <input
          className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Sign Up</button>
        <p>Already a User? <Link to={'/login'} className="text-blue-600">Click to Login</Link></p>
      </form>
       </div>
      <div>
        <p className='text-[10px] leading-tight'>By Clicking 'Sign Up' above , I have reviewed and agree to the Terms of Use and acknowledge the Privacy Notice. I am at least 18 years of age.</p>
      </div>
    </div>
    </div>
  )
}

export default UserSignup