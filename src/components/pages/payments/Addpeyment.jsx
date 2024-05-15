import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SideNav from '../../admindash/dashbourrd/Sidenav';
import SystemHeader from '../../admindash/systhemheader/Systemheader';

export default function Addpeyment() {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [paid, setPaid] = useState("");
    const [rest, setRest] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [serviceId, setServiceID] = useState("");
    const params = useParams();

    const handleSingleData = () => {
        axios.get(`http://localhost:3000/peyment/${params.id}`)
            .then((response) => {
                setName(response.data[0].name);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        handleSingleData();
    }, []);

    const navigate = useNavigate();

    const hadleUpdate = (e) => {
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
                toast.success('Successfully updated!');
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
                            {/* <div>
                                <label className='text-ce ml-6 text-white text-'>Enter your Name</label><br/>
                                <input value={name} onChange={(ev) => setName(ev.target.value)} type='text' placeholder='Enter your Name' className='outline-none px-5 w-full p-2 px'/>
                            </div> */}
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
                                    <option>Select Service</option>
                                    <option value='1'>Service 1</option>
                                    <option value='2'>Service 2</option>
                                    <option value='3'>Service 3</option>
                                    <option value='4'>Service 4</option>
                                    <option value='5'>Service 5</option>
                                    <option value='6'>Service 6</option>
                                    <option value='7'>Service 7</option>
                                    <option value='8'>Service 8</option>
                                    <option value='9'>Service 9</option>
                                    <option value='10'>Service 10</option>
                                    <option value='11'>Service 11</option>
                                    <option value='12'>Service 12</option>
                                    <option value='13'>Service 13</option>
                                </select>
                            </div>
                            <div>
                                <label className='text-white text- ml-6'>Choose your Date</label><br/>
                                <input value={date} onChange={(ev) => setDate(ev.target.value)} type='date' className='outline-none px-6 p-2 w-full' placeholder='Enter your Date'/>
                            </div>
                            <div className='text-center'>
                                <button onClick={hadleUpdate} className='text-white px-4 p-2 bg-orange-400 mt-3 sm:mt-2 mr-2 rounded-md'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
