import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Signin } from '../pages/signin';
import {Signup} from '../pages/signup';
import { Provider } from 'react-redux';
import { store } from '../states/store';
import { Inicio } from '../pages/inicio';
import { Usuarios } from '../pages/usuarios';
import { Salones } from '../pages/salones';
import { getAutenticacionToken } from '../connections/helpers/token';
import { Dispositivos } from '../pages/dispositivos';

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
          <Route path='/salones' element={<Salones/>}></Route>
          <Route path='/dispositivos' element={<Dispositivos/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
