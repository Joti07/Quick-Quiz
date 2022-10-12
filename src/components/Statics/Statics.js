import React from 'react';
import './Statics.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianAxis, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { Tooltip } from 'react-bootstrap';
const Statics = () => {
    const notify = () => toast.success('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const QuizData = useLoaderData();
    return (
        <div>
            <ToastContainer />
            <button onClick={notify}>Notify!</button>
            <BarChart width={830} height={250} data={QuizData.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>

        </div>
    );
};

export default Statics;