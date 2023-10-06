import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';

function ModalCrearUsuario({ mostrarModal, cerrarModal, agregarUsuario, usuarios }) {
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    correo: "",
  });
  const agregarusuario = () => {
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

    agregarUsuario(nuevoUsuarioData);
    // Actualiza el estado para agregar el nuevo usuario
    setNuevoUsuario({
      nombre: "",
      correo: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarusuario();
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
          <Modal.Footer>
            <Button  type="submit" variant="success">Guardar</Button>
            <Button onClick={cerrarModal} variant='danger'>Cerrar</Button>
            {/* Otros botones o acciones */}
          </Modal.Footer>
        </Form>
      </Modal>
      );
}

export{ModalCrearUsuario}