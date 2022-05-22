import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
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
    <HashRouter>
      <Routes basename="/">
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nosotros" element={<Nosotros />} />
        <Route exact path="/asociarse" element={<Asociarse />} />
        <Route exact path="/ubicaciones" element={<Ubicaciones />} />
        <Route exact path="/contactanos" element={<Contactanos />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
