import { useEffect, useState } from 'react';
import {SigninFormulario} from '../componentes/signinformulario.js';
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Getuser} from '../services/api.js';
import { useNavigate } from 'react-router-dom';

function Signin () {
    const [errores, setErrores]= useState({});
    const conectado=useSelector(estado=>estado.conectado);
    const navegar=useNavigate();
    const enviarAccion= useDispatch();

    useEffect(()=>{
        if(conectado){
            navegar("/pagina-principal")
        }
    });

    const login =({ usuario, contraseña })=>{
        const error={};
        setErrores(error);

        Getuser(usuario, contraseña)
        .then(respuesta=>{
            if(respuesta.data.code == 401){
                setErrores({ingresar: respuesta.data.description});
            }else{
                navegar("/pagina-principal")
            }
            
        }).catch(err=>{
            setErrores({ingresar: "No se puede iniciar sesion con esas credenciales"});
        });
        
    }
    return(
        <Container className="mt-3 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <Card.Body>
                        {errores.ingresar && <Alert variant='danger'>{errores.ingresar}</Alert>}
                        <SigninFormulario errores={errores} callback={login}></SigninFormulario>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}
export {Signin}
