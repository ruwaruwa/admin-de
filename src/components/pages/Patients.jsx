import { useEffect, useState } from "react"
import SideNav from "../admindash/dashbourrd/Sidenav"
import SystemHeader from "../admindash/systhemheader/Systemheader"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
function Patients() {

    const [donorData, setDonorData] = useState([])

    const [page, setPage] = useState(0)

    const handleReadDonors = () => {
        axios.get(`http://localhost:3000/patient?page=${page}`).then((res) => {
            setDonorData(res.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleReadDonors()
    }, [page])

    const handleNextButton = () => {
        setPage(page + 1)
    }

    const handlePrevButton = () => {
        if(page > 0) {
            setPage(page - 1)
        }
    }

    const handleDeleteDonor = (id) => {
        axios.delete(`http://localhost:3000/patient/${id}`).then((res) => {
            toast("Donor Deleted successfully", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false
            })
            handleReadDonors()
        }).catch((error) => console.log(error))
    }

    // const handleSearchDonor = (id) => {
    //     const key = id.target.value
    //     if(key){
    //         axios.get(`http://localhost:7000/search/donors/${key}`).then((res) => {
    //             setDonorData(res.data)
    //         }).catch((error) => console.log(error))
    //     }
    //     else {
    //         handleReadDonors()
    //     }
    // }

    return <div>
        <SideNav />
        <SystemHeader />
   
        <div className="bg-fourthColor pb-4 mb-3 w-[84%] h-[70%] ml-[15%] mt-5 rounded-2xl shadow-2xl">
       
            <div className="flex justify-between px-2 pb-3">
                <h1 className="text-3xl text-textColor font-semibold pt-4">Patients</h1>
                <input onChange={""} type="text" className="outline-none mt-5 w-40 h-7 border-2 border-fourthColor rounded-lg p-2" placeholder="Search ..." />
            </div>
            <hr className="border-b border-thirdColor" />
            <table className="table-auto w-full mt-4">
                <thead className="border-b border-thirdColor">
                    <tr className="text-textColor text-center  font-medium">
                        <th className="py-2">FullName</th>
                        <th className="py-2">Age</th>
                        <th className="py-2">Address</th>
                  
                        <th className="py-2">Phone</th>
                        <th className="py-2">Gender</th>
                        <th className="py-2">Date</th>
                        <th className="py-2">Action</th>
                    </tr>
                </thead>

                {
                    donorData.length > 0 ? donorData.map((data) => {
                        return <tbody className="border-b border-thirdColor">
                            <tr className="text-textColor text-center">
                                <td className="py-4">{data.name}</td>
                                <td className="py-4">{data.address}</td>
                          
                                <td className="py-4">{data.phone}</td>
                                <td className="py-4">{data.gender}</td>
                                <td className="py-4">{data.age}</td>
                                <td className="py-4">{data.date}</td>
                                <td className="py-4">
                           <Link to={`/payment/${data._id}`} className="text-primeryColor bg-green-500 p-1 rounded-sm">Payment</Link>
                                 </td>
                                <td className="py-4"><i onClick={() => handleDeleteDonor(data._id)}
                                 class="fa-solid cursor-pointer fa-trash-can text-primeryColor"></i></td>
                                <td className="py-4">
                                <Link to={`/update/${data._id}`}>
                                <FaEdit  className="cursor-pointer fa-trash-can text-green-500 text-2xl right-5"/>
                                </Link>
                                </td>

                            </tr>
                        </tbody>
                    })
                    :
                    <p className="text-textColor">There is no data yet</p>
                }
            </table>
            {/* <button onClick={handlePrevButton} className="bg-primeryColor px-6 py-1 rounded-2xl text-textColor text-lg absolute bottom-2 right-32">prev</button>
            <button onClick={handleNextButton} className="bg-primeryColor px-6 py-1 rounded-2xl text-textColor text-lg absolute bottom-2 right-5">next</button> */}
        </div>

        <ToastContainer />
    

    </div>
}

export default Patients