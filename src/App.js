import React, { useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'

import './App.css';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import Welcome from './Components/Welcome/Welcome';
import Place from './Components/Place/Place';
import Endow from './Components/Endow/Endow';
import Suggestions from './Components/Suggestions/Suggestions';
import Footer from './Components/Footer/Footer';
import Tutorial from './Components/Tutorial/Tutorial';

function App() {

  const navigate = useNavigate()
  
  useEffect(() => {
    if(window.location.pathname === "/") {
      console.log(window.location.pathname)
      navigate("/vi")
    }
  }, [navigate])

  return (
    <div className="App">
      <Routes>
        <Route path='/vi' 
              element={<React.Fragment>
                        <Header/>
                        <Slider/> 
                        <Welcome/>
                        <Place/>
                        <Endow/>
                        <Suggestions/>
                        <Tutorial/>
                      </React.Fragment>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
