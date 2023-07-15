import {useState} from 'react'
import Question from '../components/Question'
import '../App.css'
import EastIcon from '@mui/icons-material/East'
import data from '../questionData'

export default function Home() {
    const [dataRange, setDataRange] = useState(6)

    const questions = data.slice(dataRange - 6, dataRange).map(item => {
        return (
            <Question key={item.id}>
                {item.question}
            </Question>
        )
    })

    function nextPageData() {
        setDataRange(prevDataRange => prevDataRange + 6)
    }

    function changePage() {
        window.location.href = "/results"
    }
    
    return (
        <div className="questions--div">
            {questions}
            <button className="page--button" onClick={dataRange < 36 ? nextPageData : changePage}>
                Next&nbsp;<EastIcon />
            </button>
        </div>
    )
}