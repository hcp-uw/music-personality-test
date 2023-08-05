import '../App.css'
import EastIcon from '@mui/icons-material/East'
import manImg from '../images/Person2Emotions.png'
import musicImg from '../images/MusicStack.png'

export default function FrontPageMain() {
    return (
        <main className="front--main">
            <div className="main--content">
                <div>
                    <img src={manImg} alt="manImg" />
                </div>
                <div className="test">
                    <EastIcon fontSize="large"/>
                </div>
                <div>
                    <img src={musicImg} alt="musicImg" />
                </div>
            </div>
        </main>
    )
}