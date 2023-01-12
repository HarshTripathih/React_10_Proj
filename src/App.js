import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Tribute from './components/Tribute';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>        
          <Route path="/tribute" element={<Tribute />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
