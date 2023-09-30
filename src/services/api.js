import { GETUSER_GET_ENDPOINT } from "../connections/helpers/endpoints"
import axios from "axios"


export const getUser = async () => {
    try {
        axios.get(GETUSER_GET_ENDPOINT).then(respuesta=>{
            console.log(respuesta.data)
        })
    } catch {

    }
}