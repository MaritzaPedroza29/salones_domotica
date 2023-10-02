import {LOGIN_POST_ENDPOINT} from "../connections/helpers/endpoints"
import { GETUSER_GET_ENDPOINT } from "../connections/helpers/endpoints";
import axios from "axios"



export const Getuser = async (usuario, clave) => {
    const correo = "Maritza";
    const password = "123cuatro";
  
    try {
      let response;
      
      if (usuario === correo && clave === password) {
        response = await axios.get(GETUSER_GET_ENDPOINT);
      } else {
        response = await axios.get(LOGIN_POST_ENDPOINT);
      }
  
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      // Puedes manejar errores aquí si es necesario.
    }
  };

