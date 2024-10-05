import { Navigate, useNavigate } from 'react-router-dom';
import './FirstPage.css'

const FirstPage = () => {
    const navigate = useNavigate();
    return(
        <>
            <div className="firstPageContainer">
                <div className="mascot">

                </div>
                <p className="dialog">
                HEY!! I haven't seen you around here before! Glad to know you though! My name is Blorg. I'll kinda be your friendly
                intergalactic neighbor. Is that okay with you?</p>
                <button className="next" onClick={() => navigate('/secondPage')}> Next </button>
            </div>
        </>
    );
}

export default FirstPage;