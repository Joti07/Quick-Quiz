import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({ allTopic }) => {
    const { id, name, logo, total } = allTopic;
    //console.log(logo);
    return (
        <div className='topic'>
            <img src={logo === 'https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png' ? 'https://i.ibb.co/qBTGWXR/52412639027-5692c15b3f-o.png' : logo}></img>
            <h2>{name}</h2>
            <p>Question: {total}</p>
            <Link
                to={`/quiz/${id}`}
                class="btn btn-primary">
                Start Test
            </Link>
        </div>
    );
};

export default Topic;