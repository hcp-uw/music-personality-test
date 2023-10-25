import { useState } from 'react'
import ENVC from '../images/PlanetENVC.svg'
import ENVU from '../images/PlanetENVU.svg'
import ENLC from '../images/PlanetENLC.svg'
import ENLU from '../images/PlanetENLU.svg'
import ETLC from '../images/PlanetETLC.svg'
import ETLU from '../images/PlanetETLU.svg'
import ETVC from '../images/PlanetETVC.svg'
import ETVU from '../images/PlanetETVU.svg'
import FNLC from '../images/PlanetFNLC.svg'
import FNLU from '../images/PlanetFNLU.svg'
import FNVC from '../images/PlanetFNVC.svg'
import FNVU from '../images/PlanetFNVU.svg'
import FTLC from '../images/PlanetFTLC.svg'
import FTLU from '../images/PlanetFTLU.svg'
import FTVC from '../images/PlanetFTVC.svg'
import FTVU from '../images/PlanetFTVU.svg'

export default function PersonalityCard(props) {
    const [contentShown, setContentShown] = useState(false)
    const planetDescStyle = {
        animation: "pCardInAnimation 0.4s ease-in-out",
        borderRadius: "17px 17px 0px 0px",
        height: "325px",
        borderBottomWidth: "0px",
    }

    const planetNoDescStyle = {
        animation: "pCardOutAnimation 0.4s ease-in-out",
        height: "300px",
        borderRadius: "17px",
    }

    const textMountedStyleLeft = {
        animation: "planetDescLeftInAnimation 0.4s ease-out",
        height: "120px",
        borderRadius: "0px 17px 17px 17px",
        color: "black",
        borderColor: "black",
        border: "2px solid rgba(0, 0, 0, 0.60)",
        background: "rgba(217, 217, 217, 0.30)",
        width: "825px",
        padding: "0 20px",
        lineHeight: "1",
    }

    const textMountedStyleRight = {
        animation: "planetDescRightInAnimation 0.4s ease-out",
        height: "120px",
        borderRadius: "17px 0px 17px 17px",
        color: "black",
        borderColor: "black",
        border: "2px solid rgba(0, 0, 0, 0.60)",
        background: "rgba(217, 217, 217, 0.30)",
        width: "825px",
        padding: "0 20px",
        position: "relative",
        right: "425px",
        lineHeight: "1",
    }

    const textUnmountedStyleLeft = {
        animation: "planetDescLeftOutAnimation 0.4s ease-out",
        // animationFillMode: "both",
        height: "0",
        color: "transparent",
        border: "none",
        overflow: "hidden"
    }

    const textUnmountedStyleRight = {
        animation: "planetDescRightOutAnimation 0.4s ease-out",
        // animationFillMode: "both",
        height: "0",
        color: "transparent",
        border: "none",
        overflow: "hidden"
    }

    const PlanetENVU = ENVU
    const PlanetENVC = ENVC
    const PlanetENLU = ENLC
    const PlanetENLC = ENLU
    const PlanetETVC = ETVC
    const PlanetETVU = ETVU
    const PlanetETLC = ETLC
    const PlanetETLU = ETLU
    const PlanetFNLC = FNLC
    const PlanetFNLU = FNLU
    const PlanetFNVC = FNVC
    const PlanetFNVU = FNVU
    const PlanetFTLC = FTLC
    const PlanetFTLU = FTLU
    const PlanetFTVC = FTVC
    const PlanetFTVU = FTVU

    return (
        <div>
            <div 
                className="personality--container"
                style={props.selected ? planetDescStyle : planetNoDescStyle}
                onClick={() => props.toggleDescState(props.id)}
                >
                    <img src={eval(`Planet${props.type}`)} alt={`Planet${props.type}`} className="planet--image"></img>
                    <div className="personality--type--div">
                        <h1>{props.type}</h1>
                        <h1 className="personality--type--shadow">{props.type}</h1>
                    </div>
            </div>
            <div 
                className="planet--desc--div"
                style={
                    props.selected ? 
                    (props.gridColumn === "left" ? textMountedStyleLeft : textMountedStyleRight)
                    : 
                    (props.gridColumn === "left" ? textUnmountedStyleLeft : textUnmountedStyleRight)
                }
                >
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}