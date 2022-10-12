import React from 'react';
import './Statics.css';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Tooltip } from 'react-bootstrap';
const Statics = () => {

    const QuizData = useLoaderData();
    // console.log(QuizData)
    return (
        <div className='lg:px-96 md:mt-5 px-0 mt-5'>

            <ResponsiveContainer width='92%' height={400}>
                <BarChart data={QuizData.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Statics;
