import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Modalcrearsalon ({mostrarModal, cerrarModal, salones, agregarSalon}){
    const [nuevoSalon, setNuevoSalon] = useState({
        nombre: "",
        aire_acondicionado: false,
        televisor: false,
        puerta: false,
        bloque: "1",
    });
        console.log(salones);

        const agregarsalon = () => {
            if (!nuevoSalon.nombre.trim() || (!nuevoSalon.aire_acondicionado && !nuevoSalon.televisor && !nuevoSalon.puerta)) {
              return;
            }
          
            let aireacondicionado = false;
            let televisor = false;
            let puerta = false;
          
            if (nuevoSalon.aire_acondicionado) {
              aireacondicionado = salones[0].data.salones[0].aire_acondicionado;
            }
            if (nuevoSalon.televisor) {
              televisor = salones[0].data.salones[0].televisor;
            }
            if (nuevoSalon.puerta) {
              puerta = salones[0].data.salones[0].puerta;
            }
          
            const bloqueIndex = salones.findIndex((salon) => salon.bloque === nuevoSalon.bloque);
          
            if (bloqueIndex !== -1) {
              const nuevosSalones = [...salones];
              
              // Calcula el nuevo ID basado en la longitud de la lista de salones
              const nuevoID = nuevosSalones[bloqueIndex].data.salones.length + 1;
              
              // Genera un nuevo salón con el nuevo ID
              const nuevoSalonData = {
                id: nuevoID,
                nombresalon: nuevoSalon.nombre,
                dispositivos: "3 dispositivos",
                aire_acondicionado:aireacondicionado,
                televisor:televisor,
                puerta:puerta,
              };
          
              nuevosSalones[bloqueIndex].data.salones.push(nuevoSalonData);
              
              // Actualiza el estado con los nuevos salones
              setNuevoSalon(nuevosSalones);
              agregarSalon(nuevosSalones);
              // Restablece el estado para agregar el nuevo salón
              setNuevoSalon({
                nombre: "",
                aire_acondicionado: false,
                televisor: false,
                puerta: false,
                bloque: "1",
              });
            }
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
              <Form.Select aria-label="Default select example" value={nuevoSalon.bloque} onChange={(e)=>
                setNuevoSalon({...nuevoSalon, bloque: e.target.value })
                }>
                    <option value={salones[0].bloque}>{salones[0].bloque}</option>
                    <option value={salones[1].bloque}>{salones[1].bloque}</option>
                    <option value={salones[2].bloque}>{salones[2].bloque}</option>
                </Form.Select>
            </Form.Group>
            <Form.Label>Seleccione los dispositivos que desea vincular</Form.Label>
            <ListGroup>
                <ListGroup.Item>
                    <Form.Check aria-label="option 1" label="aire acondicionado A106" checked={nuevoSalon.aire_acondicionado} onChange={(e)=>
                        setNuevoSalon({...nuevoSalon, aire_acondicionado:e.target.value})
                    }/>
                    <img
                        src={salones[0].data.salones[0].aire_acondicionado}
                        alt=""
                        className='mio-iconos'
                    />
                </ListGroup.Item>
                <ListGroup.Item><Form.Check aria-label="option 2" label="televisor A106" checked={nuevoSalon.televisor} onChange={(e)=>
                        setNuevoSalon({...nuevoSalon, televisor:e.target.value})
                    }/>
                <img
                    src={salones[0].data.salones[0].televisor}
                    alt=""
                    className='mio-iconos'
                />
                </ListGroup.Item>
                <ListGroup.Item><Form.Check aria-label="option 3" label="puerta A106" checked={nuevoSalon.puerta} onChange={(e)=>
                        setNuevoSalon({...nuevoSalon, puerta:e.target.value})
                    }/>
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