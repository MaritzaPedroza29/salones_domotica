import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { Rectangulo } from "../componentes/rectaguloinicio";
import { Cuadrado } from "../componentes/cuadradoinicio";
import { Navegacion } from "../layouts/navegacion";
import { Getuser } from "../services/api";

function Inicio (){
    Getuser()
    return(
        <>
            <Navegacion></Navegacion>
            <div className="container_bloques row">
                <div className="mio-bloqueA col-4">
                    <div className="piso1">
                        <div className="card">
                    
                        </div>
                    </div>
                </div>
            </div>
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