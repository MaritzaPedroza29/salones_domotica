import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Signin } from '../pages/signin';
import {Signup} from '../pages/signup';
import { SplashScreen } from '../componentes/splashscreen';
import { Provider } from 'react-redux';
import { store } from '../states/store';
import { Inicio } from '../pages/inicio';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/inicio' element={<Inicio/>}></Route>
          <Route path='/' element={<Signin/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/pagina-principal' element={<SplashScreen/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
