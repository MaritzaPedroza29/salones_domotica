import { Col, Container, Row } from "react-bootstrap";
import { Navegacion } from "../layouts/navegacion";
import { Cardusuario } from "../componentes/usuarios/cardusuarios";
import { useState } from "react";
import { Botoncrear } from "../componentes/usuarios/Botoncrear";
import { ModalCrearUsuario } from "../componentes/usuarios/modalcrearusuario";


const Usuarios= ()=>{
  const [mostrarModal, setMostrarModal] = useState(false);
  const [usuarios, setUsuarios] = useState([
    {
      "usuario": "Usuario1",
      "data": {
        "id": 1,
        "imagen": "./img/profesora1.png",
        "nombre": "Jessica Rodriguez",
        "correo": "doc_js_rodriguez@fesc.edu.co",
        "estado": "1"
      }
    },
    {
      "usuario": "Usuario2",
      "data": {
        "id": 2,
        "imagen": "./img/profesor2.png",
        "nombre": "Sebastián Galindo",
        "correo": "doc_js_galindo@fesc.edu.co",
        "estado": "2"
      }
    },
    {
      "usuario": "Usuario3",
      "data": {
        "id": 3,
        "imagen": "./img/profesora3.png",
        "nombre": "Magda Martinez",
        "correo": "doc_mf_martinez@fesc.edu.co",
        "estado": "1"
      }
    },
    {
        "usuario": "Usuario4",
        "data": {
            "id": 4,
          "imagen":  "./img/profesor4.png",
          "nombre": "Rodolfo Ortega",
          "correo": "doc_jr_ortega@fesc.edu.co",
          "estado":"1"
        }
    },
    {
        "usuario": "Usuario5",
        "data": {
            "id": 5,
          "imagen": "./img/profesora6.png",
          "nombre": "Maria Fernandez",
          "correo": "est_mf_fernandez@fesc.edu.co",
          "estado": "2"
        }
      },
      {
        "usuario": "Usuario6",
        "data": {
            "id": 6,
          "imagen": "./img/profesor5.png",
          "nombre": "Darwin Cardozo",
          "correo": "doc_da_cardozo@fesc.edu.co",
          "estado":"2"
        }
      }
  ]);
            
    const agregarUsuario = (nuevoUsuario) => {
        setUsuarios([...usuarios, nuevoUsuario]);
      };
    
      const eliminarUsuario = (id) => {
        const index = usuarios.findIndex((usuario) => usuario.data.id === id);
        if (index !== -1) {
          const nuevosUsuarios = [...usuarios];
          nuevosUsuarios.splice(index, 1);
          setUsuarios(nuevosUsuarios);
        }
      };
      
      const actualizarUsuarios = (nuevosUsuarios) => {
        setUsuarios(nuevosUsuarios);
      };
      
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
            <ModalCrearUsuario mostrarModal={mostrarModal} cerrarModal={cerrarModal} agregarUsuario={agregarUsuario} usuarios={usuarios}/>
            <Row className="justify-content-md-center">
                    {usuarios.map(usuario => <Col sm="12" md="8" lg="6"><Cardusuario key={usuario.id} usuarios={usuario}  eliminarUsuario={eliminarUsuario} actualizarUsuarios={actualizarUsuarios} /></Col>)}
            </Row>
        </Container>
    </>     
)
}

export {Usuarios}