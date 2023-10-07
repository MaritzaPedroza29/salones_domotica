import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { Rectangulo } from "../componentes/rectaguloinicio";
import { Cuadrado } from "../componentes/cuadradoinicio";
import { Navegacion } from "../layouts/navegacion";

function Inicio (){
    const [salones, setSalones] = useState([
        {
          "bloque": "bloqueA",
          "data": {
            "id": 1,
            "pisos": [
                {
                  "id": 1,
                  "piso": "primer piso",
                  "salones": [
                    {
                        "id":1,
                        "Salon":"A101",
                        "profesor":"Juan Sebastián Galindo",
                        "estado": "0"
                    },{
                        "id":2,
                        "Salon":"A102",
                        "profesor":"Magda Martinez",
                        "estado":"80"
                    },{
                        "id":3,
                        "Salon":"A103",
                        "profesor":"Rodolfo Ortega",
                        "estado":"50"
                    },{
                        "id":4,
                        "Salon":"A104",
                        "profesor":"Darwin Cardozo",
                        "estado":"0"
                    },{
                        "id":1,
                        "Salon":"A105",
                        "profesor":"Blanca Florez",
                        "estado":"80"
                    }
                ]
                },
                {
                  "id": 2,
                  "piso": "segundo piso",
                  "salones": [
                    {
                        "id":1,
                        "Salon":"A206",
                        "profesor":"Juan Sebastián Galindo",
                        "estado":"0"
                    },{
                        "id":2,
                        "Salon":"A207",
                        "profesor":"Magda Martinez",
                        "estado":"80"
                    },{
                        "id":3,
                        "Salon":"A208",
                        "profesor":"Rodolfo Ortega",
                        "estado":"50"
                    },{
                        "id":4,
                        "Salon":"A209",
                        "profesor":"Darwin Cardozo",
                        "estado":"80"
                    },{
                        "id":1,
                        "Salon":"A210",
                        "profesor":"Blanca Florez",
                        "estado":"0"
                    },{
                        "id":1,
                        "Salon":"A211",
                        "profesor":"Giovani Rodriguez",
                        "estado":"50"
                    }
                ]
                },
                {
                  "id": 3,
                  "piso": "tercer piso",
                  "salones": [
                    {
                        "id":1,
                        "Salon":"A301",
                        "profesor":"Juan Sebastián Galindo",
                        "estado":"0"
                    },{
                        "id":2,
                        "Salon":"A302",
                        "profesor":"Magda Martinez",
                        "estado":"0"
                    },{
                        "id":3,
                        "Salon":"A303",
                        "profesor":"Rodolfo Ortega",
                        "estado":"50"
                    },{
                        "id":4,
                        "Salon":"A304",
                        "profesor":"Darwin Cardozo",
                        "estado": "0"
                    },{
                        "id":5,
                        "Salon":"A305",
                        "profesor":"Blanca Florez",
                        "estado":"80"
                    },{
                        "id":6,
                        "Salon":"A306",
                        "profesor":"Giovani Rodriguez",
                        "estado":"50"
                    },{
                        "id":7,
                        "Salon":"A307",
                        "profesor":"Juan Sebastián Galindo",
                        "estado":"0"
                    },{
                        "id":8,
                        "Salon":"A308",
                        "profesor":"Rodolfo ortega",
                        "estado":"80"
                    },{
                        "id":9,
                        "Salon":"A309",
                        "profesor":"Giovani Rodriguez",
                        "estado":"0"
                    }
                ]
                }
              ],
          }
        },
        {
          "bloque": "bloqueB",
          "data": {
            "id": 2,
            "pisos": [
                {
                  "id": 1,
                  "piso": "primer piso",
                  "salones": [
                    {
                        "id":1,
                        "Salon":"B102",
                        "profesor":"Administrativo",
                        "estado":"administrativo"
                    },]
                },{
                    "id": 2,
                    "piso": "segundo piso",
                    "salones": [
                      {
                          "id":1,
                          "Salon":"B201",
                          "profesor":"Rodolfo Ortega",
                          "estado":"50"
                      },{
                        "id":2,
                        "Salon":"B202",
                        "profesor":"Darwin Cardozo",
                        "estado":"0"
                    },{
                        "id":3,
                        "Salon":"B203",
                        "profesor":"Giovani Rodriguez",
                        "estado":"50"
                    },{
                        "id":4,
                        "Salon":"B204",
                        "profesor":"Magda Martinez",
                        "estado":"80"
                    },] 
                }
            ]
          }
        },
        {
          "bloque": "bloqueC",
          "data": {
            "id": 3,
            "imagen": "./img/profesora3.png",
            "nombre": "Magda Martinez",
            "correo": "doc_mf_martinez@fesc.edu.co",
            "estado": "1"
          }
        }
      ]);
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