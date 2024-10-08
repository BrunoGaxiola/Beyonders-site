import { useNavigate } from 'react-router-dom';
import './SecondPage.css'
import BlorgThinks from '../assets/blorgThinks.gif'
import Exo2 from '../assets/exoplanet2.gif'

const SecondPage = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className="secondPageContainer">
            <div className="dialog">
                <div className="text">
                    <p className="speech">It seems you are very far from your home. “Earth”, you call it? I always see it from afar. 
                But in the meantime, come with me. I want to show you some really cool stuff, called “Exoplanets”, doesn't that sound cool?</p>
                </div>
                <img className='mascot' src={BlorgThinks} alt="" />
            </div>
            <button className="next" onClick={() => navigate('/thirdPage')}> Next </button>
            <img src={Exo2} alt="Planet 2" className="planetImage2" />
        </div>
        </>
    );
}

export default SecondPage;