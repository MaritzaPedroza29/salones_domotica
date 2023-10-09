import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../../css/index.css';
import { Cuadrado } from './cuadradoinicio';

function Rectangulo({ bloque }) {
  console.log(bloque.data.pisos);

  // Asegúrate de que bloque.data.pisos sea un arreglo
  const pisos = bloque.data.pisos || []; // Si no hay pisos, utiliza un arreglo vacío
  console.log(pisos);

  return (
    <>
     <label>{bloque.bloque}</label>
    <div className="mio-centrar-tarjeta">
    <Card className="mio-rectangle">
      <Card.Body>
        {pisos.map((piso, index) => (
          <>
          <label>{piso.piso}</label>
          <Card className="mio-rectangle-piso" key={index}>
            <Card.Body>
              <Row>
                  {piso.salones.map((salon, salonIndex) => (
                    <Col key={salonIndex}>
                      <Cuadrado salones={salon}>{salon}</Cuadrado>
                    </Col>
                  ))}
              </Row></Card.Body>
          </Card>
          </>
        ))}
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export { Rectangulo };