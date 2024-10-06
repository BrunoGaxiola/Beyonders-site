import './Terrestrial.css'
import {useNavigate} from "react-router-dom"
import Kepler11b from '../assets/kepler11spin.gif'
import BlorgSpeaks from '../assets/BlorgSpeaks.gif'

const Terrestrial = () => {
    const navigate=useNavigate();
    return (
        <>
            <div className="pageContainer">
                {/* Row 1: Title */}
                <div className="row contentRow">

                <button className="back" onClick={() => navigate('/SelectPage')}> Back </button>
                    <p className="contentTitle">KEPLER-11B</p>
                </div>

                {/* Row 2: Image and Paragraph */}
                <div className="row contentRow">
                    <img src={Kepler11b} alt="Left Image 1" className="contentImage" />
                    <ul className="contentText">
                        <li>A very warm and rocky planet.</li>
                        <li>It's 10 times closer to its star than Earth is to the sun!</li>
                        <li>The temperature is incredibly high!</li>
                        <li>It is 1.8 times the size of the Earth.</li>
                    </ul>

                </div>

                {/* Row 3: Image and Paragraph */}
                <div className="row contentRow">
                    <img src={BlorgSpeaks} alt="Left Image 2" className="contentImageAlien" />
                    <p className="contentText">Kepler-11 b was discovered by the transit method, which means that the exoplanet was observed while overlapping it with its star.
                        The name of the planet comes after a famous astronomer, Johannes Kepler, and it is the second planet in the Kepler-11 system. A normal day in this planet the temperature would be at 620°C/1160°F.</p>
                </div>
            </div>
         
        </>
    );
}

export default Terrestrial;