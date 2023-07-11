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


    useEffect(() => {
        console.log("test")
        axios.get("http://67.168.214.36:8080/questions")
            .then(res => {
                console.log(res);
                setQuestions(res);
            })
            .catch(error => {
                console.error(error);
            });
    }, [dataSet]);

    
    function nextPageData(event) {
        event.preventDefault()
        setDataSet(prevDataSet => prevDataSet + 1)
    }
    
    function changePage(event) {
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
    
    const renderQuestions = questions.map(item => {
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
            <form>
                {renderQuestions}
                <button className="page--button" onClick={dataSet < 6 ? nextPageData : changePage}>
                    Next&nbsp;<EastIcon />
                </button>
            </form>
        </div>
    )
}