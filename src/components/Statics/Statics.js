import React from 'react';
import './Statics.css';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { Tooltip } from 'react-bootstrap';
const Statics = () => {

    const QuizData = useLoaderData();
    return (
        <div>
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