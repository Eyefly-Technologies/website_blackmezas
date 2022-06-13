import { BrowserRouter as Route, Routes, HashRouter } from "react-router-dom";
import React, { useEffect } from 'react';
import SnackbarProvider from 'react-simple-snackbar'
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
        <Route exact path="/contactanos" element={<SnackbarProvider><Contactanos /></SnackbarProvider>} />
      </Routes>
    </HashRouter>
    
  );
}

export default App;
