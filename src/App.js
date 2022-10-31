import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextUtil from './components/TextUtil';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "black";
      // document.body.style.color="white";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      // document.body.style.color="black";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text Helper" mode={mode} toggleMode={toggleMode} aboutUs="About Us" />
        <div className='container my-5'>
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route path="/" element={<TextUtil heading="Enter your text here" mode={mode} />} />

          </Routes>

        </div>
      </Router>
    </>

  );
}

export default App;
