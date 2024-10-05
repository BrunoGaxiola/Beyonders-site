import { useNavigate } from "react-router-dom";
import "./ThirdPage.css";

const ThirdPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="thirdPageContainer">
        <p className="title">Exoplanets</p>

        <div className="contentContainer">
            <div className="mascot">MASCOT</div>
            <p className="dialog">
            So first of all, what are Exoplanets? 
            Exoplanets are other planets that exist 
            OUTSIDE of the “solar system” that you 
            live in.
            </p>
        </div>
        
      </div>

        <button className="next" onClick={() => navigate('/fourthPage')}> Next </button>
    </>
  );
};

export default ThirdPage;
