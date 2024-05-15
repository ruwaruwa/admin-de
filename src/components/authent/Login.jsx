
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './login.css'
export default function Login() {
  const [username,setusername] =useState('')
  const [password,setpassword] = useState('')

const navigate =useNavigate()
  const handleLogin= (e)=>{
    e.preventDefault();

    axios.post('http://localhost:3000/user/login/',
    
    {
  
      "email":username,
      "password":password
    }).then((response)=>{
     
      if(response.data.error){
    toast.error("invalid email or password")
      }else{
  toast.success("succcessfully logged in")
        localStorage.setItem("user",JSON.stringify(response.data))
        navigate('/')

      }
   
    })
  }

  return (
    // style={{"background":"url('../../assets/images/web.jpg')"}}
    <div id='bg' className='items-center flex justify-center  h-[100vh] bg-cover bg-gradient-to-b from-pink- 600 w-full bg--700 '  >
        <div className='text- w-[400px] bg- h-[320px] rounded-lg shadow-lg shadow-gray-400 border-2 bg-gray-400'>
            <form className='p-4 px-4'>
               <div>
                <h1 className='text-center text-white font-bold text-2xl'>Sign in to your account</h1>
                <label className='ml-2 text-white text-xl'>Enter your Email</label><br></br>
               <input value={username}onChange={(e)=>setusername(e.target.value)} type='text' placeholder='Enter your Email' className='p-2 w-full   px-8 border-2 outline-none'/>
               </div>
               <div>
                <label className='text-white text-xl'>Enter your Password</label><br></br>
               <input value={password}  onChange={(e)=>setpassword(e.target.value)}  type='password' placeholder='Enter your w-full Password' className='p-2 w-full  px -8 border-2 outline-none' />
               </div>
              <div className='text-center'>
              <button onClick={handleLogin} className=' text-xl text-white bg-orange-500
               p-2 px- 4 mt-3 rounded px-8'>login</button>
              </div>
              <div className='mt-5'>
              <p className='text-xl text-white'>not a member ?<Link to={'/createAcount'}>
              <span className='text-blue-500'> Signup now</span>
              </Link>
              </p>
              </div>
            </form>
        </div>
    </div>
  )
}
