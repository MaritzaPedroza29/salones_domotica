import { Navegacion } from "../layouts/navegacion";
import {  Card, Col, Container, Row } from "react-bootstrap";
import {Select} from "../componentes/salones/selectescenarios";
import { Cardescenarios } from "../componentes/salones/cardescenarios";
import { useState } from "react";
import { Botoncrear } from "../componentes/salones/botoncrear";
import { Modalcrearsalon } from "../componentes/salones/modalcrearsalon";
import aireacondicionado from "../img/aireacondicionado.png";
import televisor from  "../img/monitor-de-tv.png";
import puerta from "../img/puerta.png";


function Salones () {
    const [selectedOptionInfo, setSelectedOptionInfo] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [salones, setSalones] = useState([
        {
            "bloque": "bloqueA",
            "data": {
              "id": 1,
              "salones": [
                {
                    "id":1,
                    "nombresalon":"A101",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":2,
                    "nombresalon":"A102",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":3,
                    "nombresalon":"A103",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                        "id":4,
                        "nombresalon":"A104",
                        "dispositivos":"3 dispositivos",
                        "aire_acondicionado":aireacondicionado,
                        "televisor":televisor,
                        "puerta":puerta
                },{
                        "id":5,
                        "nombresalon":"A105",
                        "dispositivos":"3 dispositivos",
                        "aire_acondicionado":aireacondicionado,
                        "televisor":televisor,
                        "puerta":puerta
                }
              ]
            }
        },{
            "bloque": "bloqueB",
            "data": {
              "id": 2,
              "salones": [
                {
                    "id":1,
                    "nombresalon":"B201",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":2,
                    "nombresalon":"B202",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":3,
                    "nombresalon":"B203",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":4,
                    "nombresalon":"B204",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                }
            ]
            }
        },{
            "bloque": "bloqueC",
            "data": {
              "id": 3,
              "salones": [
                {
                    "id":1,
                    "nombresalon":"C201",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":2,
                    "nombresalon":"C202",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":3,
                    "nombresalon":"C205",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":4,
                    "nombresalon":"C206",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":5,
                    "nombresalon":"C207",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":6,
                    "nombresalon":"C301",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":7,
                    "nombresalon":"C302",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":8,
                    "nombresalon":"C303",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":9,
                    "nombresalon":"C304",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":10,
                    "nombresalon":"C305",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":11,
                    "nombresalon":"C306",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":12,
                    "nombresalon":"C401",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":13,
                    "nombresalon":"C402",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                },{
                    "id":14,
                    "nombresalon":"C305",
                    "dispositivos":"3 dispositivos",
                    "aire_acondicionado":aireacondicionado,
                    "televisor":televisor,
                    "puerta":puerta
                }
            ]
            }
        }
    ])
    const opcionselect = (salonesSeleccionados) => {
        console.log(typeof(salones));
        console.log(salonesSeleccionados);
        setSelectedOptionInfo(salonesSeleccionados);
    };
    const agregarSalones = (nuevoSalon) => {
        setSalones([...salones, nuevoSalon]);
      };
    const abrirModal = () => {
        console.log("hola mundo");
        setMostrarModal(true);
      };
    
      const cerrarModal = () => {
        setMostrarModal(false);
      };    
    return(
        <>
            <Navegacion></Navegacion>
            <Container className="mt-3 mb-3">
                <h3 className="text-center">Escenarios</h3>
                <Botoncrear abrirModal={abrirModal}></Botoncrear>
                <Modalcrearsalon mostrarModal={mostrarModal} cerrarModal={cerrarModal} salones={salones} agregarSalon={agregarSalones}></Modalcrearsalon>
                <p>Seleccione una de las opciones</p>
                <Select salones={salones} opcionselect={opcionselect} className="mt-2"></Select>
                <Row className="justify-content-md-center">
                {selectedOptionInfo ? (
                    selectedOptionInfo.map((selectinfo) =><Col sm="12" md="8" lg="6"><Cardescenarios informacion={selectinfo}/></Col>)
                ) : (
                    <></> // Esto representa un fragmento vacío, es decir, no renderiza nada.
                )}
                </Row>
            </Container>
        </>
    )
}
export {Salones};
