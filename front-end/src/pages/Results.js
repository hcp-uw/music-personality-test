import '../results.css'
import planetImage from "../images/planet-02.png"

export default function ResultsMain() {
    return (
    <main>
    <div className='overall'>
        <div className='overall-container'>
            <div className='results-container'>
                <div className='results-box'>
                    <img src={planetImage} alt="resultPlanetPic" className="result-image" />
                    <h1>Result: <br></br> The Voyager!</h1>
                </div>
                <div className='right-section'>
                    <div className='results-box2'>
                        <h1 className='text-results'>What your music personality tells you:</h1>
                        <p className='text-results'>You are one who prefers listening to X type of music rather than other types such as Y and Z types.</p>
                    </div>
                    <div className='results-box3'>
                        <h1 className='text-results'>What your music personality tells you:</h1>
                        <p className='text-results'>You are one who prefers listening to X type of music rather than other types such as Y and Z types.</p>
                    </div>
                </div>
            </div>
        </div>
       <div className='button1'>
        <div className='results-button'>
                <p className='text-results'>Take another test here!</p>
            </div>
       </div>
    </div>
    </main>
    )
}