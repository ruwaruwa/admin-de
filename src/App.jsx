import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashbouurd from './components/admindash/dashbourrd/Dashbouurd'
import Patients from './components/pages/Patients'
import Updatpatients from './components/pages/UpdatePatient'
import Service from './components/pages/Service/Service'
import UpdatService from './components/pages/Service/UpdateService'
import Addservice from './components/pages/Service/Addservice'
import Addpatients from './components/pages/Addpatients'
import Payments from './components/pages/payments/Payement'
import Addpeyment from './components/pages/payments/Addpeyment'
import Login from './components/authent/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashbouurd />} />
        <Route path="/patient" element={<Patients/>} />
        <Route path="addpatient" element={<Addpatients />} />
        <Route path="update/:id" element={<Updatpatients />} />
        <Route path="service" element={<Service/>}></Route>
        <Route path="addservice" element={<Addservice/>}></Route>
        <Route path="updateservice/:id" element={<UpdatService/>}></Route>
        <Route path="payment" element={<Payments/>}></Route>
        <Route path="payment/:id" element={<Addpeyment/>}></Route>
        <Route path="addpayment" element={<Addpeyment/>}></Route>
        <Route path="login" element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
