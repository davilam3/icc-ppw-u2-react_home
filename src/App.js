import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acciones from './componentes/Acciones'; // relativo a App.js


function App() {
  return (
    <BrowserRouter basename="/icc-ppw-u2-react_home">
      <Routes>
        <Route path="/" element={<Acciones />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
