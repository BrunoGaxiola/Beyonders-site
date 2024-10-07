import { Navigate, useNavigate } from 'react-router-dom';
import './FirstPage.css'
import BlorgSaysHi from '../assets/blorgSaysHi.gif'
import Exo1 from '../assets/exoplanet1.gif'

const FirstPage = () => {
    const navigate = useNavigate();
    return(
        <>
            <div className="firstPageContainer">
                <div className="planetImages1">
                    <img src={Exo1} alt="Planet 1" className="planetImage1" />
                </div>
                <img src={BlorgSaysHi} alt="" />
                <p className="dialog">
                HEY!! I haven't seen you around here before! Glad to know you though! My name is Blorg. I'll kinda be your friendly
                intergalactic neighbor. Is that okay with you?</p>
                <button className="next" onClick={() => navigate('/secondPage')}> Next </button>
            </div>
        </>
    );
}

export default FirstPage;