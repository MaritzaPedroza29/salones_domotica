import axios from "axios";
import jwt_decode from "jwt-decode"
import { store } from "../../states/store";
import { usuario } from "../../states/sliceReducers";

export const setAutenticacionToken= (token)=>{
    console.log("llama a esta función");
    if(token){
        console.log("entra en el si");
        axios.defaults.headers.common["Authorization"]=token;
    }else{
        console.log("entra en el else");
        delete axios.defaults.headers.common["Authorization"];
    }
}

export const getAutenticacionToken=()=>{
    if(localStorage.token){
        console.log(localStorage);
        setAutenticacionToken(localStorage.token);
        const decodificado = jwt_decode(localStorage.token);
        store.dispatch(usuario({usuario:decodificado, conectado:true}))
        const tiempoActual= Math.floor(Date.now()/1000);
        if(decodificado.exp < tiempoActual){
            window.location.href="/";
        }
    }
}