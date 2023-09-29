import React from 'react';
import '../css/index.css';
import { Cuadrado } from './cuadradoinicio';

function Rectangulo() {
  return (
    <div className="mio-rectangle">
      <div className='mio-rectangle-piso'>
        <Cuadrado></Cuadrado>
      </div>
    </div>
  )
}

export {Rectangulo};