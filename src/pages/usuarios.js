import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { Navegacion } from "../layouts/navegacion";
import { Cardusuario } from "../componentes/cardusuarios";
import {USUARIOS_GET_ENDPOINT} from "../connections/helpers/endpoints";
import axios from "axios";
import { useEffect, useState } from "react";
const Usuarios= ()=>{
    const [usuarios, setUsuarios] = useState([]);
    const [buscando, setBuscando] = useState(true);

    useEffect(()=>{
        axios.get(USUARIOS_GET_ENDPOINT)
        .then(respuesta=>{
            setUsuarios(respuesta.data);
            setBuscando(false);
        }).catch(e=>{
            console.error(e);
            setBuscando(false);
        })
    }, []);



return(
    <>
        <Navegacion></Navegacion>
        <Container className="mt-3 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    {buscando ? "Cargando...":(usuarios.length ===0 && "No hay partidos disponibles")}
                    {usuarios.map(usuario =><Cardusuario key={usuario.id} usuarios={usuario}/>)}
                </Col>
            </Row>
        </Container>
    </>     
)
}

export {Usuarios}