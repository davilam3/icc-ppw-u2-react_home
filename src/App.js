import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Acciones from './componentes/Acciones.tsx';

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