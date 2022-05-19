import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import './styles.css';

import Home from '../Home';
import Ubicaciones from '../Ubicaciones';
import Contactanos from '../Contactanos';
import Asociarse from '../Asociarse';
import Nosotros from '../Nosotros';

function App() {
  useEffect(() => {
    document.title = "BlackMezas"
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/asociarse" element={<Asociarse />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>
    </Router>
  );
}

export default App;
