import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Modaldetalleusuario(props){
    const { show, handleClose, userData, agregarUsuario} = props;
    const [disabled, setDisabled] = useState(true);
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [nuevoCorreo, setNuevoCorreo] = useState("");

    console.log(userData);

    let correo = ''; // Declarar correo fuera del bloque if
    let nombre = ''; // Declarar nombre fuera del bloque if
    let usuario = '';
    let idusuario = '';
    let imagen = '';
    if (userData && userData.data) {
        // Accede a userData.data aquí
        correo = userData.data.correo;
        nombre = userData.data.nombre;
        usuario = userData.usuario;
        idusuario = userData.data.id;
        imagen = userData.data.imagen;
        console.log(imagen);
        // ...
      } else {
        // Maneja el caso en que userData o userData.data sea nulo
        console.error('userData es null o no tiene la propiedad data');
        // Puedes tomar medidas adecuadas aquí, como mostrar un mensaje de error o realizar alguna otra acción necesaria.
      }

      const handleGuardarClick = () => {
        if (!nuevoNombre.trim() || !nuevoCorreo.trim()) {
          return;
        }
    
        // Genera un nuevo usuario con los datos proporcionados
        const nuevoUsuarioData = {
          usuario: usuario,
          data: {
            id: idusuario,
            imagen: imagen,
            nombre: nuevoNombre,
            correo: nuevoCorreo,
          },
        };
        console.log(nuevoUsuarioData);
        agregarUsuario(nuevoUsuarioData);
        // Actualiza el estado para agregar el nuevo usuario
        setNuevoNombre({
          nombre: "",
        });
        setNuevoCorreo({correo:""});
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        handleGuardarClick();
      };

    return (
        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Detalle usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="Ingrese el nombre"
                  value={disabled ? nombre : nuevoNombre} // Utiliza el valor de nombre aquí
                  onChange={(e) => setNuevoNombre(e.target.value)}
                  onClick={() => setDisabled(false)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo"
                  value={disabled ? correo : nuevoCorreo} // Utiliza el valor de nombre aquí
                  onChange={(e) => setNuevoCorreo(e.target.value)}
                  onClick={() => setDisabled(false)}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button  type="submit" variant="success">Guardar</Button>
              {/* Otros botones o acciones */}
            </Modal.Footer>
          </Form>
        </Modal>
        );
}
export {Modaldetalleusuario}