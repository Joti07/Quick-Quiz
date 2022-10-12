import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Quizes from '../Quizes/Quizes';

import './Home.css';
const Home = () => {
    const topics = useLoaderData();
    const alltopics = topics.data;
    // console.log(topics.data);
    return (

        <div>
            <Banner></Banner>
            <Quizes alltopics={alltopics}></Quizes>

        </div>
    );
};

export default Home;