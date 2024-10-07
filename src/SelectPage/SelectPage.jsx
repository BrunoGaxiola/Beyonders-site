import { useNavigate } from 'react-router-dom';
import './SelectPage.css'
import Kepler11B from '../assets/kepler11spin.gif'
import Kepler22B from '../assets/keplerspin22b.gif'
import Toi1231B from '../assets/toi1231spin.gif'
import Psjr1 from '../assets/psjr1spin.gif'
import BlorgSpeaks from '../assets/blorgSpeaks.gif'

const SelectPage = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className="selectPageContainer">
            <div className="dialog">
                <img src={BlorgSpeaks} alt="" />
                <p className="choice">Please, tell me which type of <br /> exoplanet you want to explore!</p>
            </div>
            <div className="cards">
                <div onClick={() => navigate('/selectPage/terrestrial')} className="typeCard">
                    <div className="cardContent">
                        <img className='planet' src={Kepler11B} alt="" />
                        <p className="type">Terrestrial!</p>
                        <p> A type of exoplanet made of rock or metal, smaller than Earth, possibly with oceans or atmospheres.</p>
                    </div>
                </div>

                <div onClick={() => navigate('/selectPage/superEarth')} className="typeCard">
                    <div className="cardContent">
                        <img className='planet' src={Kepler22B} alt="" />
                        <p className="type">Super-Earth!</p>
                        <p>Super-Earth exoplanets are also rocky, but between Earth and Neptune in size.</p>
                    </div>
                </div>

                <div onClick={() => navigate('/selectPage/neptuneLike')} className="typeCard">
                    <div className="cardContent">
                        <img className='planet' src={Toi1231B} alt="" />
                        <p className="type">Neptune-Like!</p>
                        <p>This variety of exoplanet is similar in size to Uranus and Neptune, with an atmosphere of mostly hydrogen or helium.</p>
                    </div>
                </div>

                <div onClick={() => navigate('/selectPage/gasGiant')} className="typeCard">
                    <div className="cardContent">
                        <img className='planet' src={Psjr1} alt="" />
                        <p className="type">Gas Giant!</p>
                        <p>Gas Giant exoplanets are as massive as Saturn or Jupiter, or larger; this category also includes "hot Jupiters," which orbit close to their stars</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SelectPage;