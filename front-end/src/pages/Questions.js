import {useState, useEffect} from 'react'
import Question from '../components/Question'
import EastIcon from '@mui/icons-material/East'
import data from '../questionData'
import axios from 'axios';

export default function Questions() {
    // Variable that represents which set of questions are displayed at each render
    const [dataSet, setDataSet] = useState(0)

    // Variable that contains each question's answer
    // Note: need to % results before sending to backend
    const [results, setResults] = useState([])

    // API data
    const [questions, setQuestions] = useState([])

    const [selectedOptions, setSelectedOptions] = useState(Array(6).fill(null));
    // Fake data from questionData.js
    //const [questions, setQuestions] = useState(data)

    const [selected, setSelected] = useState(true);



    // During the first render of questions, gathers all the questions to be saved in state
    useEffect(() => {
        axios.get("http://67.168.214.36:5000/questions")
            .then(res => {
                setQuestions(res.data)
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    useEffect(() => {
        const allQuestionsAnswered = () => {
            return selectedOptions.every((option) => option !== null);
        }

        if (allQuestionsAnswered()) {
            setSelected(false);
        }
    }, [selectedOptions]);

    // Shifts the questions rendered to the next 6
    function nextPageData(event) {
        setSelected(true);
        setSelectedOptions(Array(6).fill(null));
        event.preventDefault()
        setDataSet(prevDataSet => prevDataSet + 6)
    }

    // Redirects the user to the results page
    function resultsPage(event) {
        setSelected(true);
        setSelectedOptions(Array(6).fill(null));
        event.preventDefault()
        window.location.href = "/results"
    }

    // After each button clicked by the user, addResult collects that answer and adds it to state
    // or changes a previous result to the new answer
    function addResult(newId, answer) {
        let sameId = -1
        if (results.length > 0) { // the user has given an answer already in the test
            sameId = results.findIndex(question => question.id === newId)
        }
        setResults(prevResults => {
            if (sameId === -1) {
                return ([...prevResults, {id: newId, result: answer}])
            } else {
                return(
                    [
                        ...prevResults.slice(0, sameId),
                        {...prevResults[sameId], result: answer},
                        ...prevResults.slice(sameId + 1)
                    ]
                )
            }
        })
    }

    const updateSelectedOptions = (index, option) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[index] = option;
        setSelectedOptions(updatedOptions);
    };

    // Renders the set of questions with their answers saved from state
    const renderQuestions = questions.slice(dataSet, dataSet + 6).map((item, index) => {
        let questionId = -1
        if (results.length > 0) {
            questionId = results.findIndex(question => question.id === item.id)
        }
        let questionResult = -1
        if (questionId !== -1) {
            questionResult = results.find(question => question.id === item.id).result
        }
        return (
            <Question
                key={item.id}
                id={item.id}
                addResult={addResult}
                result={questionResult}
                updateSelectedOptions={(option) => updateSelectedOptions(index, option)}
            >
                {item.question}
            </Question>
        )
    })

    return (
        <div className="questions--div">
            {renderQuestions}
            {dataSet < 30 ? (
                <button className={selected ? 'next--button disable-button':'next--button'} onClick={nextPageData}>
                    Next&nbsp;<EastIcon />
                </button>
            ) : (
                <button className={selected ? 'next--button disable-button': 'next--button'} onClick={resultsPage}>
                    Finish&nbsp;<EastIcon />
                </button>
            )}
        </div>
    )
}