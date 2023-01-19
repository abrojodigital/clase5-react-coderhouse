import * as React from 'react';
import {useState} from 'react';
import './style.css';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
      <div>
        <p>Cliqueaste {contador} veces</p>
        <p>La  {contador} veces</p>
        <button onClick={() => setContador(contador + 1)}>Cliqueame</button>
      </div>
    );
}
