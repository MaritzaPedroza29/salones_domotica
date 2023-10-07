import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { Rectangulo } from "../componentes/rectaguloinicio";
import { Cuadrado } from "../componentes/cuadradoinicio";
import { Navegacion } from "../layouts/navegacion";
import { useState } from "react";
import { Cardbloques } from "../componentes/inicio/cardbloques";

function Inicio (){
    const [mostrarbloque, setMostrarbloque] = useState(false);
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
            "pisos": [
                {
                  "id": 1,
                  "piso": "primer piso",
                  "salones": [
                    {
                        "id":1,
                        "Salon":"C201",
                        "profesor":"Rodolfo Ortega",
                        "estado":"0"
                    },{
                        "id":2,
                        "salon":"profesores",
                        "profesor": "profesores",
                        "estado": "administrativo"
                    }]
                },{
                    "id":2,
                    "piso":"segundo piso",
                    "salones":[
                        {
                            "id":1,
                            "Salon":"C202",
                            "profesor":"Maria Fernandez",
                            "estado":"0"
                        },{
                            "id":2,
                        "Salon":"C205",
                        "profesor":"Alfonso Suarez",
                        "estado":"80"
                        },{
                            "id":3,
                        "Salon":"C206",
                        "profesor":"Mildred Dias",
                        "estado":"50"
                        },{
                            "id":4,
                        "Salon":"C207",
                        "profesor":"Fernanda Gonzales",
                        "estado":"0"
                        }
                    ]
                },{
                    "id":3,
                    "piso":"tercer piso",
                    "salones":[
                        {
                            "id":1,
                            "Salon":"C301",
                            "profesor":"Maria Fernandez",
                            "estado":"50"
                        },{
                            "id":2,
                            "Salon":"C302",
                            "profesor":"Camila Cordoba",
                            "estado":"80"
                        },{
                            "id":3,
                            "Salon":"C303",
                            "profesor":"Fransua Leon",
                            "estado":"50"
                        },{
                            "id":4,
                            "Salon":"C304",
                            "profesor":"Julián Acosta",
                            "estado":"80"
                        },{
                            "id":5,
                            "Salon":"C305",
                            "profesor":"Valentina Ramirez",
                            "estado":"50"
                        },{
                            "id":2,
                            "Salon":"C306",
                            "profesor":"Richar Eslava",
                            "estado":"80"
                        }
                    ]
                },{
                    "id":4,
                    "piso":"cuarto piso",
                    "salones":[
                        {
                            "id":1,
                            "Salon":"C401",
                            "profesor":"Monica Alvarez",
                            "estado":"0"
                        },{
                            "id":2,
                            "Salon":"C402",
                            "profesor":"Alexandra Unibio",
                            "estado":"50"
                        }
                    ]
                },{
                    "id":5,
                    "piso":"quinto piso",
                    "salones":[
                        {
                            "id":1,
                            "salon":"C305",
                            "profesor":"",
                            "estado":"0"
                        }
                    ]
                }
            ]
          }
        }
      ]);
    return(
        <>
            <Navegacion></Navegacion>
            <Container className="mt-3 mb-3">
                <h3 className="text-center">Inicio</h3>
                <p>Seleccione uno de los bloques</p>
                <Card.Body>
                <Row md={4}>
                    {salones.map(salon => <Col><Cardbloques key={salon.data.id} salones={salon}/></Col>)}
                </Row>
                </Card.Body>
            </Container>
        </>
    )
}

export {Inicio}