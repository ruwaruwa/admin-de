import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideNav from '../../admindash/dashbourrd/Sidenav';
import SystemHeader from '../../admindash/systhemheader/Systemheader';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreatePayment = () => {
    const [services, setServices] = useState([]);
    const [selectedServiceId, setSelectedServiceId] = useState('');
    const [amount, setAmount] = useState('');
    const [paid, setPaid] = useState('');
    const [rest, setRest] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch the list of services from the backend
        axios.get('http://localhost:3000/service')
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the services!', error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create the payment object
        const payment = {
            serviceid: selectedServiceId,
            amount,
            paid,
            rest,
            description,
            date
        };

        // Send the payment data to the backend
        axios.post('http://localhost:3000/peyment', payment)
            .then(response => {
               alert('Payment created successfully!', response.data);
               navigate('/payment')
                // Optionally, clear the form
                setSelectedServiceId('');
                setAmount('');
                setPaid('');
                setRest('');
                setDescription('');
                setDate('');
            })
            .catch(error => {
                console.error('There was an error creating the payment!', error);
            });
    };

    return (
        <div className="">
   <SideNav/>
            <SystemHeader/>
<div className='shadow-lg shadow-gray-600 sm:mt-10 sm:w-[520px] w-[300px] ml-10 sm:h-[500px] h-[400px] px-2 sm:p-2 sm:px-4 sm:ml-[40%] mt-4 bg-seconderyColor purple-400'>
            <h2 className='text-ce ml-6 text-white'>Create Payment</h2>
            <form onSubmit={handleSubmit} className='bg -green-700 p -20'>
                <div>
                    <label className='text-ce ml-6 text-white'>Service</label>
                    <select value={selectedServiceId} onChange={(e) => setSelectedServiceId(e.target.value)} required  className='outline-none px-5 w-full p-2'>
                        <option value="">Select a service</option>
                        {services.map(service => (
                            <option key={service._id} value={service._id}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className='text-ce ml-6 text-white'>Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required  className='outline-none px-5 w-full p-2'
                    />
                </div>
                <div>
                    <label className='text-ce ml-6 text-white'>Paid</label>
                    <input
                        type="number"
                        value={paid}
                        onChange={(e) => setPaid(e.target.value)}
                        required  className='outline-none px-5 w-full p-2'
                    />
                </div>
                <div>
                    <label className='text-ce ml-6 text-white'>Rest</label>
                    <input
                        type="number"
                        value={rest}
                        onChange={(e) => setRest(e.target.value)}
                        required  className='outline-none px-5 w-full p-2'
                    />
                </div>
                <div>
                    <label className='text-ce ml-6 text-white'>Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required  className='outline-none px-5 w-full p-2'
                    />
                </div>
                <div>
                    <label className='text-ce ml-6 text-white'>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required  className='outline-none px-5 w-full p-2'
                    />
                </div>
                <button type="submit" className='text-white px-4 p-2 bg-orange-400 mt-3 j sm:mt-2 mr-2 sm:ml-[25%] rounded-md'>Create Payment</button>
            </form>
        </div>
        </div>
      
    );
};

export default CreatePayment;
