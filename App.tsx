import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [contador, setContador] = useState(0);
  const [ahora, setAhora] = useState(new Date(Date.now()).toUTCString());
  console.log(ahora)
  return (
    <div>
      <p>Cliqueaste {contador} veces</p>
      <p>El último clic fue el: {ahora}</p>
      <button
        onClick={() => {
          setContador(contador + 1);
          setAhora(new Date(Date.now()).toUTCString());
        }}
      >
        Cliqueame
      </button>
    </div>
  );
}
