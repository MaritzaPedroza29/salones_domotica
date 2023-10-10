import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Modalcrearsalon ({mostrarModal, cerrarModal, salones, agregarSalon}){
    const [nuevoSalon, setNuevoSalon] = useState({
        nombre: "",
        aire_acondicionado: "",
        televisor: "",
        puerta: "",
        bloque: "",
      });
        console.log(salones);
    const agregarsalon = () => {
        if (!nuevoSalon.nombre.trim() || !nuevoSalon.aire_acondicionado.trim() || !nuevoSalon.televisor.trim() || !nuevoSalon.puerta.trim()){
        return;
        }

        // Genera un nuevo usuario con los datos proporcionados
        const nuevoUsuarioData = {
        bloque: nuevoSalon.bloque,
        data: {
            id: salones.length + 1,
            salones: [{
               id:salones.length+1,
                nombresalon: nuevoSalon.nombre,
                dispositivos:"3 dispositivos",
                aire_acondicionado:nuevoSalon.aire_acondicionado,
                televisor:nuevoSalon.televisor,
                puerta: nuevoSalon.puerta,
            }],
        },
        };
        console.log(nuevoUsuarioData);
        agregarSalon(nuevoUsuarioData);
        // Actualiza el estado para agregar el nuevo usuario
        setNuevoSalon({
            aire_acondicionado: "",
            televisor: "",
            puerta: "",
            bloque: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        agregarsalon();
    };
return(
    <Modal show={mostrarModal} onHide={cerrarModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Crear Salón</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingrese nombre del salón</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Ingrese el nombre del salón"
                value={nuevoSalon.nombre}
                onChange={(e) =>
                    setNuevoSalon({ ...nuevoSalon, nombre: e.target.value })
                  }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Seleccioneel bloque</Form.Label>
              <Form.Select aria-label="Default select example">
                    <option value="1">{salones[0].bloque}</option>
                    <option value="2">{salones[1].bloque}</option>
                    <option value="3">{salones[2].bloque}</option>
                </Form.Select>
            </Form.Group>
            <Form.Label>Seleccione los dispositivos que desea vincular</Form.Label>
            <ListGroup>
                <ListGroup.Item>
                    <Form.Check aria-label="option 1" label="aire acondicionado A106"/>
                    <img
                        src={salones[0].data.salones[0].aire_acondicionado}
                        alt=""
                        className='mio-iconos'
                    />
                </ListGroup.Item>
                <ListGroup.Item><Form.Check aria-label="option 2" label="televisor A106"/>
                <img
                    src={salones[0].data.salones[0].televisor}
                    alt=""
                    className='mio-iconos'
                />
                </ListGroup.Item>
                <ListGroup.Item><Form.Check aria-label="option 3" label="puerta A106"/>
                <img
                    src={salones[0].data.salones[0].puerta}
                    alt=""
                    className='mio-iconos'
                />
                </ListGroup.Item>
            </ListGroup>      
          </Modal.Body>
          <Modal.Footer>
            <Button  type="submit" variant="success">Guardar</Button>
            <Button onClick={cerrarModal} variant='danger'>Cerrar</Button>
          </Modal.Footer>
        </Form>
</Modal>
)
}
export{Modalcrearsalon};