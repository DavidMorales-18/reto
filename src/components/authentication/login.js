import React from 'react'
import { Button, Form, Card, Container, Row, Col, Modal } from 'react-bootstrap';

import {
    useHistory,
    useLocation
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        auth.signin(() => {
            history.replace(from);
        });
    };
    
    return <>

        <Container>

            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Modal.Dialog>
                        <Modal.Title>Login</Modal.Title>

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese usuario" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contraseñas</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <br></br>

                                <Button variant="primary" type="submit">Login</Button>
                                <Button variant="light">Cancelar</Button>

                            </Card.Body>
                        </Card>
                    </Modal.Dialog>

                </Col>
            </Row>
        </Container>

    </>
}

export default Login