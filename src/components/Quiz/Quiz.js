import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quiz.css';
const Quiz = () => {
    const quizData = useLoaderData();
    const quesData = quizData.data.questions;
    console.log(quizData.data.questions);


    return (
        <div>
            <div>
                {
                    quesData.map(quiz =>
                        <Questions
                            key={quesData.id}
                            quesData={quiz}
                        ></Questions>
                    )
                }
            </div>

        </div>
    );
};

export default Quiz;