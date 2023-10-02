import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import miImagen from '../img/Smartroom.png';
import { NavLink } from 'react-router-dom';

function Navegacion(){
return (
    <Navbar className="mio-navbar" expand="lg">
        <Container>
        <img
            src={miImagen}
            alt=""
            className='mio-logo'
        />
        <Nav className='ms-auto'>
            <Form className="mio-botones d-flex">
                <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                />
                <Button className="">Buscar</Button>
            </Form>
        </Nav>
        <Nav className='ms-auto'>
            <Nav.Link as={NavLink} to={"/usuarios"} className='mio-link'>usuarios</Nav.Link>
            <Nav.Link as={NavLink} to={"/salones"} className='mio-link'>salones</Nav.Link>
            <Nav.Link as={NavLink} to={"/dispositivos"} className='mio-link'>dispositivos</Nav.Link>
            <Nav.Link as={NavLink} to={"/"} className='mio-link'>Cerrar sesión</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
)
}
export { Navegacion };