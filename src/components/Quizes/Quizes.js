import React from 'react';
import Topic from '../Topic/Topic';

const Quizes = ({ alltopics }) => {

    return (
        <div>
            <div className='topics-container'>
                {
                    alltopics.map(allTopic => <Topic
                        key={allTopic.id}
                        allTopic={allTopic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Quizes;