import { useNavigate } from 'react-router-dom';
import './SecondPage.css'

const SecondPage = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className="secondPageContainer">
            <p className="dialog">It seems you are very far from your home. “Earth”, you call it? I always see it from afar. 
                But in the meantime, come with me. I want to show you some really cool stuff, called “Exoplanets”, doesn't that sound cool?</p>
            <div className="mascot">aaaaaaaaaaaa</div>
        </div>
        <button className="next" onClick={() => navigate('/thirdPage')}> Next </button>
        </>
    );
}

export default SecondPage;