import { useNavigate } from 'react-router-dom';
import './ThirdPage.css'
import BlorgSpeaks from '../assets/BlorgSpeaks.gif'

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
        </>
    );

}

export default ThirdPage;