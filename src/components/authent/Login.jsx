
// import axios from 'axios';
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import './login.css'
// export default function Login() {
//   const [username,setusername] =useState('')
//   const [password,setpassword] = useState('')

// const navigate =useNavigate()
//   const handleLogin= (e)=>{
//     e.preventDefault();

//     axios.post('http://localhost:3000/user/login',
    
//     {
  
//       "email":username,
//       "password":password
//     }).then((response)=>{
     
//       if(response.data.error){
//    alert("invalid email or password")
//       }else{
// alert("succcessfully logged in")
//         localStorage.setItem("user",JSON.stringify(response.data))
//         navigate('/')

//       }
   
//     })
//   }

//   return (
//     // style={{"background":"url('../../assets/images/web.jpg')"}}
//     <div id='bg' className='items-center flex justify-center  h-[100vh] bg-cover bg-gradient-to-b from-pink- 600 w-full bg--700 '  >
//         <div className='text- w-[400px] bg- h-[320px] rounded-lg shadow-lg shadow-gray-400 border-2 bg-gray-400'>
//             <form className='p-4 px-4'>
//                <div>
//                 <h1 className='text-center text-white font-bold text-2xl'>Sign in to your account</h1>
//                 <label className='ml-2 text-white text-xl'>Enter your Email</label><br></br>
//                <input value={username}onChange={(e)=>setusername(e.target.value)} type='text' placeholder='Enter your Email' className='p-2 w-full   px-8 border-2 outline-none'/>
//                </div>
//                <div>
//                 <label className='text-white text-xl'>Enter your Password</label><br></br>
//                <input value={password}  onChange={(e)=>setpassword(e.target.value)}  type='password' placeholder='Enter your w-full Password' className='p-2 w-full  px -8 border-2 outline-none' />
//                </div>
//               <div className='text-center'>
//               <button onClick={handleLogin} className=' text-xl text-white bg-orange-500
//                p-2 px- 4 mt-3 rounded px-8'>login</button>
//               </div>
//               <div className='mt-5'>
//               <p className='text-xl text-white'>not a member ?<Link to={'/createAcount'}>
//               <span className='text-blue-500'> Signup now</span>
//               </Link>
//               </p>
//               </div>
//             </form>
//         </div>
//     </div>
//   )
// }
import './login.css'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make POST request to login endpoint
      axios.post('http://localhost:3000/user/login',{
        "username":username,
        "password":password
      }).then((response)=>{
        if(response.data.error){
          console.log(response.data)
         alert("Invalid username or password")
        }else{
         alert("success full loging")
          localStorage.setItem("user",JSON.stringify(response.data))
          navigate('/')
  
        }
     
      })}
     catch (error) {
      setError(error.response.data.message);
  
  };
}
  return (
    <div id='bg' className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

