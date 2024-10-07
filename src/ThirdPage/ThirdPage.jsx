import { useNavigate } from 'react-router-dom';
import './ThirdPage.css'
import BlorgSpeaks from '../assets/blorgSpeaks.gif'
import Exo3 from '../assets/exoplanet3.gif'

const ThirdPage = () => {
    const navigate = useNavigate();
    return(
        <>
            <p className="thirdPageTitle">Exoplanets</p>
            <div className="thirdPageExplanation">
                <img src={BlorgSpeaks} alt="" />
                <p className="thirdPageText">
                So first of all, what are Exoplanets? <br /> Exoplanets are other planets that exist
                <br /> OUTSIDE of the “solar system” that you <br /> live in.</p>
            </div>
            <button onClick={() => navigate('/fourthPage')} className="next">Next</button>
            <img src={Exo3} alt="Planet 3" className="planetImage3" />
        </>
    );
}

export default ThirdPage;