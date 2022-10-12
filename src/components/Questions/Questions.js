import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Alert } from 'react-bootstrap';
import './Questions.css';

const Questions = ({ quesData, handleAns }) => {
    //console.log(quesData);
    const [isActive, setIsActive] = useState(true);
    const handleAnsView = event => {
        setIsActive(current => !current);
    };
    return (
        <div>
            <div class="container mt-sm-5 my-1">
                <div class="question ml-sm-5 pl-sm-5 pt-2">
                    <h5 class="py-2 h5"><b>Q. {quesData.question.slice(3, -4)}</b>
                        <FontAwesomeIcon onClick={handleAnsView} className={isActive ? '' : `hidden`} icon={faEye} />
                        <FontAwesomeIcon onClick={handleAnsView} className={isActive ? `hidden` : ''} icon={faEyeSlash} />
                    </h5>
                    <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                        {

                            quesData.options.map(option =>
                                <label class="options" className='option'>
                                    <input onClick={() => handleAns(option, quesData.correctAnswer)} type="radio" name="radio" />{option}
                                    <span class="checkmark"></span>
                                    <ToastContainer />
                                </label>

                            )

                        }


                    </div>
                    <div className={isActive ? 'hidden' : ''}>
                        <Alert
                            onDismiss={function onDismiss() { handleAnsView() }}>
                            <span>
                                <span >
                                    Correct Answer :
                                </span>
                                {' '}{quesData.correctAnswer}
                            </span>
                        </Alert>
                    </div>
                </div>
            </div>

            {/* <div class="card" className='card-container'>
                <div class="card-header">
                    Question:  {quesData.question.slice(3, -4)}
                </div>
                <ul class="list-group list-group-flush">
                    {

                        quesData.options.map(option =>
                            <li class="list-group-item">{option}</li>
                        )

                    }
                </ul>
            </div> */}

        </div>
    );
};

export default Questions;