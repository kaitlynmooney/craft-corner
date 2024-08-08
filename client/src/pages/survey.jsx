import React, { useState } from 'react';

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

    return (
        <main>
            {currentQuestion === questions.length ? (
                <div>
                    <h1>Thank you for completing the survey!</h1>
                    <p>Your responses: {userResponses.join(', ')}</p>
                </div>
            ) : (
                <div>
                    <h1>Welcome! Let's learn a bit more about you.</h1>
                    <p>{questions[currentQuestion].question}</p>
                    <input type={questions[currentQuestion].inputType} />
                    <button onClick={() => handleNextQuestion('User response')}>Next</button>
                </div>
            )}
        </main>
    );
}

export default Survey;