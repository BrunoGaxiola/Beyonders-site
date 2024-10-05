import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import './App.css'
import StartPage from './StartPage/StartPage'
import ErrorPage from './ErrorPage/ErrorPage'
import FirstPage from './FirstPage/FirstPage'
import SecondPage from './SecondPage/SecondPage'

function App() {
/**/
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<StartPage />} />
        <Route path='/startPage' element= {<StartPage/>} />
        <Route path='*' element= {<ErrorPage/>} />
        <Route path='/firstPage' element= {<FirstPage/>} />
        <Route path='/secondPage' element= {<SecondPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
