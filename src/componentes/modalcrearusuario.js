import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import { USUARIOS_GET_ENDPOINT } from '../connections/helpers/endpoints';
import axios from 'axios'; 

function ModalCrearUsuario({ mostrarModal, cerrarModal }) {
    const [usuarios, setUsuarios] = useState([]);
    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: "",
        correo: "",
      });
    useEffect(() => {
        // Carga el JSON al montar el componente
        axios.get(USUARIOS_GET_ENDPOINT).then((response) => {
          setUsuarios(response.data);
        });
      }, []);
      const agregarUsuario = (nuevoUsuarioData) => {
        // Genera un nuevo usuario con los datos proporcionados
        const nuevoUsuario = {
          id: usuarios.length + 1,
          nombre: nuevoUsuario.nombre,
          correo: nuevoUsuario.correo,
          usuario: "Usuario"+usuarios.length+1,
            data: {
                id: usuarios.length + 1,
                imagen: "./img/user.png",
                nombre: nuevoUsuario.nombre ,
                correo: nuevoUsuario.correo
            }
        };
        console.log(nuevoUsuario);
        // Actualiza el estado para agregar el nuevo usuario
        setUsuarios([...usuarios, nuevoUsuario]);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!nuevoUsuario.nombre.trim() || !nuevoUsuario.correo.trim()) {
          return;
        }
      
        agregarUsuario(nuevoUsuario);
        setNuevoUsuario({ nombre: '', correo: '' });
      };
    return (
        <Modal show={mostrarModal} onHide={cerrarModal}>
          <Modal.Header closeButton>
            <Modal.Title>Crear usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="Text" placeholder="Ingrese el nombre" 
                    value={nuevoUsuario.nombre}
                    onChange={(e) =>
                    setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su correo"
                      value={nuevoUsuario.correo}
                      onChange={(e) =>
                      setNuevoUsuario({ ...nuevoUsuario, correo: e.target.value })
                  }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" />
                </Form.Group>
                </Form>
          </Modal.Body>
          <Modal.Footer className='mio-botones'>
            <Button type="submit" className=''>Guardar</Button>
            <Button onClick={cerrarModal} className=''>Cerrar</Button>
            {/* Otros botones o acciones */}
          </Modal.Footer>
        </Modal>
      );
}

export{ModalCrearUsuario}