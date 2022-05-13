import React from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import Welcome from './Components/Welcome/Welcome';
import Place from './Components/Place/Place';
import Endow from './Components/Endow/Endow';
import Suggestions from './Components/Suggestions/Suggestions';
import Footer from './Components/Footer/Footer';

function App() {
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
                      </React.Fragment>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
