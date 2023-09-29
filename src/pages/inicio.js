import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { Rectangulo } from "../componentes/rectaguloinicio";
import { Cuadrado } from "../componentes/cuadradoinicio";
import { Navegacion } from "../layouts/navegacion";

function Inicio (){
    return(
        <>
            <Navegacion></Navegacion>
            <Container className="mt-4">
                <h3 className="text-center">Inicio</h3>
                <Card.Body>
                <Row className="mio-columnas">
                    <Col>
                    <h6 className="text-center">Bloque A</h6>
                    <Rectangulo></Rectangulo>
                    </Col>
                    <Col>
                    <h6 className="text-center">Bloque B</h6>
                    <Rectangulo></Rectangulo>
                    </Col>
                    <Col>
                    <h6 className="text-center">Bloque C</h6>
                    <Rectangulo></Rectangulo>
                    </Col>
                </Row>
                </Card.Body>
            </Container>
        </>
    )
}

export {Inicio}