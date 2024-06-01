import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
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
import CreatePayment from './components/pages/payments/Addmenent'


function App() {
  const [count, setCount] = useState(0)
 // const isAuth=localStorage.getItem('user')
  //const isAuth = true; // Assuming the user is authenticated
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
    <><Routes>
      <Route path="login" element={<Login/>}></Route>
      {/* {isAuth &&  ( */}
      
      
                <Route path="/" element={<Dashbouurd />}>       </Route>
                    <Route path="patient" element={<Patients />} />
                    <Route path="addpatient" element={<Addpatients />} />
                    <Route path="update/:id" element={<Updatpatients />} />
                    <Route path="service" element={<Service />} />
                    <Route path="addservice" element={<Addservice />} />
                    <Route path="updateservice/:id" element={<UpdatService />} />
                    <Route path="payment" element={<Payments />} />
                    <Route path="addpayment" element={<CreatePayment />} />
                    {/* The route for "payment/:id" should be under the "payment" route */}
                    <Route path="payment/:id" element={<CreatePayment />} />
                    {/* Add a catch-all route to handle unknown paths */}
                    <Route path="*" element={<Navigate to="/login" />} />
         
    
     </Routes>

    </>
  )
}

export default App
