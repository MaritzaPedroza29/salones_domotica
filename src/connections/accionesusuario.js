import axios from "axios"
import { SIGNIN_POST_ENDPOINT } from "./helpers/endpoints"
import { setAutenticacionToken } from "./helpers/token";
import jwt_decode from 'jwt-decode'
import { usuario } from "../states/sliceReducers";

export const autenticacion = (datos)=>dispatch=>{
    return new Promise((resolver, rechazar)=>{

        axios.get(SIGNIN_POST_ENDPOINT, datos,
            {headers:{'Accept':'application/json','Content-Type':'application/json'}
        }).then(respuesta=>{
            console.log(respuesta.headers);
            const {authorization} = respuesta.headers;
            console.log(authorization);

            localStorage.setItem('token', authorization);

            setAutenticacionToken(authorization);

            const decodificado= jwt_decode(authorization);

            dispatch(usuario({conectado:true, usuario:decodificado}))
            console.log(respuesta);

            resolver(respuesta);
        }).catch(err=>{
            rechazar(err);
        })
    })
}