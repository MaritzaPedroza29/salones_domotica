import GETUSER_GET_ENDPOINT from "../apiData/cardusuarios.json";
import axios from "axios"



export const Getuser = async (usuario, clave) => {
    const correo = "Maritza";
    const password = "password123";
  
    try {
      let response;
      
      if (usuario === correo && clave === password) {
        console.log("entra en el if del si");
        response = await axios.get(GETUSER_GET_ENDPOINT);
      } else {
        console.log("entra en el if del else");
      }
  
      console.log(response.data);
      return response;
    } catch (error) {
      console.error(error);
      // Puedes manejar errores aquí si es necesario.
    }
  };

