import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ModalCrearUsuario } from './modalcrearusuario';
import { useState } from 'react';

function Botoncrear({ abrirModal }){
    return(
        <div className='mio-botoncrear'>
            <Button className='' onClick={abrirModal}>
                <FontAwesomeIcon icon={faPlus} />
            </Button>
        </div>
    )
}

export{Botoncrear};