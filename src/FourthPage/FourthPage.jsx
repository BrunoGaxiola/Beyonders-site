import './FourthPage.css';
import BlorgThinks from '../assets/blorgThinks.gif'
import Kepler11B from '../assets/kepler11spin.gif'
import { useNavigate } from 'react-router-dom';

const FourthPage =()=>{ 
    const navigate = useNavigate();
    return(
        <>
            <div className="startPageContainer">
                <div className="background">
                    <div className="allText">
                    <div className="otherImages">
                        <img src={BlorgThinks} className="otherImages" />
                        
                    
                        </div>
                    <div className="planetImages">
                        <img src={Kepler11B} alt="Planet 1" className="planetImage" />
                    </div>
                        <p className="desc">
                        I don't know if you know, but your planet "Earth" has <br /> other planets as its neighbors, some of them
                        are <br /> called "Mars", "Venus", "Jupiter" and such! "Where <br /> am I from?", you say? Maybe tell you after we're <br /> friends long enough. For now, lemme tak you to <br /> show you some exoplanets!
                        </p>
                        <button onClick={() => navigate('/selectPage')} className="start"> Next! </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FourthPage;