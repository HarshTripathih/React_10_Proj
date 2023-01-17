import React,{ useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Surveyform from './components/SurveyForm/Surveyform';
import Tribute from "./components/Tribute/Tribute";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Parallaxpage from "./components/Parallax/Parallaxpage";
import Restaurant from "./components/Restaurant/Restaurant";
import Event from "./components/EventConfrence/Event";
import Data from "./components/MusicPage/Data";
import ImageGallary from "./components/ImageGallary/ImageGallary";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
        <Route exact path="/" element={ <Home />} /> 
          <Route path="/restaurant" element={<Restaurant/>} />     
          <Route path="/tribute" element={<Tribute />} />
          <Route path="/surveyform" element={<Surveyform />} />
          <Route path="/parallax" element={<Parallaxpage/>} />
          <Route path="/event" element={<Event/>} /> 
          <Route path="/musicdata" element={<Data/>} /> 
          <Route path="/imgdata" element={<ImageGallary/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
