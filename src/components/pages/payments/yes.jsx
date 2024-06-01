import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SideNav from '../../admindash/dashbourrd/Sidenav';
import SystemHeader from '../../admindash/systhemheader/Systemheader';

export default function AddPayment() {
    const { paymentId } = useParams(); // Assuming you have a route parameter for payment ID
    const [payment, setPayment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/payment/${paymentId}`);
                setPayment(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchPayment();
    }, [paymentId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <SideNav />
            <SystemHeader />
            <div>
                <div className='fle'>
                    <div id='' className='shadow-lg shadow-gray-600 sm:mt-10 sm:w-[520px] w-[300px] ml-10 sm:h-[500px] h-[400px] px-2 sm:p-2 sm:px-4 sm:ml-[40%] mt-4 bg-seconderyColor purple-400'>
                        {payment ? (
                            <form>
                                <h1 className='text-center text-2xl font-bold text-white'>Payment Details</h1>
                                <div>
                                    <label className='text-white text- ml-6'>Amount:</label><br/>
                                    <input value={payment.amount} type='text' className='outline-none px-5 w-full p-2' readOnly />
                                </div>
                                <div>
                                    <label className='text-white text- ml-6'>Paid:</label><br/>
                                    <input value={payment.paid} type='text' className='outline-none px-5 w-full p-2' readOnly />
                                </div>
                                <div>
                                    <label className='text-white text- ml-6'>Rest:</label><br/>
                                    <input value={payment.rest} type='text' className='outline-none px-5 w-full p-2' readOnly />
                                </div>
                                <div>
                                    <label className='text-white text- ml-6'>Description:</label><br/>
                                    <input value={payment.description} type='text' className='outline-none px-5 w-full p-2' readOnly />
                                </div>
                                <div>
                                    <label className='text-white text- ml-6'>Date:</label><br/>
                                    <input value={payment.date} type='text' className='outline-none px-5 w-full p-2' readOnly />
                                </div>
                            </form>
                        ) : (
                            <div>No payment found</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
