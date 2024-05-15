import React, { useEffect } from 'react'
import SideNav from './Sidenav'
import SystemHeader from '../systhemheader/Systemheader'
import DashbCards from './DashbCards'
import { useNavigate } from 'react-router-dom'

export default function Dashbouurd() {
  const isAuth=localStorage.getItem('user')
  const navigate=useNavigate()
  const handleAuth=()=>{
    if(!isAuth){
      navigate('/login')
    }
  }
  useEffect(()=>{
    handleAuth()
  })
  return (
    <div>
        <SideNav/>
        <SystemHeader/>
        <DashbCards/>
    </div>
  )
}
