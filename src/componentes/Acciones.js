import React, { useState, useEffect } from 'react';

function Acciones() {
  // Contadores con tipos explícitos
  const [autoCounter, setAutoCounter] = useState(0);
  const [manualCounter, setManualCounter] = useState(0);

  // Contador automático
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Incrementar / Restar
  const changeValue = (value) => {
    setAutoCounter((current) => current + value);
    setManualCounter((current) => current + value);
  };

  // Reset
  const resetValue = () => {
    setAutoCounter(0);
    setManualCounter(0);
  };

 return (
    <div className="contador">
      <h1>HOME PAGE</h1>
      <h2>Fundamentos</h2>
      <p>Sebastian Cabrera, Diana Avila</p>

      <h2>Contador automático: {autoCounter}</h2>
      <h2>Contador manual: {manualCounter}</h2>

      <div className="botones">
        <button onClick={() => changeValue(1)}>Incrementar</button>
        <button onClick={() => changeValue(-1)}>Restar</button>
        <button onClick={resetValue}>Reseteo</button>
      </div>
    </div>
  );
}

export default Acciones;
