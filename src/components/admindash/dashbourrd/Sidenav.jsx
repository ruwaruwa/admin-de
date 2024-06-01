import { NavLink } from "react-router-dom"

import { useState } from "react"


function SideNav() {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleIsClose = () => {
        setIsOpen(false)
    }


    return <div className="w-[14%] h-screen fixed border-r-2 border-gray-100 shadow-lg bg-gray-200">
        <img className="w-20 ml-14" src={""} />

        <div className="text-2xl flex flex-col space-y-10 pl-10 pt-16 text-primeryColor">

            <NavLink to="/"> <i class="fa-brands fa-microsoft"></i> Dashboard</NavLink>



            <NavLink to="/patient"> <i class="fa-solid fa-hand-holding-droplet"></i>View Patient</NavLink>
            <NavLink to="/addpatient"> <i class="fa-solid fa-hand-holding-droplet"></i>Addpatient</NavLink>
            <NavLink to="/service"> <i class="fa-solid fa-hand-holding-droplet"></i>View Service</NavLink>

            <NavLink to="/addservice"> <i class="fa-solid fa-hand-holding-droplet"></i>Addservice</NavLink>
            <NavLink to="/payment"> <i class="fa-solid fa-droplet"></i> Peyment</NavLink>
            <NavLink to="/addpayment"> <i class="fa-solid fa-hand-holding-droplet"></i>Addpayment</NavLink>


            <NavLink to="/users"> <i class="fa-solid fa-droplet"></i> users</NavLink>
            <NavLink to="/login"> <i class="fa-solid fa-hand-holding-droplet"></i>login</NavLink>
            {/* <NavLink to="/register"> <i class="fa-solid fa-hand-holding-droplet"></i>register</NavLink> */}

         
        </div>
        <div className="absolute bottom-0">
            <hr className="border-b w-56 border-primeryColor mt-[5em]" />
            <img className="w-20 ml-16" src={""} />
        </div>



    </div >
}

export default SideNav