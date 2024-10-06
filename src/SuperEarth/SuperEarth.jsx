import './SuperEarth.css'
import { useNavigate } from "react-router-dom"
import Kepler22b from '../assets/keplerspin22b.gif'
import BlorgSpeaks from '../assets/BlorgSpeaks.gif'

const SuperEarth = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="pageContainer">
                {/* Row 1: Title */}
                <div className="row contentRow">

                    <button className="back" onClick={() => navigate('/selectPage')}> Back </button>
                    <p className="contentTitle">Kepler-22B</p>
                </div>

                {/* Row 2: Image and Paragraph */}
                <div className="row contentRow">
                    <img src={Kepler22b} alt="Left Image 1" className="contentImage" />
                    <ul className="contentText">
                        <li> Kepler-22B could be habitable.</li>
                        <li>It is an oceanic planet!</li>
                        <li>A normal day in this planet would have a temperature of -11°C/12.2°F.</li>
                        <li>It has 35 times the mass of the Earth, and a little more than twice its size.</li>

                    </ul>

                </div>

                {/* Row 3: Image and Paragraph */}
                <div className="row contentRow">
                    <img src={BlorgSpeaks} alt="Left Image 2" className="contentImageAlien" />
                    <p className="contentText">It is so far away, that we would actually need to travel 644 years at the speed of light to reach it.
                        It’s important to point out, that due to the amount of mass, it’s estimated that we would weight as twice as we do in earth!</p>
                </div>
            </div>

        </>
    );
}

export default SuperEarth;