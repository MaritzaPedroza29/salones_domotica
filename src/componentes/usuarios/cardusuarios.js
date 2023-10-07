import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Modaldetalleusuario } from "./modaldetalleusuario";


const Cardusuario= ({usuarios, eliminarUsuario})=>{
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState([]);
    console.log(typeof(userData));

    const handleClick = () => {
        eliminarUsuario(usuarios.data.id);
      };

      const handleCardClick = () => {
        setShowModal(true);
        setUserData(usuarios); // Pasar una matriz de usuarios
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };
      
    return(
        <>
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
                    <Button variant="danger" className="" onClick={handleClick}>
                        <FontAwesomeIcon icon={faTimes} /> 
                    </Button>
                </div>
                <div className="mio-switch">
                <Form.Switch // prettier-ignore
                    type="switch"
                   className=""
                />
                </div>
                <div className="mio-botones">
                  <Button className="">
                    <FontAwesomeIcon icon={faEdit} onClick={handleCardClick}/>
                  </Button>
                </div>
            </Card.Body>
        </Card>

        <Modaldetalleusuario
          show={showModal}
          handleClose={handleCloseModal}
          userData={userData}
        />
      </>
    )
}

export {Cardusuario}