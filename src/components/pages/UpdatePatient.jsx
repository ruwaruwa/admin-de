import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Dashbouurd from '../admindash/dashbourrd/Dashbouurd'
import { toast } from 'react-toastify'
import SideNav from '../admindash/dashbourrd/Sidenav'
import SystemHeader from '../admindash/systhemheader/Systemheader'

export default function Updatpatients() {
    const [name,setName]=useState("")
    const [age,setemage]=useState(" ")
    const [gender,setgender]=useState("")
    const [address,setmaddress]=useState("")
    const [phone,setphone]=useState("")
    const [date,setdate]=useState("")
    //get one
const params=useParams()
const handleSingleData = () => {
    axios.get(`http://localhost:3000/patient/${params.id}`).then((response)=> {
    setName(response.data.name)
    console.log(response.data[0].name)
      setName(response.data[0].name);
      setemage(response.data[0].age);
      setgender(response.data[0].gender);
      setmaddress(response.data[0].address);
      setphone(response.data[0].phone);
      setdate(response.data[0].date);
    
    }).catch((error)=> console.log(error))
  };




    // const getSignleDaata=()=>{

    //     axios.get(`http:localhost:3000/complaint/getOne/${params.id}`).then((response)=>{
    //     setName(response.data.name);
    //         setemail(response.data.email);
    //         setpasword(response.data.password);
    //         setmmessage(response.data.message);
           
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }
    useEffect(()=>{
        // getSignleDaata()
        handleSingleData();
    },[])
    //update
    const navigate = useNavigate()
    const hadleUpdate =(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3000/patient/${params.id}`,{
   "name":name,
    "age":age,
     "gender":gender,
    "address":address,
    "phone":phone,
    "date":date
        }).then((response)=>{
            console.log(response.data)
         if(response){
            toast.success('success fully updated !!')
          //  alert('success ful updated')
            navigate('/patient')
         }
        //  else{
        //     console.log(error.message)
        //  }
        }).catch((error)=>console.log(error))
    }

    //delete
  

    return (
        <div>
           <SideNav/>
           <SystemHeader/>
            {/* <Header/> */}
            <div>
                <div className='fle'>
                    {/* <div className='p-10'>
                        <img src={p} className='w-[500px]'/>
                    </div> */}
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
        <button onClick={hadleUpdate} className='text-white px-4 p-2 bg-orange-400  mt-3 sm:mt-2 mr-2 rounded-md'>Save</button>
    </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      )
}