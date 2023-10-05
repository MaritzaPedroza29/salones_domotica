import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';


const Cardusuario= ({usuarios})=>{
    console.log(usuarios);
    return(
        <Card className="mt-3 mb-3 mio-contenedor">
            <Card.Body>
                <img
                    src={usuarios.data.imagen}
                    alt=""
                    className='mio-cardimagen'
                />
                <Card.Title>{usuarios.data.nombre}</Card.Title>
                <Card.Text>{usuarios.data.correo}</Card.Text>
                <div className="mio-botoneliminar">
                    <Button variant="danger" className="">
                        <FontAwesomeIcon icon={faTimes} /> 
                    </Button>
                </div>
                <div className="mio-switch">
                <Form.Switch // prettier-ignore
                    type="switch"
                   className=""
                />
                </div>
            </Card.Body>
        </Card>
    )
}

export {Cardusuario}