import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Survey = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userResponses, setUserResponses] = useState([]);

    const [addSurvey, { error, data}] = useMutation(ADD_SURVEY);

    const questions = [
        {
            question: <div dangerouslySetInnerHTML={{ __html: 'Welcome!<br>Let\'s learn a bit more about you.' }} />
        },
        {
            question: `I'm a...`,
            inputType: 'button',
            buttonOptions: [
                { text: 'Newbie Crafter', value: 1 },
                { text: 'Casual Crafter', value: 2 },
                { text: 'Pro Crafter', value: 3 }
            ]
        },
        {
            question: <div dangerouslySetInnerHTML={{ __html: 'I\'m interested in...<br><h4>(Choose up to 3)</h4>' }} />,
            inputType: 'button',
            buttonOptions: [
                { text: 'Sewing', value: 'Sewing' },
                { text: 'Painting', value: 'Painting' },
                { text: 'Pottery', value: 'Pottery' },
                { text: 'Crochet', value: 'Crochet' },
                { text: 'Woodworking', value: 'Woodworking' },
                { text: 'Stained Glass', value: 'Stained Glass' },
                { text: 'Scrapbooking', value: 'Scrapbooking' },
                { text: 'Origami', value: 'Origami' },
            ]
        },
        {
            question: `My ideal price point for a new craft is...`,
            inputType: 'button',
            buttonOptions: [
                { text: '$10–20', value: '$' },
                { text: '$20–80', value: '$$' },
                { text: '$100+', value: '$$$' }
            ]
        }
    ];

    const handleUserResponse = (response) => {
        // Store the user's response for the current question
        setUserResponses([...userResponses, response]);
    };

    const handleNextQuestion = (response) => {
        setUserResponses([...userResponses, response]);
        setCurrentQuestion(currentQuestion + 1);
    };

    const navigate = useNavigate();

    if (currentQuestion === questions.length) {
        navigate('/dashboard'); // Redirect to the dashboard page
    }

    return (
        <main>
            {currentQuestion !== questions.length && (
                <div className="inter" id="survey-page">
                    <h1>{questions[currentQuestion].question}</h1>
                    <ButtonOptions
                       options={questions[currentQuestion].buttonOptions}
                       handleUserResponse={handleUserResponse}
                       questionIndex={currentQuestion} // Pass the questionIndex as a prop
                    />
                   {currentQuestion === 0 ? (
                        <button className="borders" id="nextquestion" type="submit" onClick={() => handleNextQuestion('Start the Survey')}>
                            Start the Survey &#8594;
                        </button>
                    ) : currentQuestion === 3 ? (
                        <button className="borders" id="nextquestion" type="submit" onClick={() => handleNextQuestion('Create my Dashboard')}>
                            Create my Dashboard! &#8594;
                        </button>
                    ) : (
                        <button className="borders" id="nextquestion" type="submit" onClick={() => handleNextQuestion('Next Question')}>
                            Next Question &#8594;
                        </button>
                    )}
                </div>
            )}
        </main>
    );
};

export const ButtonOptions = ({ options, handleUserResponse, questionIndex }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleButtonClick = (value) => {
        if (questionIndex === 0) {
            // For the first question (index: 0), do not allow any selection
            return;
        } else if (questionIndex === 1 || questionIndex === 3) {
            // For the second and fourth questions (index: 1 and 3), allow only 1 option selection
            setSelectedOptions([value]);
        } else if (questionIndex === 2) {
            // For the third question (index: 2), allow up to 3 options selection
            if (selectedOptions.includes(value)) {
                setSelectedOptions(selectedOptions.filter(option => option !== value));
            } else if (selectedOptions.length <= 3) {
                setSelectedOptions([...selectedOptions, value]);
            }
        }
        handleUserResponse(selectedOptions); // Store the user's response
    };

    return (
        <div id="option-container">
            {options && options.map(option => (
                <button 
                    className={`button-options ${selectedOptions.includes(option.value) ? 'selected clicked' : ''}`}
                    key={option.value}
                    onClick={() => handleButtonClick(option.value)}
                >
                    {option.text}
                </button>
            ))}
        </div>
    );
};


export default Survey;