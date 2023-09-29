import {SplashScreen} from '../componentes/splashscreen.js';
import { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import { Navegacion } from '../layouts/navegacion.js';


function SplashScreen () {

    const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            // Simula un tiempo de carga (puedes reemplazarlo con tu lógica de carga real)
            setTimeout(() => {
            setIsLoading(false);
            }, 3000); // Ejemplo: 3 segundos de carga simulada
        }, []);
    return(
        <Container className="mt-4 mb-4">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <Card.Body>
                    {isLoading ? (
                        <SplashScreen />
                    ) : (
                        // Renderiza el contenido principal de tu aplicación aquí
                        <div>
                        <h1>Mi Aplicación React</h1>
                        {/* Resto de tu contenido */}
                        </div>
                    )}
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {SplashScreen}