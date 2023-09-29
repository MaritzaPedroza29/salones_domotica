import React from 'react';
import miImagen from '../img/domotica.jpg';

function SplashScreen() {
  return (
    <div className="mio-splash-screen">
       <img
            src={miImagen}
            alt=""
            className='mio-imagen-centrada'
        />
    </div>
  );
}

export {SplashScreen};