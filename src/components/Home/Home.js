import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

import './Home.css';
const Home = () => {
    const topics = useLoaderData();
    const alltopics = topics.data;
    // console.log(topics.data);
    return (

        <div>
            <Quizes alltopics={alltopics}></Quizes>

        </div>
    );
};

export default Home;