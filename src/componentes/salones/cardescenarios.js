import { Card, Col, Row } from 'react-bootstrap';
import '../../css/index.css';

function Cardescenarios (informacion){
  console.log(informacion.informacion);
    return (
      <Row className='mio-contenedor-flex'>
      {informacion.informacion[0].data.salones.map((salon, index) => (
        <Col md={3} key={index}>
          <Card className='mio-cardsalones'>
            <Card.Body className=''>
              <Card.Title>{salon.nombresalon}</Card.Title>
              <p>{salon.dispositivos}</p>
              <img
                  src={salon.aire_acondicionado}
                  alt=""
                  className='mio-iconos'
              />
              <img
                  src={salon.televisor}
                  alt=""
                  className='mio-iconos'
              />
              <img
                  src={salon.puerta}
                  alt=""
                  className='mio-iconos'
              />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    );
  }

export {Cardescenarios};