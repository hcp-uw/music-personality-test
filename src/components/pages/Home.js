import FrontPageMain from '../FrontPageMain'
import EastIcon from '@mui/icons-material/East'

export default function Home() {
    function nextPage() {
        window.location.href = "/questions"
    }

    return (
        <div className="front">
            <FrontPageMain />
            <button className={'home--button'} onClick={nextPage}>
                Take the Quiz&nbsp;<EastIcon />
            </button>
        </div>
    )
}