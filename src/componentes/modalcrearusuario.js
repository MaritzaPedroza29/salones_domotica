import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
/*import { USUARIOS_GET_ENDPOINT } from '../connections/helpers/endpoints';
import { USUARIO_POST_ENDPOINT } from '../connections/helpers/endpoints';*/
import axios from 'axios'; 

function ModalCrearUsuario({ mostrarModal, cerrarModal }) {
      const [usuarios, setUsuarios] = useState([]);
      const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: "",
        correo: "",
      });

      useEffect(() => {
        // Carga el JSON al montar el componente
        /*axios.get(USUARIOS_GET_ENDPOINT).then((response) => {
          setUsuarios(response.data);
        });*/
      }, []);

      const agregarUsuario = () => {
        if (!nuevoUsuario.nombre.trim() || !nuevoUsuario.correo.trim()) {
          return;
        }

      // Genera un nuevo usuario con los datos proporcionados
      const nuevoUsuarioData = {
        usuario: "Usuario" + (usuarios.length + 1),
        data: {
          id: usuarios.length + 1,
          imagen: "./img/user.png",
          nombre: nuevoUsuario.nombre,
          correo: nuevoUsuario.correo,
          },
      };
      console.log(nuevoUsuarioData);
      // Actualiza el estado para agregar el nuevo usuario
      setUsuarios([...usuarios, nuevoUsuarioData]);
      
      // Limpia los campos de nuevoUsuario
      setNuevoUsuario({ nombre: '', correo: '' });

      guardarUsuariosEnServidor([...usuarios, nuevoUsuarioData]);
    };
    const guardarUsuariosEnServidor = (usuariosActualizados) => {
      // Convierte la matriz de usuarios a una cadena JSON
      const usuariosJSON = JSON.stringify(usuariosActualizados);
      console.log(usuariosJSON);
  
      // En este punto, deberías enviar la cadena JSON al servidor
      // para que se actualice el archivo JSON o realizar la lógica
      // necesaria para guardar los datos en el servidor.
  
      // Ejemplo de envío al servidor utilizando una solicitud POST con Axios:
      /*axios.post(USUARIO_POST_ENDPOINT, { usuarios: usuariosJSON })
        .then((response) => {
          console.log('Usuarios guardados con éxito en el servidor');
        })
        .catch((error) => {
          console.error('Error al guardar usuarios en el servidor:', error);
        });*/
    };
      const handleSubmit = (e) => {
        e.preventDefault();
        agregarUsuario();
      };
    return (
      <Modal show={mostrarModal} onHide={cerrarModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Crear usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Ingrese el nombre"
                value={nuevoUsuario.nombre}
                onChange={(e) =>
                  setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo"
                value={nuevoUsuario.correo}
                onChange={(e) =>
                  setNuevoUsuario({ ...nuevoUsuario, correo: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className='mio-botones'>
            <Button type="submit" className=''>Guardar</Button>
            <Button onClick={cerrarModal} className=''>Cerrar</Button>
            {/* Otros botones o acciones */}
          </Modal.Footer>
        </Form>
      </Modal>
      );
}

export{ModalCrearUsuario}