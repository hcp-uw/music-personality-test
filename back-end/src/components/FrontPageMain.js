import '../App.css'
import EastIcon from '@mui/icons-material/East';

export default function FrontPageMain() {
    return (
        <main className="front--main">
            <h1>Music Personality Test</h1>
            <h2>
                Want to find what your
                music personality is?
            </h2>
            <a href="/questions">
                <button className="page--button">
                    <strong>Take our quiz!</strong>
                </button>
            </a>
        </main>
    )
}