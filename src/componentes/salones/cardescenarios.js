import { Card, Col, Row } from 'react-bootstrap';
import '../../css/index.css';

function Cardescenarios (informacion){
    console.log(informacion.data.salones);
    <Card className="">
      <Card.Body>
        <Card.Title>{informacion.data.salones.nombresalon}</Card.Title>
      </Card.Body>
    </Card>
}

export {Cardescenarios};