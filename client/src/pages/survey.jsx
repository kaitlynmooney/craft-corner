import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Survey = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userResponses, setUserResponses] = useState([]);

    const questions = [
        {
            question: 'What is your name?',
            inputType: 'text'
        },
        {
            question: 'How old are you?',
            inputType: 'number'
        },
        {
            question: 'What is your favorite color?',
            inputType: 'text'
        }
    ];

    const handleNextQuestion = (response) => {
        setUserResponses([...userResponses, response]);
        setCurrentQuestion(currentQuestion + 1);
    };

    const history = useHistory();

    return (
        <main>
            {currentQuestion === questions.length ? (
                <>
                    {history.push('/dashboard')} {/* Redirect to the dashboard page */}
                </>
            ) : (
                <div>
                    <h1>Welcome! Let's learn a bit more about you.</h1>
                    <button onClick={() => handleNextQuestion('User response')}>Next</button>
                </div>
            )}
        </main>
    );
}

export default Survey;