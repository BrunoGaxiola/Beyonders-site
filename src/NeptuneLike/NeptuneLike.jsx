import './NeptuneLike.css'
import { useNavigate } from "react-router-dom"
import toi1231b from '../assets/toi1231spin.gif'
import BlorgSpeaks from '../assets/blorgSpeaks.gif'

const NeptuneLike = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="pageContainer">
                <div className="row contentRow">

                    <button className="back" onClick={() => navigate('/SelectPage')}> Back </button>
                    <p className="contentTitle">Kepler-22B</p>
                </div>

                <div className="row contentRow">
                    <img src={toi1231b} alt="Left Image 1" className="contentImage" />
                    <ul className="contentText">
                        <li> TOI-1231 could be habitable due to its similar temperature to earth.</li>
                        <li>It has water steam in its atmosphere.</li>
                        <li>A year on this planet would last only 24 days!</li>
                        <li>TOI-1231 B has 15.4 times the mass of earth and 3.73 times its radius.</li>
                    </ul>

                </div>

                <div className="row contentRow">
                    <img src={BlorgSpeaks} alt="Left Image 2" className="contentImageAlien" />
                    <p className="contentText">
                        TOI is close to its sun, a year there would last about 24 Earth days, but that doesn’t discard it as an habitable exoplanet. In fact, it has been observed that thanks to the steam water within its atmosphere, life could be possible.
                    </p>
                </div>
            </div>

        </>
    );
}

export default NeptuneLike;