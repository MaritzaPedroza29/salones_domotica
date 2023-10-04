import { Badge, Button, Card } from "react-bootstrap";
import{Link, NavLink} from "react-router-dom";
import miImagen from '../img/profesora1.png';

const Cardusuario= ({usuarios})=>{
    console.log(usuarios);
    return(
        <Card className="mt-3 mb-3">
            <Card.Body className="mio-card">
                <img
                    src={usuarios.data.imagen}
                    alt=""
                    className='mio-cardimagen'
                />
                <Card.Title>{usuarios.data.nombre}</Card.Title>
                <Card.Text>{usuarios.data.correo}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export {Cardusuario}