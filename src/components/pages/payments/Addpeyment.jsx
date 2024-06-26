import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SideNav from '../../admindash/dashbourrd/Sidenav';
import SystemHeader from '../../admindash/systhemheader/Systemheader';

export default function AddPayment() {
    const [amount, setAmount] = useState("");
    const [paid, setPaid] = useState("");
    const [rest, setRest] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [serviceId, setServiceID] = useState("");
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const handleSingleData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/service');
                console.log(response.data);
                setServices(response.data); // Assuming response.data is an array of services
            } catch (error) {
                console.log(error);
            }
        };
        handleSingleData();
    }, []);

    const handlePost = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/peyment/', {
            'amount': amount,
            'paid': paid,
            'rest': rest,
            'description': description,
            'date': date,
            'serviceid': serviceId
        })
        .then((response) => {
            console.log(response.data);
            if (response) {
               alert('Successfully posted!');
                navigate('/payment');
            }
        })
        .catch((error) => console.log(error));
    };

    return (
        <div>
            <SideNav/>
            <SystemHeader/>
            <div>
                <div className='fle'>
                    <div id='' className='shadow-lg shadow-gray-600 sm:mt-10 sm:w-[520px] w-[300px] ml-10 sm:h-[500px] h-[400px] px-2 sm:p-2 sm:px-4 sm:ml-[40%] mt-4 bg-seconderyColor purple-400'>
                        <form>
                            <h1 className='text-center text-2xl font-bold text-white'> Update</h1>
                            <div>
                                <label className='text-ce ml-6 text-white text-'>Enter your amount</label><br/>
                                <input value={amount} onChange={(ev) => setAmount(ev.target.value)} type='number' placeholder='Enter your amount' className='outline-none px-5 w-full p-2 px'/>
                            </div>
                            <div>
                                <label className='text-white text- ml-6'> Enter paid</label><br/>
                                <input value={paid} onChange={(ev) => setPaid(ev.target.value)} type='number' className='outline-none px-5 w-full p-2' placeholder='Enter your paid'/>
                            </div>
                            <div>
                                <label className='text-white text- ml-6'>Enter  rest</label><br/>
                                <input value={rest} onChange={(ev) => setRest(ev.target.value)} type='number' className='outline-none px-6 p-2 w-full' placeholder='Enter your rest'/>
                            </div>
                            <div>
                                <label className='text-white text- ml-6'>Enter your Description</label><br/>
                                <input value={description} onChange={(ev) => setDescription(ev.target.value)} type='text' className='outline-none px-6 p-2 w-full' placeholder='Enter your description'/>
                            </div>
                            <div>
                                <label className='text-white text- ml-6'>Select service</label><br/>
                                <select value={serviceId} onChange={(ev) => setServiceID(ev.target.value)} className='outline-none px-6 p-2 w-full'>
                                   {services.map((service) => (
                                     <option key={service._id} value={service.serviceid}>
                                        {service.name}
                                     </option>
                                   ))}
                                </select>
                            </div>
                            <div>
                                <label className='text-white text- ml-6'>Choose your Date</label><br/>
                                <input value={date} onChange={(ev) => setDate(ev.target.value)} type='date' className='outline-none px-6 p-2 w-full' placeholder='Enter your Date'/>
                            </div>
                            <div className='text-center'>
                                <button onClick={handlePost} className='text-white px-4 p-2 bg-orange-400 mt-3 sm:mt-2 mr-2 rounded-md'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
