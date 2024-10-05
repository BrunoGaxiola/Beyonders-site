import { useNavigate } from 'react-router-dom';
import './SelectPage.css'
import Planet from '../assets/Ellipse 1.jpg'

const SelectPage = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className="selectPageContainer">
            <p className="choice">Please, tell me which tyoe of exoplanet you want to see!</p>
            <div className="cards">
                <div className="typeCard">
                    <div className="cardContent">
                        <img className='planet' src={Planet} alt="" />
                        <p className="type">Terrestrial!</p>
                    </div>
                </div>

                <div className="typeCard">
                    <div className="cardContent">
                        <img className='planet' src="../assets/Ellipse 1.jpg" alt="" />
                        <p className="type">Super-Earth!</p>
                    </div>
                </div>

                <div className="typeCard">
                    <div className="cardContent">
                        <img className='planet' src="../assets/Ellipse 1.jpg" alt="" />
                        <p className="type">Naptune-Like!</p>
                    </div>
                </div>

                <div className="typeCard">
                    <div className="cardContent">
                        <img className='planet' src="../assets/Ellipse 1.jpg" alt="" />
                        <p className="type">Gas Giant!</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SelectPage;