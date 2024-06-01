import { Link, Navigate, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import logo from '../assets/images/logo.jpeg';
import axios from 'axios'
import { useState } from "react";
import {URL} from '../url'

const Register = () => {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const navigate=useNavigate()

  const handleRegister=async()=>{
    
    try{
      const res=await axios.post(URL+"/api/auth/register",{username,email,password})
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      navigate("/login")      

    }catch(err){
      setError(true)
      console.log(err)
    }
  }

  // console.log(username)
  // console.log(email)
  // console.log(password)
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <Link to={'/'}><img src={logo} alt="Logo" className="h-32 w-80" /></Link>
        <h3><Link to="/login">Login</Link></h3>
      </div>
      <hr className='border border-black w-full'></hr>
      <div className="w-full flex justify-center items-center h-[80vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Create an account</h1>
        
          <input onChange={(e)=>setUsername(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your username" />
          <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your email" />
          <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Enter your password" />
          <button onClick={handleRegister} className="w-full px-4 py-4 text-lg font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-200 hover:text-black ">Register</button>
          {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
          <div className="flex justify-center items-center space-x-3">
            <p>Already have an account?</p>
            <p className="text-gray-500 hover:text-black"><Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Register