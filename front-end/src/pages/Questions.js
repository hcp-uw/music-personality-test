// Note: need to % results before sending to backend
// Note: need to change object to json
// Note: need to give questions unique keys

import {useState, useEffect} from 'react'
import Question from '../components/Question'
import EastIcon from '@mui/icons-material/East'
import data from '../questionData'
import axios from 'axios';

export default function Questions() {
    const [dataSet, setDataSet] = useState(0)

    const [results, setResults] = useState([])

    // API data
    // const [questions, setQuestions] = useState([])
    
    // Fake data from questionData.js
    const [questions, setQuestions] = useState(data)

    // useEffect(() => {
    //     console.log("taken")
    //     axios.get("http://67.168.214.36:8080/questions")
    //         .then(res => {
    //             setQuestions(res.data)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         });
    // }, []);

    function nextPageData(event) {
        event.preventDefault()
        setDataSet(prevDataSet => prevDataSet + 6)
    }
    
    function resultsPage(event) {
        event.preventDefault()
        window.location.href = "/results"
    }
    
    function addResult(newId, answer) {
        let sameId = -1
        if (results.length > 0) {
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
    
    const renderQuestions = questions.slice(dataSet, dataSet + 6).map(item => {
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
            >
                {item.question}
            </Question>
        )
    })

    return (
        <div className="questions--div">
            {renderQuestions}
            <button className="page--button" onClick={dataSet < 30 ? nextPageData : resultsPage}>
                Next&nbsp;<EastIcon />
            </button>
        </div>
    )
}