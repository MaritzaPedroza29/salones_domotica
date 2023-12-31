import { Button, Card } from "react-bootstrap";
import { Cardsalones } from "./cardsalones";
import { useState } from "react";

const Cardbloques= ({salones,  onClick })=>{
    
    console.log(salones);
    let bloques = '';
    if (salones && salones.bloque) {
        bloques = salones.bloque;
    }
    return (
                <Card className="mio-cardbloques" onClick={() => onClick(salones)}>
                    <Card.Body>{bloques}</Card.Body>
                </Card>
         );
}
export {Cardbloques}