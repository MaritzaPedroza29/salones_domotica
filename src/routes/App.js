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
import { Usuarios } from '../pages/usuarios';
import { getAutenticacionToken } from '../connections/helpers/token';

getAutenticacionToken()
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/pagina-principal' element={<Inicio/>}></Route>
          <Route path='/usuarios' element={<Usuarios/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
