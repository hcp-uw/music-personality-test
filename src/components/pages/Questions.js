import {useState, useEffect} from 'react'
import Question from '../Question'
import EastIcon from '@mui/icons-material/East'
import data from '../../questionData'
import { UpdateUser } from "./../../backend/api/database"
import { useAuth } from "./../../context/AuthContext";
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

    const { currentUser } = useAuth()

    // During the first render of questions, gathers all the questions to be saved in state
    useEffect(() => {

        let output = [...data];

    for (let i = output.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [output[i], output[j]] = [output[j], output[i]];
    }

        setQuestions(output)
        // axios.get("http://67.168.214.36:5000/questions")
        //     .then(res => {
        //         setQuestions(res.data)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     });
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
        console.log(results);
        setSelected(true);
        setSelectedOptions(Array(6).fill(null));
        event.preventDefault()
        setDataSet(prevDataSet => prevDataSet + 6)
    }

    // Redirects the user to the results page
    function resultsPage(event) {
        calculatePersonality();
        console.log(results);
        // setSelected(true);
        // setSelectedOptions(Array(6).fill(null));
        // event.preventDefault()
        // window.location.href = "/results"
    }

    function calculatePersonality() {
        let lst = [0,0,0,0];
        let output = "";

        for (const item of results) {
            console.log(item);
            let id = item.id;
            let index = Math.floor(id / 10);

            console.log(index);
            lst[index - 1] = lst[index - 1] + item.result
        }

        if (lst[0] >= 0) {
            output += "E";
        } else {
            output += "F";
        }

        if (lst[1] >= 0) {
            output += "V";
        } else {
            output += "L";
        }

        if (lst[2] >= 0) {
            output += "N";
        } else {
            output += "T";
        }

        if (lst[3] >= 0) {
            output += "U";
        } else {
            output += "C";
        }
        console.log(lst);
        console.log(output);

        if (currentUser) {
            UpdateUser(currentUser.uid, output);
        } else {
            UpdateUser("temp", output);
        }
    }
    // After each button clicked by the user, addResult collects that answer and adds it to state
    // or changes a previous result to the new answer
    function addResult(newId, answer) {

        let sameId = -1
        if (results.length > 0) { // the user has given an answer already in the actualResult
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