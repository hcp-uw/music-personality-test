import '../results.css'
import planetImage from "../images/planet-02.png"

export default function ResultsMain() {
    return (
        <main>
            <div className='results-box'>
                <div className='results-main'>
                    <img src={planetImage} alt="resultPlanetPic" className="result-image" />
                </div>
                <p className='results-desc-title'>
                    Your results:
                </p>
                <p className='results-desc'>
                    The Voyager!
                </p>
            </div>
            
            <div className='rectangle-1'>
                <p className='rectangle-desc1'>
                    You are one who prefers listening to X type of music rather than other types such as Y and Z types. 
                </p>
            </div>
        </main>
        
    )
}