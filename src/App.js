import React from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import Welcome from './Components/Welcome/Welcome';
import Place from './Components/Place/Place';

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
                      </React.Fragment>}/>
      </Routes>
      
    </div>
  );
}

export default App;
