import { Navigate, useNavigate } from "react-router-dom";
import "./StartPage.css"

const StartPage = () => {

    const navigate = useNavigate();
    return(
        <>
            <div className="startPageContainer">
                <div className="background">
                    <div className="allText">
                        <p className="title"> Beyonders </p>
                        <p className="descStartPage"> Hey! Who are you? </p>
                        <button className="start" onClick={() => navigate('/firstPage')}> Let's Get Started! </button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default StartPage;