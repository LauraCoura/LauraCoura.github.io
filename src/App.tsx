import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import Portfolio from './Portfolio';
import Projects from './Projects';

// TODO: Make the layout responsive to allow a better use in mobile...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
