import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './Quiz.css';
const Quiz = () => {
    const quizData = useLoaderData();

    const right = () => toast.success('Your answer is Correct!!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const wrong = () => {
        console.log('here')
        toast.error('Your answer is Wrong', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const handleAns = (option, correctAns) => {
        if (option === correctAns) {
            console.log(option);
            right()

        }
        else {
            wrong()
        }

    }
    const quesData = quizData.data.questions;
    // console.log(quizData.data.questions);


    return (
        <div>
            <div>
                {
                    quesData.map(quiz =>
                        <Questions
                            key={quesData.id}
                            quesData={quiz}
                            handleAns={handleAns}
                        ></Questions>
                    )
                }
            </div>

        </div>
    );
};

export default Quiz;