import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { Navegacion } from "../layouts/navegacion";
import { Cardusuario } from "../componentes/cardusuarios";
import {USUARIOS_GET_ENDPOINT} from "../connections/helpers/endpoints";
import axios from "axios";
import { useEffect, useState } from "react";
import { Botoncrear } from "../componentes/Botoncrear";
import { ModalCrearUsuario } from "../componentes/modalcrearusuario";

const Usuarios= ()=>{
    const [usuarios, setUsuarios] = useState([]);
    const [buscando, setBuscando] = useState(true);
    const [mostrarModal, setMostrarModal] = useState(false);

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

    const abrirModal = () => {
        setMostrarModal(true);
      };
    
      const cerrarModal = () => {
        setMostrarModal(false);
      };    



return(
    <>
        <Navegacion></Navegacion>
        <Container className="mt-3 mb-3">
        <h3 className="text-center">Usuarios</h3>
            <Botoncrear abrirModal={abrirModal} ></Botoncrear>
            <ModalCrearUsuario mostrarModal={mostrarModal} cerrarModal={cerrarModal}/>
            <Row className="justify-content-md-center">
                    {buscando ? "Cargando...":(usuarios.length ===0 && "No hay partidos disponibles")}
                    {usuarios.map(usuario => <Col sm="12" md="8" lg="6"><Cardusuario key={usuario.id} usuarios={usuario}/></Col>)}
            </Row>
        </Container>
    </>     
)
}

export {Usuarios}