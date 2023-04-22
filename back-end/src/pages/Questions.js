import Question from '../components/Question'
import '../App.css'
import EastIcon from '@mui/icons-material/East'
import data from '../questionData'

export default function Home() {
    const questions = data.map(item => {
        return (
            <Question key={item.id}>
                {item.question}
            </Question>
        )
    })

    return (
        <div className="questions--div">
            {questions}
            <button className="page--button">
                Next&nbsp;<EastIcon />
            </button>
        </div>
    )
}