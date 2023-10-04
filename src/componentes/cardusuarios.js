import { Badge, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


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
                <Button variant="success" style={{ marginRight: '10px' }}>Activo</Button>
                <Button variant="warning" style={{ marginLeft: '10px' }}>Inactivo</Button>
            </Card.Body>
        </Card>
    )
}

export {Cardusuario}