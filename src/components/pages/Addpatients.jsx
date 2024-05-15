
import React, { useEffect, useState } from 'react'
// import Header from './Header'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import SystemHeader from '../admindash/systhemheader/Systemheader'



export default function Addpatients() {
    const [name,setName]=useState("")
    const [age,setemage]=useState(" ")
    const [gender,setgender]=useState("")
    const [address,setmaddress]=useState("")
    const [phone,setphone]=useState("")
    const [date,setdate]=useState("")
//////////////////
    const handlESave=(e)=>{
        e.preventDefault() 
        axios.post('http://localhost:3000/patient/',{
"name":name,
            "age":age,
            "gender":gender,
            "address":address,
            "phone":phone,
"date":date,

        }).then((res)=>{
            console.log(res.data)
            toast.success('Success fully Added')
            //alert('success full posted')
            navigate('/patient')
        }).catch((error)=>{
            console.log(error)
        })
    }
    const navigate = useNavigate()
    //   document.body.style.backgroundColor ='#f98d6b'
      useEffect(()=>{
        // document.body.style.backgroundColor ='# f7a072'
        // document.body.style.opacity=""

      },[])
  return (
    <div>
        {/* <Header/> */}
        <SideNav/>
        <SystemHeader/>
        <div className='text-primeryColor '>
        {/* h-[100vh] bg-cover bg-gradient-to-b from-pink- 600 */}
        <div id='' className='shadow-lg shadow-gray-600 sm:mt-10 sm:w-[520px] w-[300px] ml-10 sm:h-[500px] h-[400px] px-2 sm:p-2 sm:px-4 sm:ml-[40%] mt-4 bg-seconderyColor purple-400'>
                        <form>
                            <h1 className='text-center text-2xl font-bold text-white'>Complain Update</h1>
                            <div>
                                <label className='text-ce ml-6 text-white text-'>Enter your Name</label><br></br>
                                <input value={name} onChange={(ev)=>setName(ev.target.value)}  type='text' placeholder='Enter your Name' className='outline-none px-5 w-full p-2 px'/>
                            </div>
                            <div>
                                <label className='text-ce ml-6 text-white text-'>Enter your Age</label><br></br>
                                <input value={age} onChange={(ev)=> setemage(ev.target.value)}  type='text' placeholder='Enter your age' className='outline-none px-5 w-full p-2 px'/>
                            </div>
                            <div>
                                <label className='text-white text- ml-6'> your Gender</label><br></br>
                                <input value={gender} onChange={(ev)=>setgender (ev.target.value)}  type='text' className='outline-none px-5 w-full  p-2' placeholder='Enter your gender'/>
                            </div>
                            <div>
                                <label className='text-white text- ml-6'>Enter your Addres</label><br></br>
                                <input value={address} onChange={(ev)=> setmaddress(ev.target.value)} type='text' className='outline-none px-6 p-2 w-full' placeholder='Enter your address'/>
                            </div>
                            <div>
                                <label className='text-white text- ml-6'>Enter your phone</label><br></br>
                                <input value={phone} onChange={(ev)=> setphone(ev.target.value)} type='text' className='outline-none px-6 p-2 w-full' placeholder='Enter your Phone'/>
                            </div>
                            <div>
                                <label className='text-white text- ml-6'>Choose your Date</label><br></br>
                                <input value={date} onChange={(ev)=> setdate(ev.target.value)} type='date' className='outline-none px-6 p-2 w-full' placeholder='Enter your Date'/>
                            </div>
    <div className='text-center'>
        <button onClick={handlESave} className='text-white px-4 p-2 bg-orange-400  mt-3 sm:mt-2 mr-2 rounded-md'>Save</button>
    </div>
                        </form>
                    </div>
        </div>

    </div>
  )
}
