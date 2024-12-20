import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({ email:email, password:password });
        setEmail("");
        setPassword("");
      }
  return (
    <div className=" p-7 h-screen flex flex-col justify-between">
      <div>
        <img className='w-20'src="/assets/Ryderlogo2.png" alt="ryder-logo" />
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <h3 className="text-lg font-medium mb-1">What's your email</h3>
        <input
          className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="email@example.com"
        /> 
        <h3 className="text-lg font-medium mb-1">What's your password</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="password"
        />
        <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Login</button>
        <p>New here? <Link to={'/signup'} className="text-blue-600">Create new Account</Link></p>
      </form>
       </div>
      <div>
        <Link to={'/captain-login'} className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Login as Captain</Link>
      </div>
    </div>
  );
}; 

export default UserLogin;
