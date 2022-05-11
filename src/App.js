import React from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' 
              element={<React.Fragment>
                        <Header/>
                        <Slider/> 
                        <Welcome/>
                      </React.Fragment>}/>

      </Routes>
      
    </div>
  );
}

export default App;
