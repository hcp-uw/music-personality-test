import EastIcon from '@mui/icons-material/East'
import manImg from '../images/Person2Emotions.png'
import musicImg from '../images/MusicStack.png'

export default function FrontPageMain() {
    return (
        <div className='color'>
            <div className='front--main'>
                <div className="main--box">
                    <div className="box--text-div">
                        <img src={manImg} alt="manImg" />
                        <h2 className="box--header">Find your music personality within minutes!</h2>
                        <p className="box--text">
                            Our algorithm allows you to determine your music preferences
                            from on a series of personality-based questions.
                        </p>
                    </div>
                    <div className="box--arrow">
                        <EastIcon fontSize="large"/>
                    </div>
                    <div className="box--text-div">
                        <img src={musicImg} alt="musicImg" />
                        <h2 className="box--header">Get valuable insights for your music preferences.</h2>
                        <p className="box--text">
                            93% of the U.S. population listens to music, spending more
                            than 25 hours each week jamming out to their favorite tunes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}