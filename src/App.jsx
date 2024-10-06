import { BrowserRouter, Routes, Route } from "react-router-dom";
//import './App.css'
import StartPage from "./StartPage/StartPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import FourthPage from "./FourthPage/FourthPage";
import SelectPage from "./SelectPage/SelectPage";
import Terrestrial from "./Terrestrial/Terrestrial";
import SuperEarth from "./SuperEarth/SuperEarth";
import NeptuneLike from "./NeptuneLike/NeptuneLike";
import GasGiant from "./GasGiant/GasGiant";

function App() {
  /**/
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<StartPage />} />
          <Route path="/startPage" element={<StartPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/firstPage" element={<FirstPage />} />
          <Route path="/secondPage" element={<SecondPage />} />
          <Route path="/thirdPage" element={<ThirdPage />} />
          <Route path="/fourthPage" element={<FourthPage />} />
          <Route path="/selectPage" element={<SelectPage />} />
          <Route path="/selectPage/terrestrial" element={<Terrestrial />} />
          <Route path="/selectPage/superEarth" element={<SuperEarth />} />
          <Route path="/selectPage/neptuneLike" element={<NeptuneLike />} />
          <Route path="/selectPage/gasGiant" element={<GasGiant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;