import React,{ useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Surveyform from './components/SurveyForm/Surveyform';
import Tribute from "./components/Tribute/Tribute";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>        
          <Route path="/tribute" element={<Tribute />} />
          <Route path="/surveyform" element={<Surveyform />} />
          <Route path="/parallax" element={<Parallax />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
