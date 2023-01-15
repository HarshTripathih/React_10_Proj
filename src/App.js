import React,{ useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Surveyform from './components/SurveyForm/Surveyform';
import Tribute from "./components/Tribute/Tribute";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Parallaxpage from "./components/Parallax/Parallaxpage";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home />} />    
          <Route path="/tribute" element={<Tribute />} />
          <Route path="/surveyform" element={<Surveyform />} />
          <Route path="/parallax" element={<Parallaxpage/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
