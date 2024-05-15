
import React, { useEffect, useState } from 'react'
// import Header from './Header'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


import SystemHeader from '../../admindash/systhemheader/Systemheader'
import SideNav from '../../admindash/dashbourrd/Sidenav'
export default function Addservice() {
    const [name,setName]=useState('')
    const [date,setedate]=useState('')
    const [id,setid]=useState('')
    const [message,setmmessage]=useState('')
//////////////////
    const handlESave=(e)=>{
        e.preventDefault() 
        axios.post('http://localhost:3000/service/',{
"name":name,
"date":date,
"id":id,
        }).then((res)=>{
            console.log(res.data)
            toast.success('Success fully Added')
            //alert('success full posted')
            navigate('/service')
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
            <div id='b g' className='p- items-center bg-cover flex justify-center  h- [100vh] bg- cover bg-gradient-to-b from-pink- 600 -300 text-black'>
                <div className='grid sm:grid-cols-2 sm:p-2  pb-3'>

              <div>
              {/* <div className='p-10'>
                    <img src={p} className='sm:w-[590px] sm:h-[480px] mr- [20%]'/>
                </div> */}

              </div>
                <div className='shadow-lg shadow-gray-600 sm:mt-16  sm:w-[400px] pb-10  w-[300px] p- ml- sm:h-[300px] h-[380px] px-2 sm:p-2 sm:px-4 sm:ml- [40%]  bg-seconderyColor purple-400 '>
                    <form>
                    <h1 className='text-center text-2xl font-bold text-white'>service  </h1>
                        <div>
                            <label className='text-ce ml-6 text-white text-'>Enter your id</label><br></br>
                            <input value={id} onChange={(e)=>setid(e.target.value)}  type='text' placeholder='Enter your ID' className='outline-none px- 5 w-full p-2 px'/>
                        </div>
                    
                        <div>
                            <label className='text-ce ml-6 text-white text-'>Enter your Name</label><br></br>
                            <input value={name} onChange={(e)=>setName(e.target.value)}  type='text' placeholder='Enter your Name' className='outline-none px- 5 w-full p-2 px'/>
                        </div>
                        <div>
                            <label className='text-ce ml-6 text-white text-'>Choose date</label><br></br>
                            <input value={date} onChange={(e)=>setedate(e.target.value)}  type='date' placeholder='Enter your Date' className='outline-none px- 5 w-full p-2 px'/>
                        </div>
                      
                        
<div className='text-center'>
    <button onClick={handlESave} className='text-white px-4 p-2 bg-orange-400  mt-3 sm:mt-2 mr-2 rounded-md'>Save</button>
</div>
                    </form>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}
