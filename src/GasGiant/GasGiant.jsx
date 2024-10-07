import './GasGiant.css'
import { useNavigate } from "react-router-dom"
import Psjr1 from '../assets/psjr1spin.gif'
import BlorgSpeaks from '../assets/blorgSpeaks.gif'

const GasGiant = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="pageContainer">
                <div className="row contentRow">

                    <button className="back" onClick={() => navigate('/SelectPage')}> Back </button>
                    <p className="contentTitle">PSR J1719-1438 b</p>
                </div>

                <div className="row contentRow">
                    <img src={Psjr1} alt="Left Image 1" className="contentImage" />
                    <ul className="contentText">
                        <li>PSR J1719-1438 B is a planet similar to jupiter.</li>
                        <li>Its surface is like a giant dense cloud!</li>
                        <li>The temperature is too high to have life on it.</li>
                        
                    </ul>



                </div>

                <div className="row contentRow">
                    <img src={BlorgSpeaks} alt="Left Image 2" className="contentImageAlien" />
                    <p className="contentText">
                    This planet is too close to its star, making it impossible to have life on it. PSR has a mass  of 1.2 Jupiters. It is a very lonely planet. The only nearby body is its star, named “PSR J1719-1438”.  It takes 0.1 days to complete one orbit of its star.
                    </p>
                </div>
            </div>

        </>
    );
}

export default GasGiant;